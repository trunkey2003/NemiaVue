<template>
  <div>
    <div
      class="
        container
        mx-auto
        py-6
        flex
        justify-center
        items-center
        custom-background
      "
    >
      <input
        type="text"
        name="anime"
        maxlength="100"
        @input="(e) => handleOnChangeSearch(e.target.value)"
        placeholder="Search Your First Favourite Anime..."
        class="
          w-1/2
          py-2
          border-b-2 border-yellow-400
          outline-none
          focus:border-green-400
          opacity-50
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

    <div
      class="
        container
        mx-auto
        flex
        justify-center
        items-center
        text-gray-700
        pb-6
      "
    >
      <custom-select
        :width="`min-w-custom-18`"
        :searchTitle="`Genre`"
        :selecting="searchGenre"
        :selects="GenreCollection"
        :handleSelectOnChange="handleOnChangeSearchGenre"
      />
      <custom-select
        :width="`min-w-custom-18`"
        :searchTitle="`Tag`"
        :selecting="searchMediaTag"
        :selects="MediaTagCollection.map((index) => index.name)"
        :handleSelectOnChange="handleOnChangeSearchMediaTag"
      />
      <custom-select
        :width="`min-w-custom-18`"
        :searchTitle="`Year`"
        :selecting="searchYear"
        :selects="
          Array.from(Array(100).keys())
            .reverse()
            .map((index) => index + 1923)
        "
        :handleSelectOnChange="handleOnChangeSearchYear"
      />
      <custom-select
        :width="`min-w-custom-18`"
        :searchTitle="`Format`"
        :selecting="searchFormat"
        :selects="[
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
        :width="`min-w-custom-18`"
        :searchTitle="`Status`"
        :selecting="searchStatus"
        :selects="[
          'FINISHED',
          'RELEASING',
          'NOT_YET_RELEASED',
          'CANCELLED',
          'SPECIAL',
          'HIATUS',
        ]"
        :handleSelectOnChange="handleOnChangeSearchStatus"
      />
      <!-- Advanced filter -->
      <div class="h-10 bg-gray-300 w-10 mt-[1.78rem] rounded relative">
        <svg
          class="
            h-7
            w-7
            mx-auto
            mt-[0.4rem]
            fill-gray-700
            hover:fill-gray-900 hover:cursor-pointer
          "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          @click="() => (classFilter = classFilter == 'hidden' ? '' : 'hidden')"
        >
          <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
          <path
            d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"
          />
        </svg>
        <div
          v-bind:class="`${classFilter}
            min-h-96
            max-h-[48rem]
            w-[68rem]
            absolute
            top-12
            right-0
            bg-white
            z-40
            rounded
            custom-fade
            p-3
            `"
        >
          <div class="flex">
            <div class="flex w-1/2 h-12 max-h-12">
              <div
                class="
                  font-bold
                  mt-2
                  ml-2
                  inline-flex
                  items-center
                  justify-center
                  h-[32px]
                "
              >
                Country Of Origin
              </div>
              <span
                v-if="
                  searchCountryOfOrigin != 'Any' &&
                  searchCountryOfOrigin != 'null' &&
                  searchCountryOfOrigin != 'undefined' &&
                  searchCountryOfOrigin != null
                "
                class="
                  relative
                  mt-2
                  ml-2
                  inline-flex
                  items-center
                  justify-center
                  min-w-[120px]
                  h-[32px]
                  text-xs
                  font-bold
                  leading-none
                  text-red-100
                  bg-cyan-600
                  rounded-full
                "
                >{{
                  handleOnRenderSearchCountryOfOrigin(searchCountryOfOrigin)
                }}
                <svg
                  @click="() => handleOnChangeSearchCountryOfOrigin('Any')"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="
                    bi bi-x
                    absolute
                    right-[4px]
                    top-[6px]
                    hover:cursor-pointer hover:fill-gray-400
                  "
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  /></svg
              ></span>
            </div>
            <div class="flex w-1/2 h-12 max-h-12">
              <div
                class="
                  font-bold
                  mt-2
                  ml-2
                  inline-flex
                  items-center
                  justify-center
                  h-[32px]
                "
              >
                Source
              </div>
              <span
                v-if="
                  searchSource != 'Any' &&
                  searchSource != 'null' &&
                  searchSource != 'undefined' &&
                  searchSource != null
                "
                class="
                  relative
                  mt-2
                  ml-2
                  inline-flex
                  items-center
                  justify-center
                  min-w-[120px]
                  h-[32px]
                  text-xs
                  font-bold
                  leading-none
                  text-red-100
                  bg-cyan-600
                  rounded-full
                "
                >{{ handleOnRenderSearchSource(searchSource) }}
                <svg
                  @click="() => handleOnChangeSearchSource('Any')"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="
                    bi bi-x
                    absolute
                    right-[4px]
                    top-[6px]
                    hover:cursor-pointer hover:fill-gray-400
                  "
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  /></svg
              ></span>
            </div>
          </div>

          <div class="flex w-full">
            <custom-select
              :width="`min-w-custom-50`"
              :searchTitle="``"
              :selecting="searchCountryOfOrigin"
              :selects="['JP', 'KR', 'CN', 'TW']"
              :handleSelectOnChange="handleOnChangeSearchCountryOfOrigin"
              :handleOnRender="handleOnRenderSearchCountryOfOrigin"
            />
            <custom-select
              :width="`min-w-custom-50`"
              :searchTitle="``"
              :selecting="searchSource"
              :selects="[
                'ORIGINAL',
                'MANGA',
                'LIGHT_NOVEL',
                'VISUAL_NOVEL',
                'VIDEO_GAME',
                'OTHER',
                'NOVEL',
                'DOUJINSHI',
                'ANIME',
                'WEB_NOVEL',
                'LIVE_ACTION',
                'GAME',
                'COMIC',
                'MULTIMEDIA_PROJECT',
                'PICTURE_BOOK',
              ]"
              :handleSelectOnChange="handleOnChangeSearchSource"
              :handleOnRender="handleOnRenderSearchSource"
            />
          </div>
          <div class="flex w-full">
            <double-range-select
              :searchTitle="`Year Range`"
              :min="1970"
              :max="2023"
              :handleOnChangeSearchLower="handleOnChangeSearchStartDateGreater"
              :handleOnChangeSearchUpper="handleOnChangeSearchStartDateLesser"
            />
            <double-range-select
              :searchTitle="`Episodes`"
              :min="0"
              :max="150"
              :handleOnChangeSearchLower="handleOnChangeSearchEpisodesGreater"
              :handleOnChangeSearchUpper="handleOnChangeSearchEpisodesLesser"
            />
            <double-range-select
              :searchTitle="`Duration`"
              :min="0"
              :max="170"
              :handleOnChangeSearchLower="handleOnChangeSearchDurationGreater"
              :handleOnChangeSearchUpper="handleOnChangeSearchDurationLesser"
            />
          </div>
          <div class="ml-4 flex w-full">
            <div class="py-2 px-3 font-bold">
              {{ searchIsAdult ? "Adult Mode" : "Safe Mode" }}
            </div>
            <label>
              <input
                type="checkbox"
                v-model="searchIsAdult"
                @input="handlOnChangeSearchIsAdult"
              />
              <span>
                <i></i>
              </span>
            </label>
          </div>
          <div class="h-1 w-[80%] mx-auto my-3 bg-gray-200"></div>
          <div class="ml-4 mt-2 flex w-full">
            <button
              class="font-bold flex"
              @click="
                () => {
                advancedFilterIsShowing = !advancedFilterIsShowing; 
                classAdvancedFilter = (classAdvancedFilter == 'hidden')? 'h-[96rem]' : 'hidden';
                }
              "
            >
              <svg
                v-if="advancedFilterIsShowing"
                class="w-[24px] h-[24px] py-[2px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
                />
              </svg>
              <svg
                v-else
                class="w-[24px] h-[24px] py-[2px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
                />
              </svg>
              Advanced Genres & Tag Filters
            </button>
          </div>
          <div class="flex p-3 max-h-[24rem] overflow-auto">
            <div v-bind:class="`${classAdvancedFilter}`">
              <div class="font-bold py-2">Minimum Average Score</div>
              <single-range-select :min="0" :max="100" :handlOnChangeSearch="handlOnChangeSearchScoreGreater"/>
              <advanced-tags/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        container
        flex flex-wrap
        justify-center
        items-center
        text-gray-700
        pb-6
      "
    >
      <span
        v-if="
          _search != 'undefined' &&
          _search != null &&
          _search != '' &&
          _search != 'null'
        "
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
        >{{ _search }}
        <svg
          @click="() => handleOnChangeSearch('')"
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
        >{{ searchGenre }}
        <svg
          @click="() => handleOnChangeSearchGenre('Any')"
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
        >{{ searchMediaTag
        }}<svg
          @click="() => handleOnChangeSearchMediaTag('Any')"
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
        >{{ searchYear }}
        <svg
          @click="() => handleOnChangeSearchYear('Any')"
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
        >{{ searchFormat }}
        <svg
          @click="() => handleOnChangeSearchFormat('Any')"
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
        >{{ searchStatus
        }}<svg
          @click="() => handleOnChangeSearchStatus('Any')"
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
          searchCountryOfOrigin != 'Any' &&
          searchCountryOfOrigin != 'null' &&
          searchCountryOfOrigin != 'undefined' &&
          searchCountryOfOrigin != null
        "
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
        >{{ handleOnRenderSearchCountryOfOrigin(searchCountryOfOrigin)
        }}<svg
          @click="() => handleOnChangeSearchCountryOfOrigin('Any')"
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
          searchSource != 'Any' &&
          searchSource != 'null' &&
          searchSource != 'undefined' &&
          searchSource != null
        "
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
        >{{ searchSource
        }}<svg
          @click="() => handleOnChangeSearchSource('Any')"
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

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ffffff00;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3db4f2b3;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1c5370b3;
}

::-webkit-scrollbar:hover{
  background: #c9e8ff;
}
</style>

<script>
import gql from "graphql-tag";
import CustomSelect from "./CustomSelect.vue";
import AdvancedTags from './AdvancedTags.vue';

const GenreCollection = gql`
  query {
    GenreCollection
  }
