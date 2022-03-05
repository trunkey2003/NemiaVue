<template>
  <div class="w-full">
    <div
      class="
        h-72
        w-full
        md:w-full md:bg-gray-200
        hover:opacity-80
        thumbnail
        bg-no-repeat bg-center
        rounded
      "
      v-bind:id="id"
      v-bind:style="{
        backgroundImage: 'url(' + image + ')',
      }"
    ></div>
    <div
      v-if="title"
      v-bind:id="id"
      class="custom-font text-center lg:pb-0 min-h-15 max-h-24"
    >
      {{ title }}
    </div>
    <div v-else v-bind:id="id" class="custom-font text-center py-2">
      Blank Title
    </div>
  </div>
</template>

<script>
export default {
    props: ['image','id','title']
};
</script>