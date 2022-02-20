<template>
  <div>
    <div
      class="container py-6 flex justify-center items-center custom-background"
    >
      <input
        type="text"
        name="anime"
        maxlength="100"
        v-model="search"
        placeholder="Search Your First Favourite Anime..."
        class="w-1/2 py-2 border-b-2 border-yellow-400 outline-none focus:border-green-400"
      />
      <a
        :href="`?search=${search}&searchGenre=${searchGenre}&searchMediaTag=${searchMediaTag}&searchYear=${searchYear}&searchFormat=${searchFormat}&searchStatus=${searchStatus}`"
        ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 mx-2 text-yellow-600"
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
      </svg></a>
    </div>
    <div class="container flex justify-center items-center text-gray-700 pb-6">
      <select
        v-model="searchGenre"
        class="w-[18%] h-10 pl-3 pr-6 mx-2 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        placeholder="Regular input"
      >
        <option v-for="genre in GenreCollection">{{ genre }}</option>
      </select>

      <select
        v-model="searchMediaTag"
        class="w-[18%] h-10 pl-3 pr-6 mx-2 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        placeholder="Regular input"
      >
        <option v-for="mediaTag in MediaTagCollection">
          {{ mediaTag.name }}
        </option>
      </select>

      <select
        v-model="searchYear"
        class="w-[18%] h-10 pl-3 pr-6 mx-2 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        placeholder="Regular input"
      >
        <option v-for="index in (1, 100)">{{ 2023 - index }}</option>
      </select>

      <select
        v-model="searchFormat"
        class="w-[18%] h-10 pl-3 pr-6 mx-2 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        placeholder="Regular input"
      >
        <option>TV Show</option>
        <option>Movie</option>
        <option>TV Short</option>
        <option>Special</option>
        <option>OVA</option>
        <option>ONA</option>
        <option>Music</option>
      </select>

      <select
        v-model="searchStatus"
        class="w-[18%] h-10 pl-3 pr-6 mx-2 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        placeholder="Regular input"
      >
        <option>FINISHED</option>
        <option>RELEASING</option>
        <option>NOT_YET_RELEASED</option>
        <option>CANCELLED</option>
        <option>HIATUS</option>
      </select>
    </div>
    <div class="container flex justify-center items-center text-gray-700 pb-6">
      <span
        v-if="search"
        class="mx-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full"
        >{{ search }}
        <svg
          @click="() => (search = null)"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          /></svg
      ></span>
      <span
        v-if="searchGenre"
        class="mx-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full"
        >{{ searchGenre }}
        <svg
          @click="() => (searchGenre = null)"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          /></svg
      ></span>
      <span
        v-if="searchMediaTag"
        class="mx-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full"
        >{{ searchMediaTag
        }}<svg
          @click="() => (searchMediaTag = null)"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          /></svg
      ></span>
      <span
        v-if="searchYear"
        class="mx-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full"
        >{{ searchYear }}
        <svg
          @click="() => (searchYear = null)"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          /></svg
      ></span>
      <span
        v-if="searchFormat"
        class="mx-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full"
        >{{ searchFormat }}
        <svg
          @click="() => (searchFormat = null)"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          /></svg
      ></span>
      <span
        v-if="searchStatus"
        class="mx-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full"
        >{{ searchStatus
        }}<svg
          @click="() => (searchStatus = null)"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          /></svg
      ></span>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

const GenreCollection = gql`
  query {
    GenreCollection
  }
`;

const MediaTagCollection = gql`
  query {
    MediaTagCollection {
      name
    }
  }
`;
export default {
  name: "SearchInput",
  data() {
    return {
      search: (this.$route.query.search != "null" && this.$route.query.search != "undefined")? this.$route.query.search : null,
      searchGenre: (this.$route.query.searchGenre != "null" && this.$route.query.searchGenre != "undefined")? this.$route.query.searchGenre : null,
      searchMediaTag: (this.$route.query.searchMediaTag != "null" && this.$route.query.searchMediaTag != "undefined")? this.$route.query.searchMediaTag : null,
      searchYear: (this.$route.query.searchYear != "null" && this.$route.query.searchYear != "undefined")? this.$route.query.searchYear : null,
      searchFormat: (this.$route.query.searchFormat != "null" && this.$route.query.searchFormat != "undefined")? this.$route.query.searchFormat : null, 
      searchStatus: (this.$route.query.searchStatus != "null" && this.$route.query.searchStatus != "undefined")? this.$route.query.searchStatus : null,
    };
  },
  apollo: {
    GenreCollection: {
      query: GenreCollection,
      prefetch: true,
    },
    MediaTagCollection: {
      query: MediaTagCollection,
      prefetch: true,
    },
  },
};
</script>
