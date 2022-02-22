<template>
  <div class="app">
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
          @mouseover="(e) => {handleMouseOver(e)}" @mouseleave="(e) => {handleMouseLeave(e)}"
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
            class="h-80 hover:opacity-80 thumbnail bg-no-repeat	"
            v-bind:id="media.id"
            v-bind:style="{
              backgroundImage: 'url(' + media.coverImage.large + ')',
            }"
          ></div>
          <div v-if="media.title.english" v-bind:id="media.id" class="custom-font">
            {{ media.title.english }}
          </div>
          <div v-else v-bind:id="media.id" class="custom-font">Blank Title</div>
          <!-- box -->
          <div v-bind:id="'box-'+media.id" class="absolute min-w-32 top-0 left-[110%] z-30 py-4 px-8 bg-white shadow-lg rounded-lg my-20 hidden">
            <div class="px-6 py-4">
              <div v-if="media.title.english" class="font-bold text-xl mb-2">
                {{ media.title.english }}
              </div>
              <div v-else class="font-bold text-xl mb-2">Blank Title</div>
              <p
                class="
                  text-gray-700 text-base
                  max-h-40
                  text-ellipsis
                  overflow-hidden
                "
              >
                {{ media.description }}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span v-for="genre in media.genres" v-bind:key="genre" class=""
                >#{{ genre }}</span
              >
            </div>
          </div>
        </a>
      </div>
      <div v-if="dataLoading" class="flex p-10">
        <div
          v-for="index in (0, 4)"
          v-bind:key="index"
          class="
            border border-blue-300
            shadow
            rounded-md
            p-4
            max-w-sm
            w-full
            mx-auto
          "
        >
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
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
    handleMouseOver(e){
      if (!parseInt(e.target.id)) return;
      const box = document.getElementById("box-" + e.target.id);
      box.classList.remove("hidden");
    },
    handleMouseLeave(e){
      if (!parseInt(e.target.id)) return;
      const box = document.getElementById("box-" + e.target.id);
      box.classList.add("hidden");
    }
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
  apollo: {
    Page: {
      query: query,
      variables() {
        const vars = {
          page: (this.page)? this.page : 1,
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
            vars[key] === "Any"
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
