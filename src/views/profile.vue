<template>
  <div class="space-y-5 profile-page">
    <!-- <Card title="ตั้งค่าโปรไฟล์ของคุณให้สมบูรณ์" noborder>
      <div class="w-full text-end">
        <span class="text-slate-900 dark:text-white ">
          75% สมบูรณ์
        </span>
      </div>
      <ProgressBar value="75" barColor="bg-success-500" striped height="h-3" />
    </Card> -->
    <div
      class="profiel-wrap py-6 px-16 pt-56 rounded-lg bg-white dark:bg-slate-800 border border-gray-5002 dark:border-slate-700 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]">
      <div class="image-box p-6 pb-4 absolute left-0 top-0 lg:h-4/5 md:h-[370px] h-[340px] w-full z-[-1] rounded-t-lg">
        <img :src="bgCover" alt="" class="block w-full h-full object-cover rounded-md" />
      </div>
      <div class="profile-box flex-none md:text-start text-center">
        <div class="md:flex items-end md:space-x-6 rtl:space-x-reverse">
          <div class="flex-none">
            <div
              class="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-8 ring-slate-100 relative">
              <img :src="user9" alt="" class="w-full h-full object-cover rounded-full" />
              <router-link to="/app/profile-setting"
                class="absolute right-2 h-10 w-10 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px] text-xl">
                <Icon icon="heroicons-outline:camera" />
              </router-link>
            </div>
          </div>
          <div class="flex-1">
            <div class="text-2xl font-medium text-slate-900 dark:text-white mb-[3px]">
              Itsara Yancharoen
            </div>
            <div class="text-sm font-light text-slate-500 dark:text-slate-400">
              Administrator
            </div>
          </div>
        </div>
      </div>
      <div class="profile-info-500 lg:flex items-center lg:text-start text-center md:space-x-4 lg:space-y-0 space-y-4">
        <span class="text-base font-light text-slate-500 dark:text-slate-400">
          Social
        </span>
        <ul class="flex flex-wrap space-x-4">
          <li class="flex-1">
            <a href="#"
              class="inline-flex h-10 w-10 bg-[#1C9CEB] text-white text-2xl flex-col items-center justify-center rounded-full">
              <img src="@/assets/images/icon/tw.svg" alt="" />
            </a>
          </li>
          <li class="flex-1">
            <a href="#"
              class="inline-flex h-10 w-10 bg-[#395599] text-white text-2xl flex-col items-center justify-center rounded-full">
              <img src="@/assets/images/icon/fb.svg" alt="" />
            </a>
          </li>
          <li class="flex-1">
            <a href="#"
              class="inline-flex h-10 w-10 bg-[#0A63BC] text-white text-2xl flex-col items-center justify-center rounded-full">
              <img src="@/assets/images/icon/in.svg" alt="" />
            </a>
          </li>
          <li class="flex-1">
            <a href="#"
              class="inline-flex h-10 w-10 bg-[#EA4335] text-white text-2xl flex-col items-center justify-center rounded-full">
              <img src="@/assets/images/icon/gp.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <div class="lg:col-span-4 col-span-12 space-y-4">
        <Card title="ข้อมูลส่วนตัว" noborder>
          <ul class="list space-y-8">
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                <Icon icon="heroicons-outline:user" />
              </div>
              <div class="flex-1">
                <div class="uppercase text-xs text-slate-500 dark:text-slate-400 mb-1 leading-[12px]">
                  ชื่อจริง
                </div>
                <a class="text-base text-slate-600 dark:text-slate-50">
                  อิทธิ์ศรา ยันต์เจริญ
                </a>
              </div>
            </li>
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                <Icon icon="heroicons-outline:cake" />
              </div>
              <div class="flex-1">
                <div class="uppercase text-xs text-slate-500 dark:text-slate-400 mb-1 leading-[12px]">
                  วันเกิด
                </div>
                <a class="text-base text-slate-600 dark:text-slate-50">
                  10 พฤษภาคม 2544 (อายุ 24 ปี)
                </a>
              </div>
            </li>
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                <Icon icon="heroicons-outline:envelope" />
              </div>
              <div class="flex-1">
                <div class="uppercase text-xs text-slate-500 dark:text-slate-400 mb-1 leading-[12px]">
                  อีเมล์
                </div>
                <a href="mailto:someone@example.com" class="text-base text-slate-600 dark:text-slate-50">
                  itsara.ycr@gmail.com
                </a>
              </div>
            </li>
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                <Icon icon="heroicons-outline:phone-arrow-up-right" />
              </div>
              <div class="flex-1">
                <div class="uppercase text-xs text-slate-500 dark:text-slate-400 mb-1 leading-[12px]">
                  เบอร์โทร
                </div>
                <a href="tel:0189749676767" class="text-base text-slate-600 dark:text-slate-50">
                  063 273 4599
                </a>
              </div>
            </li>
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                <Icon icon="heroicons-outline:map" />
              </div>
              <div class="flex-1">
                <div class="uppercase text-xs text-slate-500 dark:text-slate-400 mb-1 leading-[12px]">
                  ที่อยู่
                </div>
                <div class="text-base text-slate-600 dark:text-slate-50">
                  2650 ถนนลาดกระบัง เขตลาดกระบัง แขวงลาดกระบัง กรุงเทพมหานคร 10520
                </div>
              </div>
            </li>
          </ul>
        </Card>
        <Card title="ข้อมูลหน่วยงาน" noborder>
          <ul class="list space-y-8">
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                <Icon icon="heroicons-outline:building-office" />
              </div>
              <div class="flex-1">
                <div class="uppercase text-xs text-slate-500 dark:text-slate-400 mb-1 leading-[12px]">
                  หน่วยงาน
                </div>
                <a class="text-base text-slate-600 dark:text-slate-50">
                  Production
                </a>
              </div>
            </li>
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                <Icon icon="heroicons-outline:briefcase" />
              </div>
              <div class="flex-1">
                <div class="uppercase text-xs text-slate-500 dark:text-slate-400 mb-1 leading-[12px]">
                  ตำแหน่งงาน
                </div>
                <a class="text-base text-slate-600 dark:text-slate-50">
                  Web Developer
                </a>
              </div>
            </li>
          </ul>
        </Card>
      </div>
      <div class="lg:col-span-8 col-span-12 space-y-4">
        <TabGroup>
          <Card>
            <TabList class="lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse flex">
              <Tab
                v-slot="{ selected }"
                as="template"
                v-for="(item, i) in buttons"
                :key="i"
              >
                <button
                  :class="[
                    selected
                      ? 'text-primary-500 before:w-full'
                      : 'text-slate-600 before:w-0 dark:text-slate-300',
                  ]"
                  class="w-full inline-flex items-center justify-center text-sm font-medium capitalize bg-white dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-2 transition duration-150 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-primary-500 before:-translate-x-1/2"
                >
                  <span class="text-base relative ltr:mr-1 rtl:ml-1"
                    ><Icon :icon="item.icon" /></span
                  >{{ item.title }}
                </button>
              </Tab>
            </TabList>
          </Card>
          <TabPanels>
            <TabPanel>
              <div class="space-y-4">
                <CardNews  v-for="(item, i) in news" :data="item" :key="i" />
                <CardSkeleton :count="1" />
              </div>
            </TabPanel>
            <TabPanel>
              <div class="space-y-4">
                <Card title="สถิติการใช้งาน" noborder>
                  <apexchart type="area" height="250" :options="
                      this.$store.themeSettingsStore.isDark
                        ? basicAreaDark.chartOptions
                        : basicArea.chartOptions
                    " :series="basicArea.series"
                  />
                  <div class="flex justify-end">
                    <router-link
                      to="#"
                      class="inline-flex items-center space-x-3 rtl:space-x-reverse text-sm capitalize font-medium text-slate-600 dark:text-slate-50"
                    >
                      <span>ดูเพิ่มเติม</span> <Icon icon="heroicons-outline:arrow-right"
                    /></router-link>
                  </div>
                </Card>
                <Card title="ประวัติการใช้งาน" noborder>
                  <vue-good-table
                    :columns="columns"
                    styleClass=" vgt-table lesspadding v-middle rounded-md"
                    :rows="recetOrder"
                    :pagination-options="{
                      enabled: true,
                      perPage: perpage,
                    }"
                    :sort-options="{
                      enabled: false,
                    }"
                  >
                    <template v-slot:table-row="props">
                      <div v-if="props.column.field == 'user'" class="flex items-center">
                        <div class="flex-none">
                          <div class="w-8 h-8 rounded-[100%] ltr:mr-2 rtl:ml-2">
                            <img
                              :src="props.row.user.image"
                              alt=""
                              class="w-full h-full rounded-[100%] object-cover"
                            />
                          </div>
                        </div>
                        <div class="flex-1 text-start">
                          <h4 class="text-sm font-medium text-slate-600">
                            {{ props.row.user.name }}
                          </h4>
                        </div>
                      </div>
                      <span v-if="props.column.field == 'status'" class="block w-full">
                        <span
                          class="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25"
                          :class="`${
                            props.row.status === 'paid'
                              ? 'text-success-500 bg-success-500'
                              : ''
                          } 
                          ${
                            props.row.status === 'due'
                              ? 'text-warning-500 bg-warning-500'
                              : ''
                          }
                          ${
                            props.row.status === 'pending'
                              ? 'text-danger-500 bg-danger-500'
                              : ''
                          }
                          ${
                            props.row.status === 'cancled'
                              ? 'text-danger-500 bg-danger-500'
                              : ''
                          }
                          ${
                            props.row.status === 'shipped'
                              ? 'text-primary-500 bg-primary-500'
                              : ''
                          }
                          
                          `"
                        >
                          {{ props.row.status }}
                        </span>
                      </span>
                    </template>
                    <template #pagination-bottom="props">
                      <div class="py-4 px-3 flex justify-center">
                        <Pagination
                          :total="24"
                          :current="current"
                          :per-page="perpage"
                          :pageRange="pageRange"
                          @page-changed="current = $event"
                          :pageChanged="props.pageChanged"
                          :perPageChanged="props.perPageChanged"
                          :options="options"
                        >
                          >
                        </Pagination>
                      </div>
                    </template>
                  </vue-good-table>
                </Card>
                <Card title="ประวัติการเข้าสู่ระบบ" noborder>
                  <ul class="relative ltr:pl-2 rtl:pr-2">
                    <li
                      v-for="(item, i) in activityLogs.slice(0, 5)"
                      class="ltr:border-l-2 rtl:border-r-2 border-slate-100 dark:border-slate-700 pb-4 last:border-none ltr:pl-[22px] rtl:pr-[22px] relative before:absolute ltr:before:left-[-8px] rtl:before:-right-2 before:top-[0px] before:rounded-full before:w-4 before:h-4 before:bg-slate-900 dark:before:bg-slate-600 before:leading-[2px] before:content-[url('@/assets/images/all-img/ck.svg')] before:opacity-100"
                    >
                      <div class="p-[10px] relative top-[-20px]">
                        <h2
                          class="text-sm font-medium text-slate-600 dark:text-slate-50 mb-1"
                        >
                          {{ item.title }}
                        </h2>
                        <div class="flex space-x-2 rtl:space-x-reverse">
                          <div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
                            <Icon :icon="item.os != 'Android' ? `heroicons-outline:computer-desktop` : `heroicons-outline:device-phone-mobile`" />
                          </div>
                          <div class="flex-1">
                            <p class="text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                              {{ item.os }} - {{ item.browser }}
                            </p>
                            <p class="text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                              {{ item.address }} - {{ item.ip }}
                            </p>
                            <p class="text-xs capitalize text-slate-600 dark:text-slate-300">
                              {{ item.date }} {{ item.time }} 
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="flex justify-end">
                    <router-link
                      to="#"
                      class="inline-flex items-center space-x-3 rtl:space-x-reverse text-sm capitalize font-medium text-slate-600 dark:text-slate-50"
                    >
                      <span>ดูเพิ่มเติม</span> <Icon icon="heroicons-outline:arrow-right"
                    /></router-link>
                  </div>
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>

      </div>
    </div>
  </div>
</template>
<script setup>
import Card from "@/components/Card";
import CardNews from "@/components/CardNews";
import CardSkeleton from '@/components/Skeleton/CardNews.vue';
import Icon from "@/components/Icon";
import Pagination from "@/components/Pagination";
import ProgressBar from '@/components/ProgressBar';
import { recetOrder } from "@/constant/basic-tablle-data";
import { basicArea, basicAreaDark } from "@/constant/appex-chart.js";
import { MenuItem, TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { activityLogs } from "../constant/data"; 
import { ref } from "vue";
// image Import
import bgCover from "@/assets/images/all-img/video-poster.png"
import user9 from "@/assets/images/users/user-9.png"

const current = 1;
const perpage = 5;
const pageRange = 5;
const searchTerm = "";

const actions = [
  {
    name: "view",
    icon: "heroicons-outline:eye",
  },
  {
    name: "edit",
    icon: "heroicons:pencil-square",
  },
  {
    name: "delete",
    icon: "heroicons-outline:trash",
  },
];

const options = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "5",
    label: "5",
  },
];

const columns = [
  {
    label: "User",
    field: "user",
  },
  {
    label: "Product",
    field: "product",
  },

  {
    label: "invoice",
    field: "invoice",
  },

  {
    label: "price",
    field: "price",
  },
  {
    label: "Status",
    field: "status",
  },
];

const buttons = [
  {
    title: "รายการข่าวที่เพิ่ม",
    icon: "heroicons-outline:queue-list",
  },
  {
    title: "สถิติการใช้งาน",
    icon: "heroicons-outline:presentation-chart-bar",
  },
];

const news = [
  {
    title: "งานเกษตรแฟร์ 2568 วันไหน เช็กพิกัด พร้อมไฮไลต์กิจกรรมน่าสนใจที่นี่",
    desc: "นับถอยหลังเข้าสู่ “งานเกษตรแฟร์ 2568” ที่ครั้งนี้จัดทั้งหมด 9 วัน 9 คืน มีทั้งร้านอาหารคาว-หวาน โซนร้านค้า โซนกิจกรรม โซนการแสดง การประกวดสัตว์เลี้ยง รวมไปถึงการประกวดผลิตภัณฑ์ทางการเกษตร สามารถเช็กรายละเอียดงานเกษตรแฟร์ 2568 บางเขนจัดวันไหน พร้อมกิจกรรมน่าสนใจที่นี่",
    thumbnail: bgCover,
    postdate: "20 มกราคม 2568",
    view: "1,234",
    share: "123",
    dtmins: "วันจันทร์ 20 มกราคม 2568 เวลา 14:25 น.",
    author: {
      name: "Itsara Yancharoen",
      profile: user9,
    }
  },
  {
    title: "งานเกษตรแฟร์ 2568 วันไหน เช็กพิกัด พร้อมไฮไลต์กิจกรรมน่าสนใจที่นี่",
    desc: "นับถอยหลังเข้าสู่ “งานเกษตรแฟร์ 2568” ที่ครั้งนี้จัดทั้งหมด 9 วัน 9 คืน มีทั้งร้านอาหารคาว-หวาน โซนร้านค้า โซนกิจกรรม โซนการแสดง การประกวดสัตว์เลี้ยง รวมไปถึงการประกวดผลิตภัณฑ์ทางการเกษตร สามารถเช็กรายละเอียดงานเกษตรแฟร์ 2568 บางเขนจัดวันไหน พร้อมกิจกรรมน่าสนใจที่นี่",
    thumbnail: bgCover,
    postdate: "20 มกราคม 2568",
    view: "1,234",
    share: "123",
    dtmins: "วันจันทร์ 20 มกราคม 2568 เวลา 14:25 น.",
    author: {
      name: "Itsara Yancharoen",
      profile: user9,
    }
  },
  {
    title: "งานเกษตรแฟร์ 2568 วันไหน เช็กพิกัด พร้อมไฮไลต์กิจกรรมน่าสนใจที่นี่",
    desc: "นับถอยหลังเข้าสู่ “งานเกษตรแฟร์ 2568” ที่ครั้งนี้จัดทั้งหมด 9 วัน 9 คืน มีทั้งร้านอาหารคาว-หวาน โซนร้านค้า โซนกิจกรรม โซนการแสดง การประกวดสัตว์เลี้ยง รวมไปถึงการประกวดผลิตภัณฑ์ทางการเกษตร สามารถเช็กรายละเอียดงานเกษตรแฟร์ 2568 บางเขนจัดวันไหน พร้อมกิจกรรมน่าสนใจที่นี่",
    thumbnail: bgCover,
    postdate: "20 มกราคม 2568",
    view: "1,234",
    share: "123",
    dtmins: "วันจันทร์ 20 มกราคม 2568 เวลา 14:25 น.",
    author: {
      name: "Itsara Yancharoen",
      profile: user9,
    }
  },
];

</script>
<style lang="scss" scoped></style>
