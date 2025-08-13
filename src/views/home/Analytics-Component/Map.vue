<template>
  <div class="map" ref="chartdiv"></div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5geodata_lang_TH from "@amcharts/amcharts5-geodata/lang/TH";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
export default {
  name: "mapWorld",
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);
    root._logo.dispose();

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
        homeZoomLevel: 16,
        homeGeoPoint: { longitude: 10, latitude: 52 },
      })
    );

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        geodataNames: am5geodata_lang_TH,
        exclude: [
          "AQ",
          "FR",
          "GF",
          "GP",
          "MQ",
          "RE",
          "YT",
          "PM",
          "TF",
          "WF",
          "BL",
          "MF",
        ],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      templateField: "polygonSettings",
      fill: am5.color(0xF5F5F5),
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x4669fa),
    });

    polygonSeries.mapPolygons.template.states.create("active", {
      fill: am5.color(0x4669fa),
    });

    polygonSeries.data.setAll([{
      id: "TH",
      polygonSettings: {
        fill: am5.color(0x4669FA),
        fillOpacity: 1
      }
    }, {
      id: "JP",
      polygonSettings: {
        fill: am5.color(0x50C793),
        fillOpacity: 0.8
      }
    }, {
      id: "RU",
      polygonSettings: {
        fill: am5.color(0x0CE7FA),
        fillOpacity: 0.6
      }
    }, {
      id: "CN",
      polygonSettings: {
        fill: am5.color(0xFA916B),
        fillOpacity: 0.4
      }
    }, {
      id: "US",
      polygonSettings: {
        fill: am5.color(0xF1595C),
        fillOpacity: 0.2
      }
    }])

    //chart.set("cursor", am5xy.XYCursor.new(root, {}));

    //this.root = root;
  },

  beforeUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  },
};
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  height: 300px;
}
.map canvas:nth-child(2) {
  display: none !important;
}
</style>
