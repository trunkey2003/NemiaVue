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
      v-bind:id="media.id"
      v-bind:style="{
        backgroundImage: 'url(' + media.coverImage.large + ')',
      }"
    ></div>
    <div
      v-if="media.title.romaji"
      v-bind:id="media.id"
      class="custom-font text-center pb-2 lg:pb-0"
    >
      {{ media.title.romaji }}
    </div>
    <div v-else v-bind:id="media.id" class="custom-font text-center">
      Blank Title
    </div>
  </div>
</template>

<script>
export default {
    props: ['media']
};
</script>