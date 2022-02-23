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
        class="
          w-1/2
          py-2
          border-b-2 border-yellow-400
          outline-none
          focus:border-green-400
        "
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
          /></svg
      ></a>
    </div>

    <div class="container flex justify-center items-center text-gray-700 pb-6">
      <custom-select :searchTitle="`Genre`" :selecting="searchGenre" :selects="GenreCollection" :handleSelectOnChange="handleOnChangeSearchGenre"/>
      <custom-select :searchTitle="`Media Tag`" :selecting="searchMediaTag" :selects="MediaTagCollection.map((index) => index.name)" :handleSelectOnChange="handleOnChangeSearchMediaTag"/>
      <custom-select :searchTitle="`Year`" :selecting="searchYear" :selects="Array.from(Array(100).keys()).reverse().map((index) => index + 1923)" :handleSelectOnChange="handleOnChangeSearchYear"/>
      <custom-select
        :searchTitle="`Format`" 
        :selecting="searchFormat"
        :selects="[
          'Any',
          'TV',
          'TV_SHORT',
          'MOVIE',
          'SPECIAL',
          'OVA',
          'ONA',
          'MUSIC',
          'MANGA',
          'NOVEL',
          'ONE_SHOT',
        ]"
        :handleSelectOnChange="handleOnChangeSearchFormat"
      />
      <custom-select
        :searchTitle="`Status`" 
        :selecting="searchStatus"
        :selects="[
          'Any',
          'TV',
          'TV_SHORT',
          'MOVIE',
          'SPECIAL',
          'OVA',
          'ONA',
          'MUSIC',
          'MANGA',
          'NOVEL',
          'ONE_SHOT',
        ]"
        :handleSelectOnChange="handleOnChangeSearchStatus"
      />
    </div>
    <div class="container flex justify-center items-center text-gray-700 pb-6">
      <span
        v-if="search != 'undefined' && search != null && search != '' && search != 'null'"
        class="
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
        v-if="
          searchGenre != 'Any' &&
          searchGenre != 'null' &&
          searchGenre != 'undefined' &&
          searchGenre != null
        "
        class="
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
        >{{ searchGenre }}
        <svg
          @click="() => (searchGenre = 'Any')"
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
        v-if="
          searchMediaTag != 'Any' &&
          searchMediaTag != 'null' &&
          searchMediaTag != 'undefined' &&
          searchMediaTag != null
        "
        class="
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
        >{{ searchMediaTag
        }}<svg
          @click="() => (searchMediaTag = 'Any')"
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
        v-if="
          searchYear != 'Any' &&
          searchYear != 'null' &&
          searchYear != 'undefined' &&
          searchYear != null
        "
        class="
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
        >{{ searchYear }}
        <svg
          @click="() => (searchYear = 'Any')"
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
        v-if="
          searchFormat != 'Any' &&
          searchFormat != 'null' &&
          searchFormat != 'undefined' &&
          searchFormat != null
        "
        class="
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
        >{{ searchFormat }}
        <svg
          @click="() => (searchFormat = 'Any')"
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
        v-if="
          searchStatus != 'Any' &&
          searchStatus != 'null' &&
          searchStatus != 'undefined' &&
          searchStatus != null
        "
        class="
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
        >{{ searchStatus
        }}<svg
          @click="() => (searchStatus = 'Any')"
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
import CustomSelect from "./CustomSelect.vue";

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
  components: { CustomSelect },
  name: "SearchInput",
  methods:{
    handleOnChangeSearchGenre(searchGenre){
      this.searchGenre = searchGenre;
    },
    handleOnChangeSearchMediaTag(searchMediaTag){
      this.searchMediaTag = searchMediaTag;
    },
    handleOnChangeSearchYear(searchYear){
      this.searchYear = searchYear;
    },
    handleOnChangeSearchFormat(searchFormat){
      this.searchFormat = searchFormat;
    },
    handleOnChangeSearchStatus(searchStatus){
      this.searchStatus = searchStatus;
    }
  },
  data() {
    return {
      search: this.$route.query.search,
      searchGenre: this.$route.query.searchGenre
        ? this.$route.query.searchGenre
        : "Any",
      searchMediaTag: this.$route.query.searchMediaTag
        ? this.$route.query.searchMediaTag
        : "Any",
      searchYear: this.$route.query.searchYear
        ? this.$route.query.searchYear
        : "Any",
      searchFormat: this.$route.query.searchFormat
        ? this.$route.query.searchFormat
        : "Any",
      searchStatus: this.$route.query.searchStatus
        ? this.$route.query.searchStatus
        : "Any",
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
