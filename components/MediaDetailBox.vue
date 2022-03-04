<template>
  <div
    v-bind:id="'box-' + media.id"
    class="
      absolute
      w-72
      top-0
      left-[105%]
      z-30
      py-2
      px-1
      bg-white
      shadow-lg
      rounded-lg
      hidden
      box
      max-h-72
    "
  >
    <div class="px-4 py-3">
      <div v-if="media.title.romaji" class="font-bold text-xl max-h-32 pb-2">
        {{ media.title.romaji }}
      </div>
      <div v-else class="font-bold text-xl max-h-32 pb-2">Blank Title</div>
      <div class="media-info text-gray-800 font-bold flex h-8">
        <svg class="heart mr-2" viewBox="0 0 32 29.6" width="20" height="20">
          <path
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
        {{ media.averageScore }}%
      </div>
      <div class="media-info h-5">
        {{ handleOnRenderUnderScore(media.format) }} • {{ media.episodes }} Episodes •
        {{
          media.startDate
            ? media.startDate.year
            : media.seasonYear
            ? media.seasonYear
            : "NaN"
        }}
      </div>
    </div>
    <div class="px-2 py-3 max-h-32">
      <span
        class="
          mt-2
          mx-2
          inline-flex
          items-center
          justify-center
          px-2
          py-1
          text-xs
          font-bold
          leading-none
          text-red-100
          bg-blue-600
          rounded-full
        "
        v-for="genre in media.genres"
        v-bind:key="genre"
        >#{{ genre }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["media"],
  methods: {
    handleOnRenderUnderScore(tag) {
      tag = tag?.replace("_", " ");
      tag = tag?.replace("_", " ");
      return tag;
    },
  },
};
</script>