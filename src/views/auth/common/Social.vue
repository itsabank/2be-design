<template>
  <ul class="flex">
    <li class="flex-1">
      <a
        href="#"
        class="inline-flex h-10 w-10 bg-[#e83f3a] text-white text-2xl flex-col items-center justify-center rounded-full"
      >
        <Icon icon="bi:google" />
      </a>
    </li>
    <li class="flex-1">
      <a
        href="#"
        class="inline-flex h-10 w-10 bg-[#1678f2] text-white text-2xl flex-col items-center justify-center rounded-full"
      >
        <Icon icon="bi:facebook" />
      </a>
    </li>
    <li class="flex-1">
      <a
        href="#"
        class="inline-flex h-10 w-10 bg-[#02e546] text-white text-2xl flex-col items-center justify-center rounded-full"
      >
        <Icon icon="bi:line" />
      </a>
    </li>
    <li class="flex-1">
      <a
        href="#"
        class="inline-flex h-10 w-10 bg-[#000000] text-white text-2xl flex-col items-center justify-center rounded-full"
      >
        <Icon icon="bi:twitter-x" />
      </a>
    </li>
  </ul>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon
  },
};
</script>
<style lang=""></style>
