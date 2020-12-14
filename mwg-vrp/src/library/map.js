import { loadModules } from "esri-loader";

const getRandomRGB = () => (Math.random() * 256) >> 0;

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
      let routeTask = new RouteTask({
        url:
          "https://utility.arcgis.com/usrsvcs/appservices/IM9l55uugiQEaBPv/rest/services/World/Route/NAServer/Route_World",
      });
      let routeLayer = new GraphicsLayer();
      let routeParams = new RouteParameters({
        stops: new FeatureSet(),
        outSpatialReference: {
          wkid: 3857,
        },
      });
      const map = new ArcGISMap({
        basemap: "streets-navigation-vector",
        layers: [routeLayer],
      });
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [106.775174, 10.847981],
        zoom: 10,
      });

      if (subRoutes.length !== 0) {
        for (let i = 0; i < subRoutes.length; i++) {
          const element = subRoutes[i];
          const pointAtt = {
            Name: element.name,
            Weight: `${element.weight} kg`,
            ServiceTime: `${element.serviceTime}h`,
            TimeWindow: element.timeWindow,
          };
          let popupTemplate = {};
          if (i !== 0 && i !== subRoutes.length - 1) {
            popupTemplate = {
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
                      label: "Thời gian khách nhận hàng (h)",
                    },
                  ],
                },
              ],
            };
          } else {
            popupTemplate = {
              content: [
                {
                  type: "fields",
                  fieldInfos: [
                    {
                      fieldName: "Name",
                      label: "Tên khách hàng",
                    },
                    {
                      fieldName: "TimeWindow",
                      label: "Thời gian phục vụ (h)",
                    },
                  ],
                },
              ],
            };
            pointAtt.TimeWindow = `${element.timeWindow[0]} - ${element.timeWindow[1]}`;
          }
          const symbol = {
            type: "text",
            color:
              i === 0 || i === subRoutes.length - 1 ? "yellow" : "yellowgreen",
            haloColor: "black",
            haloSize: "1px",
            text: i === 0 || i === subRoutes.length - 1 ? "Kho" : i,
            xoffset: 3,
            yoffset: 3,
            font: {
              size: i === 0 || i === subRoutes.length - 1 ? 16 : 14,
              outline: 0,
              family: "sans-serif",
              weight: "bold",
            },
          };
          const geometry = {
            type: "point",
            longitude: element.long,
            latitude: element.lat,
          };
          const stop = new Graphic({
            geometry,
            symbol,
            attributes: pointAtt,
            popupTemplate,
          });
          //Khong them trung lap depot
          if (i !== subRoutes.length - 1) {
            routeLayer.add(stop);
          }
          routeParams.stops.features.push(stop);
        }
      }

      const showRoute = (data) => {
        let routeResult = data.routeResults[0].route;
        routeResult.symbol = {
          type: "simple-line",
          join: "bevel",
          cap: "butt",
          color: [0, 0, 255, 0.3],
          width: 4,
        };
        routeLayer.add(routeResult);
      };

      if (subRoutes.length !== 0) {
        routeTask.solve(routeParams).then(showRoute);
        return () => {
          if (view) {
            view.destroy();
          }
        };
      }
    }
  );
};

export const handleAllRoutes = () => {};
