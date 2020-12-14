import { loadModules } from "esri-loader";

const serviceProxy =
  "https://utility.arcgis.com/usrsvcs/appservices/IM9l55uugiQEaBPv/rest/services/World/Route/NAServer/Route_World";
const baseMap = "streets-navigation-vector";
const centerMap = [106.775174, 10.847981];

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

const handlePointSymbol = (kind, index) => {
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
        color: "yellowgreen",
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

const handleRouteSymbol = () => {
  return {
    type: "simple-line",
    join: "bevel",
    cap: "butt",
    color: [0, 0, 255, 0.3],
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

          //Khong them trung lap depot
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

      const pointDepot = () => {
        const { id, name, place } = routes[0][0];
        const {
          long,
          lat,
          serviceTime,
          timeWindow,
          weight,
        } = routes[0][0].order;

        const symbol = {
          type: "text",
          color: "yellowgreen",
          haloColor: "black",
          haloSize: "1px",
          text: "Kho",
          xoffset: 3,
          yoffset: 3,
          font: {
            size: 14,
            outline: 0,
            family: "sans-serif",
            weight: "bold",
          },
        };

        const geometry = {
          type: "point",
          longitude: long,
          latitude: lat,
        };

        const stop = new Graphic({
          geometry,
          symbol,
        });

        routeLayer.add(stop);
        routeParams.stops.features.push(stop);
      };

      if (routes.length !== 0) {
        pointDepot();
        routes.forEach((currentRoute, index) => {
          currentRoute.forEach((subCurrentRoute, subIndex) => {
            const { id, name, place } = subCurrentRoute;
            const {
              long,
              lat,
              serviceTime,
              timeWindow,
              weight,
            } = subCurrentRoute.order;

            const symbol = {
              type: "text",
              color: "yellowgreen",
              haloColor: "black",
              haloSize: "1px",
              text: name,
              xoffset: 3,
              yoffset: 3,
              font: {
                size: 14,
                outline: 0,
                family: "sans-serif",
                weight: "bold",
              },
            };

            const geometry = {
              type: "point",
              longitude: long,
              latitude: lat,
            };

            const stop = new Graphic({
              geometry,
              symbol,
            });

            if (subIndex !== 0 && subIndex !== currentRoute.length - 1) {
              routeLayer.add(stop);
            }
            routeParams.stops.features.push(stop);
          });
        });
      }

      const showRoute = (data) => {
        let routeResult = data.routeResults[0].route;
        routeResult.symbol = {
          type: "simple-line",
          join: "bevel",
          cap: "butt",
          color: [0, 150, 150, 0.3],
          width: 4,
        };
        routeLayer.add(routeResult);
      };

      if (routes.length !== 0) {
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