`;

const MediaTagCollection = gql`
  query {
    MediaTagCollection {
      name,
      category
    }
  }
`;
export default {
  props: ["_search"],
  components: { CustomSelect, AdvancedTags },
  name: "SearchInput",
  data() {
    return {
      advancedFilterIsShowing: false,
      classFilter: "hidden",
      classAdvancedFilter: "hidden",
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
      searchCountryOfOrigin: "Any",
      searchSource: "Any",
      searchStartDateGreater: null,
      searchStartDateLesser: null,
      searchDurationGreater: null,
      searchDurationLesser: null,
      searchIsAdult: false,
      searchAverageScoreGreater: 0,
    };
  },
  methods: {
    //Handle On Change
    handleOnChangeSearch(search) {
      this.$emit("update-search", search, "search");
      this.search = search;
    },
    handleOnChangeSearchGenre(searchGenre) {
      this.$emit("update-search-genre", searchGenre, "searchGenre");
      this.searchGenre = searchGenre;
    },
    handleOnChangeSearchMediaTag(searchMediaTag) {
      this.$emit("update-search-media-tag", searchMediaTag, "searchMediaTag");
      this.searchMediaTag = searchMediaTag;
    },
    handleOnChangeSearchYear(searchYear) {
      this.$emit("update-search-year", searchYear, "searchYear");
      this.searchYear = searchYear;
    },
    handleOnChangeSearchFormat(searchFormat) {
      this.$emit("update-search-format", searchFormat, "searchFormat");
      this.searchFormat = searchFormat;
    },
    handleOnChangeSearchStatus(searchStatus) {
      this.$emit("update-search-status", searchStatus, "searchStatus");
      this.searchStatus = searchStatus;
    },
    handleOnChangeSearchCountryOfOrigin(searchCountryOfOrigin) {
      this.$emit("update-search-country-of-origin", searchCountryOfOrigin, "searchCountryOfOrigin");
      this.searchCountryOfOrigin = searchCountryOfOrigin;
    },
    handleOnChangeSearchSource(searchSource) {
      this.$emit("update-search-source", searchSource, "searchSource");
      this.searchSource = searchSource;
    },
    handleOnChangeSearchStartDateGreater(searchStartDateGreater) {
      this.$emit("update-search-start-date-greater", searchStartDateGreater, "searchStartDateGreater");
      this.searchStartDateGreater = searchStartDateGreater;
    },
    handleOnChangeSearchStartDateLesser(searchStartDateLesser) {
      this.$emit("update-search-start-date-lesser", searchStartDateLesser, "searchStartDateLesser");
      this.searchStartDateLesser = searchStartDateLesser;
    },
    handleOnChangeSearchEpisodesGreater(searchEpisodesGreater) {
      this.$emit("update-search-episodes-greater", searchEpisodesGreater, "searchEpisodesGreater");
      this.searchEpisodesGreater = searchEpisodesGreater;
    },
    handleOnChangeSearchEpisodesLesser(searchEpisodesLesser) {
      this.$emit("update-search-episodes-lesser", searchEpisodesLesser, "searchEpisodesLesser");
      this.searchEpisodesLesser = searchEpisodesLesser;
    },
    handleOnChangeSearchDurationGreater(searchDurationGreater) {
      this.$emit("update-search-duration-greater", searchDurationGreater, "searchDurationGreater");
      this.searchDurationGreater = searchDurationGreater;
    },
    handleOnChangeSearchDurationLesser(searchDurationLesser) {
      this.$emit("update-search-duration-lesser", searchDurationLesser, "searchDurationLesser");
      this.searchDurationLesser = searchDurationLesser;
    },
    handlOnChangeSearchIsAdult() {
      this.$emit("update-search-is-adult", !this.searchIsAdult, "searchIsAdult");
      this.searchIsAdult = !this.searchIsAdult;
    },
    handlOnChangeSearchScoreGreater(searchAverageScoreGreater) {
      this.$emit("update-search-average-score-greater", searchAverageScoreGreater, "searchAverageScoreGreater");
      this.searchAverageScoreGreater = searchAverageScoreGreater;
    },

    // Handle On Render
    handleOnRenderSearchCountryOfOrigin(searchCountryOfOrigin) {
      switch (searchCountryOfOrigin) {
        case "Any":
          return "Any";
        case "JP":
          return "Japan";
        case "KR":
          return "South Korea";
        case "CN":
          return "China";
        case "TW":
          return "Taiwan";
      }
    },
    handleOnRenderSearchSource(searchSource) {
      return searchSource.replace("_", " ");
    },
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
