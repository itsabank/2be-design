<template>
  <div>
    <div
      class="rounded-md bg-white dark:bg-slate-700 h-full p-6 shadow-base"
      v-for="(item, i) in items"
      :key="i"
    >
      <div class="animate-pulse space-y-6">
        <header class="flex justify-between items-center space-x-6">
          <div class="flex-1 flex items-center space-x-4">
            <div class="flex-none flex space-x-2 items-center">
              <div
                class="h-10 w-10 rounded-full bg-[#C4C4C4] dark:bg-slate-500"
              ></div>
            </div>
            <div class="flex-1 space-y-2">
              <div
                class="bg-[#C4C4C4] dark:bg-slate-500 h-2 w-1/2 rounded-full"
              ></div>
              <div class="bg-[#C4C4C4] dark:bg-slate-500 h-2 w-1/4 rounded-full"
              ></div>
            </div>
          </div>
          <div class="flex-none">
            <div
              class="h-6 w-6 rounded bg-[#C4C4C4] dark:bg-slate-500"
            ></div>
          </div>
        </header>
        <div
          class="bg-[#C4C4C4] dark:bg-slate-500 h-[300px] rounded-md"
        ></div>
        <div class="grid grid-cols-2 gap-5">
            <span class="h-[4px] w-1/3 bg-[#C4C4C4] dark:bg-slate-500 block"></span>
            <div class="flex justify-end gap-5">
              <span class="h-[4px] w-1/4 bg-[#C4C4C4] dark:bg-slate-500 block"></span>
              <span class="h-[4px] w-1/4 bg-[#C4C4C4] dark:bg-slate-500 block"></span>
            </div>
        </div>
        <div class="space-y-2">
          <div class="h-[6px] bg-[#C4C4C4] dark:bg-slate-500"></div>
          <div class="h-[6px] bg-[#C4C4C4] dark:bg-slate-500"></div>
        </div>
        <div class="space-y-2">
          <div class="h-[4px] bg-[#C4C4C4] dark:bg-slate-500"></div>
          <div class="h-[4px] bg-[#C4C4C4] dark:bg-slate-500"></div>
          <div class="h-[4px] bg-[#C4C4C4] dark:bg-slate-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: Number,
      default: 6,
    },
  },

  computed: {
    items() {
      return Array.from({ length: this.count });
    },
  },
};
</script>
<style lang=""></style>
