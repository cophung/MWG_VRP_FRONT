import { loadModules } from "esri-loader";

const serviceProxy =
  "https://utility.arcgis.com/usrsvcs/appservices/IM9l55uugiQEaBPv/rest/services/World/Route/NAServer/Route_World";
const baseMap = "streets-navigation-vector";
const centerMap = [106.775174, 10.847981];

const randomColorRgba = (rgba) => {
  const r = () => (Math.random() * 256) >> 0;
  if (rgba === "RGBA") {
    return [r(), r(), r(), 0.3];
  } else {
    return [r(), r(), r()];
  }
};

const handlePopupTemplate = (kind) => {
  switch (kind) {
    case "customer":
      return {
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "Name",
                label: "Tên khách hàng",
              },
              {
                fieldName: "Weight",
                label: "Cân nặng",
              },
              {
                fieldName: "ServiceTime",
                label: "Thời gian phục vụ",
              },
              {
                fieldName: "TimeWindow",
                label: "Thời gian khách nhận hàng",
              },
            ],
          },
        ],
      };
    case "depot":
      return {
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "Name",
                label: "Tên",
              },
              {
                fieldName: "TimeWindow",
                label: "Thời gian phục vụ",
              },
            ],
          },
        ],
      };
    default:
      break;
  }
};

const handlePointSymbol = (kind, index, color) => {
  switch (kind) {
    case "depot":
      return {
        type: "text",
        color: "yellow",
        haloColor: "black",
        haloSize: "1px",
        text: "Kho",
        xoffset: 3,
        yoffset: 3,
        font: {
          size: 16,
          outline: 0,
          family: "sans-serif",
          weight: "bold",
        },
      };
    case "customer":
      return {
        type: "text",
        color: color ? color : "yellowgreen",
        haloColor: "black",
        haloSize: "1px",
        text: index,
        xoffset: 3,
        yoffset: 3,
        font: {
          size: 14,
          outline: 0,
          family: "sans-serif",
          weight: "bold",
        },
      };
    default:
      break;
  }
};

const handleRouteSymbol = (color = [0, 0, 255, 0.3]) => {
  return {
    type: "simple-line",
    join: "bevel",
    cap: "butt",
    color,
    width: 4,
  };
};

const handlePointAtt = (...param) => {
  const [kind, name, weight, serviceTime, timeWindow] = param;
  return {
    Name: kind === "depot" ? "Kho" : name,
    Weight: `${weight} kg`,
    ServiceTime: `${serviceTime}h`,
    TimeWindow: `${timeWindow[0]}h - ${timeWindow[1]}h`,
  };
};

export const handleSubRoutes = (mapRef, subRoutes) => {
  loadModules(
    [
      "esri/Map",
      "esri/views/MapView",
      "esri/Graphic",
      "esri/layers/GraphicsLayer",
      "esri/tasks/RouteTask",
      "esri/tasks/support/RouteParameters",
      "esri/tasks/support/FeatureSet",
    ],
    { css: true }
  ).then(
    ([
      ArcGISMap,
      MapView,
      Graphic,
      GraphicsLayer,
      RouteTask,
      RouteParameters,
      FeatureSet,
    ]) => {
      let routeTask = new RouteTask({ url: serviceProxy });
      let routeLayer = new GraphicsLayer();
      let routeParams = new RouteParameters({
        stops: new FeatureSet(),
        outSpatialReference: {
          wkid: 3857,
        },
      });
      const map = new ArcGISMap({
        basemap: baseMap,
        layers: [routeLayer],
      });
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: centerMap,
        zoom: 10,
      });

      if (subRoutes.length !== 0) {
        subRoutes.forEach((infoOrder, index) => {
          const { name } = infoOrder;
          const {
            long,
            lat,
            serviceTime,
            timeWindow,
            weight,
          } = infoOrder.order;

          let popupTemplate = {};
          let symbol = {};
          let pointAtt = {};

          if (index !== 0 && index !== subRoutes.length - 1) {
            popupTemplate = handlePopupTemplate("customer");
            symbol = handlePointSymbol("customer", index);
            pointAtt = handlePointAtt(
              "customer",
              name,
              weight,
              serviceTime,
              timeWindow
            );
          } else {
            popupTemplate = handlePopupTemplate("depot", index);
            symbol = handlePointSymbol("depot");
            pointAtt = handlePointAtt(
              "depot",
              name,
              weight,
              serviceTime,
              timeWindow
            );
          }

          const geometry = {
            type: "point",
            longitude: long,
            latitude: lat,
          };

          const stop = new Graphic({
            geometry,
            symbol,
            attributes: pointAtt,
            popupTemplate,
          });

          //Khong them trung lap depot point
          if (index !== subRoutes.length - 1) {
            routeLayer.add(stop);
          }

          routeParams.stops.features.push(stop);
        });

        const showRoute = (data) => {
          let routeResult = data.routeResults[0].route;
          routeResult.symbol = handleRouteSymbol();
          routeLayer.add(routeResult);
        };

        routeTask.solve(routeParams).then(showRoute);
      }

      return () => {
        if (view) {
          view.destroy();
        }
      };
    }
  );
};

