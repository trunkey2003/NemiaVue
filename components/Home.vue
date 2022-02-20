<template>
  <div class="app">
    <SearchInput />
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
              >#{{ genre }}</span
            >
          </div>
        </NuxtLink>
      </div>
      <PageNav />
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

const query = gql`
  query Page(
    $page: Int
    $search: String
    $searchGenre: String
    $searchMediaTag: String
    $searchYear: Int
    $searchFormat: MediaFormat
    $searchStatus: MediaStatus
  ) {
    Page(page: $page, perPage: 20) {
      media(
        search: $search
        genre: $searchGenre
        tag: $searchMediaTag
        seasonYear: $searchYear
        format: $searchFormat
        status: $searchStatus
      ) {
        id
        title {
          english
        }
        description
        coverImage {
          large
        }
        genres
        tags {
          name
        }
      }
    }
  }
`;

export default {
  apollo: {
    Page: {
      query: query,
      prefetch: true,
      variables() {
        const vars = {
          search:
            this.$route.query.search != "null" &&
            this.$route.query.search != "undefined"
              ? this.$route.query.search
              : null,
          searchGenre:
            this.$route.query.searchGenre != "null" &&
            this.$route.query.searchGenre != "undefined"
              ? this.$route.query.searchGenre
              : null,
          searchMediaTag:
            this.$route.query.searchMediaTag != "null" &&
            this.$route.query.searchMediaTag != "undefined"
              ? this.$route.query.searchMediaTag
              : null,
          searchYear:
            this.$route.query.searchYear != "null" &&
            this.$route.query.searchYear != "undefined"
              ? this.$route.query.searchYear
              : null,
          searchFormat:
            this.$route.query.searchFormat != "null" &&
            this.$route.query.searchFormat != "undefined"
              ? this.$route.query.searchFormat
              : null,
          searchStatus:
            this.$route.query.searchStatus != "null" &&
            this.$route.query.searchStatus != "undefined"
              ? this.$route.query.searchStatus
              : null,
        };
        Object.keys(vars).forEach((key) => {
          if (vars[key] === null) {
            delete vars[key];
          }
        });
        return vars;
      },
    },
  },
};
</script>
