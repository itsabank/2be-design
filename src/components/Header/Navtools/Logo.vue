<template>
  <router-link :to="{ name: 'home' }">
    <img
      class="h-[42px]"
      src="@/assets/images/logo/logo.png"
      alt=""
      v-if="!this.$store.themeSettingsStore.isDark"
    />

    <img
      class="h-[42px]"
      src="@/assets/images/logo/logo-white.png"
      alt=""
      v-if="this.$store.themeSettingsStore.isDark"
    />
  </router-link>
</template>
<script></script>