export const handleAllRoutes = (mapRef, routes) => {
  loadModules(
    [
      "esri/Map",
      "esri/views/MapView",
      "esri/Graphic",
      "esri/layers/GraphicsLayer",
      "esri/tasks/RouteTask",
      "esri/tasks/support/RouteParameters",
      "esri/tasks/support/FeatureSet",
    ],
    { css: true }
  ).then(
    ([
      ArcGISMap,
      MapView,
      Graphic,
      GraphicsLayer,
      RouteTask,
      RouteParameters,
      FeatureSet,
    ]) => {
      let routeTask = new RouteTask({ url: serviceProxy });
      let routeLayer = new GraphicsLayer();

      const map = new ArcGISMap({
        basemap: baseMap,
        layers: [routeLayer],
      });
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: centerMap,
        zoom: 10,
      });

      let routeParams = new RouteParameters({
        stops: new FeatureSet(),
        outSpatialReference: {
          wkid: 3857,
        },
      });

      if (routes.length !== 0) {
        //Add depot point
        (function handleAddDepotPointToLayer() {
          const { name } = routes[0][0];
          const {
            long,
            lat,
            serviceTime,
            timeWindow,
            weight,
          } = routes[0][0].order;

          const popupTemplate = handlePopupTemplate("depot");

          const symbol = handlePointSymbol("depot");

          const pointAtt = handlePointAtt(
            "depot",
            name,
            weight,
            serviceTime,
            timeWindow
          );

          const geometry = {
            type: "point",
            longitude: long,
            latitude: lat,
          };

          const stop = new Graphic({
            geometry,
            symbol,
            attributes: pointAtt,
            popupTemplate,
          });

          routeLayer.add(stop);
        })();

        //Add customer point and routes
        routes.forEach((currentRoute, index) => {
          const colorPoint = randomColorRgba();
          currentRoute.forEach((subCurrentRoute, subIndex) => {
            const { name } = subCurrentRoute;
            const {
              long,
              lat,
              serviceTime,
              timeWindow,
              weight,
            } = subCurrentRoute.order;

            const popupTemplate = handlePopupTemplate("customer");
            const symbol = handlePointSymbol("customer", index + 1, colorPoint);
            const pointAtt = handlePointAtt(
              "customer",
              name,
              weight,
              serviceTime,
              timeWindow
            );

            const geometry = {
              type: "point",
              longitude: long,
              latitude: lat,
            };

            const stop = new Graphic({
              geometry,
              symbol,
              attributes: pointAtt,
              popupTemplate,
            });

            if (subIndex !== 0 && subIndex !== currentRoute.length - 1) {
              routeLayer.add(stop);
            }
            routeParams.stops.features.push(stop);
          });
        });

        const showRoute = (data) => {
          let routeResult = data.routeResults[0].route;
          routeResult.symbol = {
            type: "simple-line",
            join: "bevel",
            cap: "butt",
            color: [0, 0, 255, 0.3],
            width: 5,
          };
          routeLayer.add(routeResult);
        };

        routeTask.solve(routeParams).then(showRoute);
      }

      return () => {
        if (view) {
          view.destroy();
        }
      };
    }
  );
};
