<template>
  <div
    class="
      flex
      items-center
      justify-center
      text-sky-400 font-semibold text-6xl
      min-w-full
      h-screen
      fixed
      top-0
      bg-blue-900
      bg-opacity-50
      li
      leading-[100%]
      text-center
      opacity-100
      custom-fetch-loading
    "
  >
    <div class="center">
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    </div>
  </div>
</template>

<style scoped>
.custom-z-index{
  z-index: 999999;
}
</style>

<script>
export default {
  name: "Footer",
};
</script>