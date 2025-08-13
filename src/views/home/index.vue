<template>
  <div>
    <!-- <Breadcrumb /> -->
    <div class="grid grid-cols-12 gap-5 mb-5">
      <div class="2xl:col-span-9 lg:col-span-8 col-span-12 space-y-4">
        <Card title="ภาพรวมร้านค้า" noborder>
          <template #header>
            <DropEvent />
          </template>
          <TabGroup>
            <TabList
              class="lg:space-x-4 md:space-x-4 space-x-0 rtl:space-x-reverse md:flex p-4 bg-slate-100 dark:bg-slate-900 rounded-md">
              <Tab v-for="(item, i) in buttons" :key="i" v-slot="{ selected }" as="template">
                <button type="button"
                  class="focus:ring-0 focus:outline-none text-sm text-start w-full transition duration-150 p-4 rounded-md rtl:space-x-reverse"
                  :class="
                    selected
                      ? 'bg-white dark:bg-slate-800 dark:text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-900 dark:text-slate-300'
                  ">
                  <div class="flex md:flex-col-reverse gap-2 2xl:flex-row justify-between relative">
                    <div>
                      <span class="block mb-4 text-sm text-slate-900 dark:text-white font-medium">
                        {{ item.title }}
                      </span>
                      <span class="block mb-1 text-2xl text-slate-900 dark:text-white font-bold">
                        {{ item.count }}
                      </span>
                      <div class="flex space-x-2 rtl:space-x-reverse">
                        <div class="flex-none text-xl" :class="item.percentClass">
                          <Icon :icon="item.percentIcon" />
                        </div>
                        <div class="flex-1 text-sm">
                          <span class="block mb-[2px] font-bold" :class="item.percentClass">
                            {{item.percent}} <span
                              class="text-slate-600 dark:text-slate-300 font-medium">สัปดาห์ที่ผ่านมา</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="flex items-center justify-center min-h-12 min-w-12 max-h-12 max-w-12 text-gray-900 rounded-full text-2xl bg-opacity-[0.15] dark:bg-opacity-50 "
                      :class="item.iconColor">
                      <Icon :class="item.iconClass" :icon="item.icon" />
                    </div>
                  </div>
                </button>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <apexchart type="area" height="410" :options="
                    this.$store.themeSettingsStore.isDark
                      ? basicAreaDark.chartOptions
                      : basicArea.chartOptions
                  " :series="basicArea.series" />
              </TabPanel>
              <TabPanel>
                <apexchart type="area" height="410" :options="
                    this.$store.themeSettingsStore.isDark
                      ? basicAreaDark.chartOptions
                      : basicArea.chartOptions
                  " :series="basicArea.series" />
              </TabPanel>
              <TabPanel>
                <apexchart type="area" height="410" :options="
                    this.$store.themeSettingsStore.isDark
                      ? basicAreaDark.chartOptions
                      : basicArea.chartOptions
                  " :series="basicArea.series" />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Card>
        <Card title="สินค้ายอดนิยม" noborder>
          <template #header>
            <DropEvent />
          </template>
          <TopProducts/>
        </Card>
      </div>
      <div class="2xl:col-span-3 lg:col-span-6 col-span-12 space-y-4">
        <Card title="เป้าหมายยอดขาย" noborder>
          <template #header>
            <DropEvent />
          </template>
          <div class="flex flex-col">
            <apexchart 
              type="radialBar" 
              :height="240" 
              :options="
                this.$store.themeSettingsStore.isDark
                  ? RadialbarsDark.chartOptions
                  : Radialbars.chartOptions
              "
              :series="Radialbars.series"
            />
            <div class="flex flex-col items-center">
              <span class="text-slate-900 dark:text-white text-2xl font-bold">12.3K<span class="opacity-60 text-base font-medium"> / 20.K บาท</span></span>
              <div class="text-slate-600 dark:text-slate-300 font-medium mt-1">เป้าหมายยอดขายภายในปีนี้</div>
            </div>
          </div>
        </Card>
        <Card title="ลูกค้าที่มียอดจับจ่ายสูงที่สุด" noborder>
          <template #header>
            <DropEvent />
          </template>
          <ul class="list-item space-y-3 h-full overflow-x-auto">
            <li
              class="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0 first:mt-3"
              v-for="(item, i) in activity" :key="i">
              <div class="relative px-2">
                <div class="w-12 h-12 rounded-full relative">
                  <img :src="item.img" alt="" class="w-full h-full rounded-full object-cover" />
                  <Badge badgeClass="text-white bg-yellow-400"
                    class="absolute -left-2 -top-1"
                  >
                    {{ ++i }}
                  </Badge>
                </div>
              </div>
              <div class="text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
                <div class="text-sm text-slate-900 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">
                  Itsara Yancharoen
                </div>
                <div class="text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">
                  ยอดจ่าย: 1,234 ฿
                </div>
              </div>
              <div class="flex-1 ltr:text-right rtl:text-left">
                <Badge :badgeClass="`text-white ${ i%2 ? 'bg-danger-500' : 'bg-primary-500'}`"
                >
                  <Icon class="mr-1" :icon="`bi:caret-${ i%2 ? 'up' : 'down'}-fill`" />
                  1
                </Badge>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-5">
      <div class="lg:col-span-7 col-span-12">
        <Card title="พื้นที่ขายดีที่สุด" noborder>
          <template #header>
            <div
              class="border border-slate-200 dark:border-slate-700 dark:bg-slate-900 rounded p-1 flex items-center w-40"
            >
              <span
                class="flex-1 text-center text-sm font-normal px-3 py-1 transition-all duration-150 rounded cursor-pointer"
                :class="
                  fillterMap === 'global'
                    ? 'bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-300'
                    : 'dark:text-slate-300'
                "
                @click="fillterMap = 'global'"
                >ทั่วโลก</span
              >
              <span
                class="flex-1 text-center text-sm font-normal px-3 py-1 rounded transition-all duration-150 cursor-pointer"
                :class="
                  fillterMap === 'th'
                    ? 'bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-300'
                    : 'dark:text-slate-300'
                "
                @click="fillterMap = 'th'"
                >ไทย</span
              >
            </div>
          </template>
          <div class="md:flex items-center">
            <div class="flex-1">
                <Map v-if="fillterMap == 'global'" />
                <MapTH v-else-if="fillterMap == 'th'" />
              </div>
              <div class="flex-none ml-4">
                <h4
                  class="text-slate-900 dark:text-white text-sm font-medium mb-2"
                >
                  จำนวนสินค้าที่ขายได้
                </h4>
                <div
                  class="text-slate-900 dark:text-white font-bold mb-1 text-lg"
                  v-if="fillterMap === 'global'"
                >
                  123,456
                </div>
                <div
                  class="text-slate-900 dark:text-white font-bold mb-1 text-lg"
                  v-if="fillterMap === 'th'"
                >
                  12,345
                </div>
                <div class="flex space-x-2 rtl:space-x-reverse">
                  <div class="flex-none text-xl text-success-500">
                    <Icon icon="heroicons:arrow-trending-up" />
                  </div>
                  <div class="flex-1 text-sm">
                    <span class="block font-bold text-success-500">
                      1.23% <span
                        class="text-slate-600 dark:text-slate-300 font-medium"> สัปดาห์ที่ผ่านมา</span>
                    </span>
                  </div>
                </div>
                <ul v-if="fillterMap == 'global'"
                  class="bg-slate-50 dark:bg-slate-900 rounded p-4 min-w-[184px] space-y-5 mt-4"
                >
                  <li
                    v-for="(item, i) in mostViewGlobal"
                    :key="i"
                    class="flex justify-between text-xs text-slate-600 dark:text-slate-300"
                  >
                    <span class="flex space-x-2 rtl:space-x-reverse items-center">
                      <span
                        :class="item.cls"
                        class="inline-flex h-[6px] w-[6px] ring-opacity-25 rounded-full ring-4"
                      ></span>
                      <span>{{ item.title }}</span></span
                    >
                    <span>{{ item.amount }}</span>
                  </li>
                </ul>
                <ul v-else-if="fillterMap == 'th'"
                  class="bg-slate-50 dark:bg-slate-900 rounded p-4 min-w-[184px] space-y-5 mt-4"
                >
                  <li
                    v-for="(item, i) in mostViewTH"
                    :key="i"
                    class="flex justify-between text-xs text-slate-600 dark:text-slate-300"
                  >
                    <span class="flex space-x-2 rtl:space-x-reverse items-center">
                      <span
                        :class="item.cls"
                        class="inline-flex h-[6px] w-[6px] ring-opacity-25 rounded-full ring-4"
                      ></span>
                      <span>{{ item.title }}</span></span
                    >
                    <span>{{ item.amount }}</span>
                  </li>
                </ul>
              </div>
          </div>
        </Card>
      </div>
      <div class="lg:col-span-5 col-span-12">
        <Card title="ยอดคำสั่งซื้อจำแนกตามประเภทสินค้า" noborder>
          <template #header>
            <SelectMonth />
          </template>
          <apexchart
            type="pie"
            height="335"
            :options="
              this.$store.themeSettingsStore.isDark
                ? pieChartDark.chartOptions
                : pieChart.chartOptions
            "
            :series="pieChart.series"
          />
        </Card>
      </div>
      <div class="col-span-12">
        <Card title="ยอดคำสั่งซื้อล่าสุด" noborder>
          <template #header>
            <SelectMonth />
          </template>
          <Etable />
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import { MenuItem, TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Badge from "@/components/Badge";
import {
  gearradil,
  gearradilDark,
  Radialbars,
  RadialbarsDark,
  MultipleRadialbars,
  MultipleRadialbarsDark,
} from "../../constant/appex-chart";
import Etable from "./Analytics-Component/Etable";
import TopProducts from "./Analytics-Component/TopProducts";
import {
  basicArea,
  basicAreaDark,
  columnCharthome,
  columnCharthomeDark,
  pieChart,
  pieChartDark,
  shapeLine1,
  shapeLine2,
  shapeLine3,
  mostSales,
} from "./Analytics-Component/data";
import DropEvent from "./Analytics-Component/DropEvent";
import Map from "./Analytics-Component/Map";
import MapTH from "./Analytics-Component/MapTH";
import SelectMonth from "./Analytics-Component/SelectMonth";
import Breadcrumb from "./Analytics-Component/Breadcrumbs";
import window from "@/mixins/window";

// image import
import widget1 from "@/assets/images/all-img/widget-bg-1.png"
import activity1 from "@/assets/images/users/user-1.png"
import activity2 from "@/assets/images/users/user-2.png"
import activity3 from "@/assets/images/users/user-3.png"
import activity4 from "@/assets/images/users/user-4.png"
import activity5 from "@/assets/images/users/user-5.png"
import activity6 from "@/assets/images/users/user-6.png"

export default {
  mixins: [window],
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    MenuItem,
    Card,
    Icon,
    Badge,
    TopProducts,
    Etable,
    Map,
    MapTH,
    DropEvent,
    SelectMonth,
    Breadcrumb,
  },
  data() {
    return {
      widget1,
      basicArea,
      basicAreaDark,
      columnCharthome,
      columnCharthomeDark,
      Radialbars,
      RadialbarsDark,
      MultipleRadialbars,
      MultipleRadialbarsDark,
      pieChart,
      pieChartDark,
      gearradil,
      gearradilDark,
      mostSales,
      fillterMap: "th",
      statistics: [
        {
          name: shapeLine1,
          title: "Totel revenue",
          count: "3,564",
          bg: "bg-[#E5F9FF] dark:bg-slate-900	",
        },
        {
          name: shapeLine2,
          title: "Products sold",
          count: "564",
          bg: "bg-[#FFEDE5] dark:bg-slate-900	",
        },
        {
          name: shapeLine3,
          title: "Growth",
          count: "+5.0%",
          bg: "bg-[#EAE5FF] dark:bg-slate-900	",
        },
      ],
      activity: [
        {
          id: 1,
          img: activity1,
        },
        {
          id: 2,
          img: activity2,
        },
        {
          id: 3,
          img: activity3,
        },
        {
          id: 4,
          img: activity4,
        },
        {
          id: 5,
          img: activity5,
        },
        {
          id: 6,
          img: activity6,
        },
        {
          id: 7,
          img: activity1,
        },
        {
          id: 8,
          img: activity4,
        },
        {
          id: 9,
          img: activity3,
        },
        {
          id: 10,
          img: activity1,
        },
      ],
      buttons: [
        {
          title: "ยอดขายสินค้า",
          count: "12,345 ฿",
          percent: "1.23% ",
          percentIcon: "heroicons:arrow-trending-up",
          percentClass: "text-success-500",
          icon: "heroicons:currency-dollar",
          iconClass: "text-success-500",
          iconColor: "bg-success-500",
        },
        {
          title: "ยอดคำสั่งซื้อ",
          count: "1,234",
          percent: "1.2% ",
          percentIcon: "heroicons:arrow-trending-down",
          percentClass: "text-danger-500",
          icon: "heroicons:shopping-cart",
          iconClass: "text-warning-500",
          iconColor: "bg-warning-500",
        },
        {
          title: "ผู้เข้าเยี่ยมชม",
          count: "1,234,567",
          percent: "12.34% ",
          percentIcon: "heroicons:arrow-trending-up",
          percentClass: "text-success-500",
          icon: "heroicons:eye",
          iconClass: "text-info-500",
          iconColor: "bg-info-500",
        },
      ],
      mostViewGlobal: [
        {
          title: "ไทย",
          amount: "(123,456)",
          cls: "bg-primary-500 ring-primary-500",
        },
        {
          title: "ญี่ปุ่น",
          amount: "(2,345)",
          cls: "bg-success-500 ring-success-500",
        },
        {
          title: "รัสเซีย",
          amount: "(345)",
          cls: "bg-info-500 ring-info-500",
        },
        {
          title: "จีน",
          amount: "(45)",
          cls: "bg-warning-500 ring-warning-500",
        },
        {
          title: "สหรัฐอเมริกา",
          amount: "(5)",
          cls: "bg-danger-500 ring-danger-500",
        },
      ],
      mostViewTH: [
        {
          title: "กรุงเทพฯ",
          amount: "(12,345)",
          cls: "bg-primary-500 ring-primary-500",
        },
        {
          title: "จันทบุรี",
          amount: "(123)",
          cls: "bg-success-500 ring-success-500",
        },
        {
          title: "เชียงใหม่",
          amount: "(20)",
          cls: "bg-info-500 ring-info-500",
        },
        {
          title: "แพร่",
          amount: "(10)",
          cls: "bg-warning-500 ring-warning-500",
        },
        {
          title: "น่าน",
          amount: "(5)",
          cls: "bg-danger-500 ring-danger-500",
        },
      ],
    };
  },

  computed: {
    columnCharthomeComputed() {
      return {
        series: [
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          },
          {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              endingShape: "rounded",
              columnWidth: "45%",
            },
          },
          legend: {
            show: true,
            position: "top",
            horizontalAlign: "right",
            fontSize: "12px",
            fontFamily: "Inter",
            offsetY: -30,
            markers: {
              width: 8,
              height: 8,
              offsetY: -1,
              offsetX: -5,
              radius: 12,
            },
            labels: {
              colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
            },
            itemMargin: {
              horizontal: 18,
              vertical: 0,
            },
          },
          title: {
            text: "Revenue Report",
            align: "left",

            offsetX: this.$store.themeSettingsStore.direction ? "0%" : 0,
            offsetY: 13,
            floating: false,
            style: {
              fontSize: "20px",
              fontWeight: "500",
              fontFamily: "Inter",
              color: this.$store.themeSettingsStore.isDark ? "#fff" : "#0f172a",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          yaxis: {
            opposite: this.$store.themeSettingsStore.direction ? true : false,
            labels: {
              style: {
                colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
                fontFamily: "Inter",
              },
            },
          },
          xaxis: {
            categories: [
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
            ],
            labels: {
              style: {
                colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
                fontFamily: "Inter",
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },

          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands";
              },
            },
          },
          colors: ["#4669FA", "#0CE7FA", "#FA916B"],
          grid: {
            show: true,
            borderColor: this.$store.themeSettingsStore.isDark ? "#334155" : "#E2E8F0",
            strokeDashArray: 10,
            position: "back",
          },
          responsive: [
            {
              breakpoint: 600,
              options: {
                legend: {
                  position: "bottom",
                  offsetY: 8,
                  horizontalAlign: "center",
                },
                plotOptions: {
                  bar: {
                    columnWidth: "80%",
                  },
                },
              },
            },
          ],
        },
      };
    },
  },
};
</script>
<style lang=""></style>
