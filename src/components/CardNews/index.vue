<template>
  <div
 :class="
      cn('card rounded-md bg-white dark:bg-slate-800', props.class, {
        ' border border-gray-5002 dark:border-slate-700':
          this.$store.themeSettingsStore.skin === 'bordered',
        'shadow-base': this.$store.themeSettingsStore.skin !== 'bordered',
      })
    "
  >
    <div :class="cn('card-body flex flex-col', bodyClass)">
      <header
        v-if="title || subtitle"
        :class="cn('flex mb-5 items-center', {
        'border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6': !noborder
      })"
      >
        <div class="flex-1">
          <div
          v-if="title"
           :class="cn('card-title text-slate-900 dark:text-white', titleClass)"
          >
            {{ title }}
          </div>
          <div v-if="subtitle" :class="cn('card-subtitle', subtitleClass)">
            {{ subtitle }}
          </div>
        </div>
        <div class="flex-0" v-if="$slots.header">
          <slot name="header"></slot>
        </div>
      </header>
      <div class="card-text h-full">
        <div class="space-y-4">
          <div class="flex space-x-3 rtl:space-x-reverse">
            <div class="flex-none">
              <div class="h-10 w-10 rounded-full relative">
                <img
                  :src="data.author.profile"
                  alt=""
                  class="block w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div class="flex-1 text-start flex items-center">
              <div class="flex-1">
                <span
                  class="block text-slate-900 dark:text-white text-sm font-medium mb-[2px]"
                  >{{ data.author.name }}</span
                >
                <span
                  class="block text-slate-600 dark:text-slate-300 text-xs font-normal"
                  >{{ data.dtmins }}</span
                >
              </div>
              <div class="flex-none ltr:text-right rtl:text-end">
                <Dropdown classMenuItems=" w-[140px]">
                  <span
                    class="text-lg inline-flex h-6 w-6 flex-col items-center justify-center border border-slate-200 dark:border-slate-700 rounded dark:text-slate-400"
                    ><Icon icon="heroicons-outline:dots-horizontal"
                  /></span>
                  <template v-slot:menus>
                    <MenuItem v-for="(item, i) in actions" :key="i">
                      <div
                        :class="`
                            
                              hover:bg-secondary-500 dark:hover:bg-slate-600 dark:bg-opacity-60 hover:text-white text-slate-900 dark:text-slate-300
                              w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center `"
                      >
                        <span>{{ item.name }}</span>
                      </div>
                    </MenuItem>
                  </template>
                </Dropdown>
              </div>
            </div>
          </div>
          <div class="image-box w-full">
            <router-link to="#">
              <img :src="data.thumbnail" alt="" class="block w-full h-full object-cover rounded-md" />
            </router-link> 
          </div>
          <div class="flex justify-between mb-4">
            <span
              class="inline-flex leading-5 text-slate-600 dark:text-slate-300 text-sm font-normal"
              ><Icon
                icon="heroicons-outline:calendar"
                class="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
              />
              {{ data.postdate }}
            </span>
            <div class="flex space-x-4 rtl:space-x-reverse">
              <span
                class="inline-flex leading-5 text-slate-600 dark:text-slate-300 text-sm font-normal"
                ><Icon
                  icon="heroicons-outline:eye"
                  class="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                />
                {{ data.view }}
              </span>
              <span
                class="inline-flex leading-5 text-slate-600 dark:text-slate-300 text-sm font-normal"
                ><Icon
                  icon="heroicons-outline:share"
                  class="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                />
                {{ data.share }}
              </span>
            </div>
          </div>
          <router-link to="#">
            <h5 :class="cn('card-title mt-2 text-slate-600 dark:text-slate-50 line-clamp-2', titleClass)">
              {{ data.title }}
            </h5>
          </router-link>
          <router-link to="#">
            <div :class="cn('card-text mt-2 text-slate-600 dark:text-slate-300 line-clamp-3', descClass)">
              {{ data.desc }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import { MenuItem } from "@headlessui/vue";
import { cn } from "@/lib/utils";
const props = defineProps({
  class: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  titleClass: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  descClass: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    default: "",
  },
  imaClass: {
    type: String,
    default: "",
  },
  imgTop: {
    type: Boolean,
    default: false,
  },
  imgBottom: {
    type: Boolean,
    default: false,
  },
  gapNull: {
    type: Boolean,
    default: false,
  },
  overlay: {
    type: Boolean,
    default: false,
  },
  noborder: {
    type: Boolean,
    default: false,
  },
  bodyClass: {
    type: String,
    default: "p-6",
  },
  customClass: {
    type: String,
    default: "",
  },
  data: {
    type: Array,
    default: [],
  },
});

const actions = [
  {
    name: "Last 28 Days",
  },
  {
    name: " Last Month ",
  },
  {
    name: "  Last Year ",
  },
];
</script>
<style lang="scss" scoped>
.card-title {
  @apply font-medium  capitalize md:text-xl md:leading-[28px] text-lg leading-[24px];
}
.card-subtitle {
  @apply text-sm leading-5 font-medium text-slate-600 dark:text-slate-300 mt-1;
}
.overlay {
  @apply relative z-[1] after:absolute after:inset-0 after:w-full after:h-full after:bg-slate-900 after:bg-opacity-40 after:rounded-md after:z-[-1];
  .card-title,
  .card-subtitle {
    @apply text-white;
  }
}
</style>
