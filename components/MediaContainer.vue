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
      class="custom-font text-center lg:pb-0 min-h-15 max-h-24"
    >
      {{ media.title.romaji }}
    </div>
    <div v-else v-bind:id="media.id" class="custom-font text-center py-2">
      Blank Title
    </div>
  </div>
</template>

<script>
export default {
    props: ['media']
};
</script>