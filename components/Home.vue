<template>
  <div class="app">
    <page-loading v-if="!isLoaded"/>
    <SearchInput />
    <div
      id="home"
      class="container w-full min-h-screen bg-gray-100 rounded-t-2xl"
    >
      <div class="flex flex-wrap p-10">
        <a
          :href="`media/${media.id}`"
          v-for="media in medias"
          :key="media.id"
          v-bind:id="media.id"
          @mouseover="
            (e) => {
              handleMouseOver(e);
            }
          "
          @mouseleave="
            (e) => {
              handleMouseLeave(e);
            }
          "
          class="
            cursor-pointer
            md:max-w-[100%]
            lg:max-w-[15%] lg:mx-[0.8%] lg:my-3
            rounded
            w-full
            relative
          "
        >
          <!-- v-bind:src="media.coverImage.large"
            v-bind:alt="media.title.english">  -->
          <div
            class="h-80 hover:opacity-80 thumbnail bg-no-repeat bg-center"
            v-bind:id="media.id"
            v-bind:style="{
              backgroundImage: 'url(' + media.coverImage.large + ')',
            }"
          ></div>
          <div
            v-if="media.title.english"
            v-bind:id="media.id"
            class="custom-font text-center pb-2 lg:pb-0"
          >
            {{ media.title.english }}
          </div>
          <div v-else v-bind:id="media.id" class="custom-font text-center">
            Blank Title
          </div>
          <!-- box -->
          <div
            v-bind:id="'box-' + media.id"
            class="
              absolute
              min-w-32
              top-0
              left-[105%]
              z-30
              py-4
              px-8
              bg-white
              shadow-lg
              rounded-lg
              hidden
            "
          >
            <div class="px-6 py-4">
              <div v-if="media.title.english" class="font-bold text-xl mb-2">
                {{ media.title.english }}
              </div>
              <div v-else class="font-bold text-xl mb-2">Blank Title</div>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span v-for="genre in media.genres" v-bind:key="genre" class=""
                >#{{ genre }}</span
              >
            </div>
          </div>
        </a>
        <div
          v-for="index in (1, 6)"
          v-bind:key="index"
          class="
            hidden
            lg:block
            cursor-pointer
            max-w-[15%]
            md:max-w-[100%]
            lg:max-w-[15%] lg:mx-[0.8%] lg:my-3
            w-full
          "
        >
          <div
            v-if="dataLoading"
            class="h-80 hover:opacity-80 bg-gray-600 animate-pulse bg-center"
          ></div>
        </div>

        <button
          type="button"
          class="
            inline-flex
            lg:hidden
            items-center
            mt-3
            mx-auto
            px-8
            py-2
            font-semibold
            leading-6
            text-sm
            shadow
            rounded-md
            text-white
            bg-blue-500
            hover:bg-blue-800
            transition
            ease-in-out
            duration-150
            cursor-not-allowed
          "
          disabled=""
        >
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </button>
      </div>

      <!-- <div v-if="!search && !searchGenre && !searchMediaTag && !searchYear && !searchFormat && !searchStatus"><PageNav /></div> -->
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

const query = gql`
  query Page(
    $page: Int
    $perPage: Int
    $search: String
    $searchGenre: String
    $searchMediaTag: String
    $searchYear: Int
    $searchFormat: MediaFormat
    $searchStatus: MediaStatus
  ) {
    Page(page: $page, perPage: $perPage) {
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
  methods: {
    handleScroll() {
      var home = document.getElementById("home");
      if (
        window.scrollY + 1000 >= home.scrollHeight &&
        this.medias.length <= this.count &&
        !this.dataLoading
      ) {
        this.dataLoading = true;
        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 3000);
        });
        myPromise.then(() => {
          this.page = this.page + 1;
          this.medias = this.medias.concat(this.Page.media);
          this.count += 20;
          this.dataLoading = false;
          console.log(this.page);
        });
      }
    },
    handleMouseOver(e) {
      if (!parseInt(e.target.id)) return;
      const box = document.getElementById("box-" + e.target.id);
      box.classList.remove("hidden");
    },
    handleMouseLeave(e) {
      if (!parseInt(e.target.id)) return;
      const box = document.getElementById("box-" + e.target.id);
      box.classList.add("hidden");
    },
  },

  beforeMount() {
    this.medias = this.Page.media;
    this.page = 2;
    this.count += this.perPage;
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  data() {
    const vars = {
      isLoaded: false,
      dataLoading: false,
      medias: [],
      count: 0,
      page: 1,
      perPage: 20,
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
    return vars;
  },
  mounted(){
    this.isLoaded = true;
  },
  apollo: {
    Page: {
      query: query,
      variables() {
        const vars = {
          page: this.page ? this.page : 1,
          perPage: this.perPage,
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
            vars[key] === "Any" ||
            vars[key] === ""
          ) {
            delete vars[key];
          }
        });
        return vars;
      },
    },
  },
};
</script>
