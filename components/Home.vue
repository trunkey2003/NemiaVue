<template>
  <div class="app">
    <div
      class="container py-6 flex justify-center items-center custom-background"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 mr-2 text-yellow-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        name="anime"
        placeholder="Search Your First Favourite Anime..."
        class="w-1/2 py-2 border-b-2 border-yellow-400 outline-none focus:border-green-400"
      />
    </div>
    <div class="container w-full min-h-screen bg-gray-100 rounded-t-2xl">
      <div class="flex flex-wrap p-10">
        <NuxtLink
          :to="`media/${media.id}`"
          v-for="media in Page.media"
          :key="media.id"
          class="hover:bg-gray-50 cursor-pointer md:max-w-[100%] lg:max-w-[25%] lg:px-[1%] rounded overflow-hidden shadow-lg"
        >
          <img
            class="w-full max-h-[28rem] object-fill"
            v-bind:src="media.coverImage.large"
            alt="Mountain"
          />
          <div class="px-6 py-4">
            <div v-if="media.title.english" class="font-bold text-xl mb-2">
              {{ media.title.english }}
            </div>
            <div v-else="media.title.english" class="font-bold text-xl mb-2">
              Blank Title
            </div>
            <p
              class="text-gray-700 text-base max-h-40 text-ellipsis overflow-hidden"
            >
              {{ media.description }}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              v-for="genre in media.genres"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >#{{genre}}</span
            >
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

const query = gql`
  query {
    Page(page: 1, perPage: 20) {
      media {
        id
        title {
          english
        }
        description
        coverImage {
          large
        }
        genres
      }
    }
  }
`;

export default {
  apollo: {
    Page: {
      query: query,
      prefetch: true,
    },
  },
};
</script>
