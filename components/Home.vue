<template>
  <div class="app">
    <SearchInput />
    <div class="container w-full min-h-screen bg-gray-100 rounded-t-2xl">
      <div class="flex flex-wrap p-10">
        <a
          :href="`media/${media.id}`"
          v-for="media in Page.media"
          :key="media.id"
          class="hover:bg-gray-50 cursor-pointer md:max-w-[100%] lg:max-w-[25%] lg:px-[1%] rounded overflow-hidden shadow-lg"
        >
          <img
            class="min-w-full w-full min-h-[28rem] max-h-[28rem] object-fill"
            v-bind:src="media.coverImage.large"
            v-bind:alt="media.title.english"
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
        </a>
      </div>
      <div v-if="!search && !searchGenre && !searchMediaTag && !searchYear && !searchFormat && !searchStatus"><PageNav /></div>
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
  data() {
    const vars = {
      page: this.$route.params.page ? this.$route.params.page : 1,
      search: this.$route.query.search,
      searchGenre: this.$route.query.searchGenre,
      searchMediaTag: this.$route.query.searchMediaTag,
      searchYear: this.$route.query.searchYear,
      searchFormat: this.$route.query.searchFormat,
      searchStatus: this.$route.query.searchStatus,
    };
    Object.keys(vars).forEach((key) => {
      if (
        vars[key] === null ||
        vars[key] === undefined ||
        vars[key] === "undefined" ||
        vars[key] === "null" || 
        vars[key] === "Any"
      ) {
        delete vars[key];
      }
    });
    console.log(vars);
    return vars;
  },
  apollo: {
    Page: {
      query: query,
      prefetch: true,
      variables() {
        const vars = {
          page: this.$route.params.page ? this.$route.params.page : 1,
          search: this.$route.query.search,
          searchGenre: this.$route.query.searchGenre,
          searchMediaTag: this.$route.query.searchMediaTag,
          searchYear: this.$route.query.searchYear,
          searchFormat: this.$route.query.searchFormat,
          searchStatus: this.$route.query.searchStatus,
        };
        Object.keys(vars).forEach((key) => {
          if (
            vars[key] === null ||
            vars[key] === undefined ||
            vars[key] === "undefined" ||
            vars[key] === "null" ||
            vars[key] === "Any"
          ) {
            delete vars[key];
          }
        });
        console.log(vars);
        return vars;
      },
    },
  },
};
</script>
