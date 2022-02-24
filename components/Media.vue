<template>
  <div>
    <div
      id="meida"
      class="container w-full min-h-screen bg-gray-100 rounded-t-2xl"
    >
      <img v-bind:src="Media.bannerImage" />
      <div
        class="
          ml-2
          mt-3
          max-w-sm
          lg:h-96 lg:w-full
          md:w-full
          lg:max-w-full lg:flex
        "
      >
        <div
          class="
            md:w-full
            h-96
            lg:w-1/5 lg:h-auto
            flex-none
            bg-cover
            rounded-t
            lg:rounded-t-none lg:rounded-l
            text-center
            overflow-hidden
          "
          v-bind:style="{
            backgroundImage: 'url(' + Media.coverImage.extraLarge + ')',
          }"
          title="Woman holding a mug"
        ></div>
        <div
          class="
            border-r border-b border-l border-gray-400
            lg:border-l-0 lg:border-t lg:border-gray-400
            bg-white
            rounded-b
            lg:rounded-b-none lg:rounded-r
            p-4
            flex flex-col
            justify-between
            leading-normal
          "
        >
          <div class="max-h-full">
            <h2 class="text-gray-900 font-bold text-4xl">
              {{ Media.title.romaji }}
            </h2>
            <p class="text-sm text-gray-600 flex items-center my-2">
              {{ Media.title.native }}
            </p>
            <p
              v-html="Media.description"
              class="
                text-gray-700 text-base text-clip
                overflow-auto
                max-h-[85%]
                bg-gray-200
              "
            >
              {{ Media.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Ranking -->
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-blue-400"></div>
        <span class="flex-shrink mx-4 text-blue-400">Rankings</span>
        <div class="flex-grow border-t border-blue-400"></div>
      </div>
      <div class="flex flex-wrap">
        <div
          v-for="ranking in (Media.rankings)? Media.rankings : []"
          v-bind:key="ranking"
          class="w-full max-w-full lg:w-[32.5%] flex flex-wrap"
        >
          <span
            v-if="ranking.type == 'RATED'"
            class="
              flex
              text-lg
              font-semibold
              py-2
              px-2
              ml-2
              mt-3
              uppercase
              rounded
              text-amber-600
              bg-amber-200
              uppercase
              last:mr-0
              mr-1
              w-full
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              />
            </svg>
            <p class="ml-auto custom-capitalize">
              #{{ ranking.rank }} {{ ranking.type }} {{ ranking.season }}
              {{ ranking.year }}
            </p>
          </span>

          <span
            v-else
            class="
              flex
              text-lg
              font-semibold
              py-2
              px-2
              ml-2
              mt-3
              uppercase
              rounded
              text-red-600
              bg-red-200
              uppercase
              last:mr-0
              mr-1
              w-full
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            <div class="ml-auto custom-capitalize">
              #{{ ranking.rank }} {{ ranking.type }} {{ ranking.season }}
              {{ ranking.year }}
            </div>
          </span>
        </div>
      </div>

      <!-- Relations -->
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-blue-400"></div>
        <span class="flex-shrink mx-4 text-blue-400">Relations</span>
        <div class="flex-grow border-t border-blue-400"></div>
      </div>
      <div class="flex flex-wrap">
        <div
          v-for="media in (Media.relations.edges)? Media.relations.edges : []"
          v-bind:key="media.node.title.romaji"
          class="
            ml-2
            mt-3
            lg:h-32 lg:w-[32%]
            w-[47.5%]
            lg:flex
            border-2 border-sky-500
            hover:bg-gray-300
            cursor-pointer
          "
        >
          <div
            class="
              md:w-full
              h-32
              lg:w-1/5 lg:h-auto
              flex-none
              bg-cover
              rounded-t
              lg:rounded-t-none lg:rounded-l
              text-center
              overflow-hidden
            "
            v-bind:style="{
              backgroundImage: 'url(' + media.node.coverImage.large + ')',
            }"
            title="Woman holding a mug"
          ></div>
          <div
            class="
              text-center
              border-l
              lg:w-[80%] lg:border-b
              border-gray-400
              lg:border-gray-400
              rounded-b
              lg:rounded-b-none lg:rounded-r
              p-1
              flex flex-col
              justify-between
              leading-normal
            "
          >
            <div class="max-h-full">
              <h2 class="text-gray-900 font-bold text-lg">
                {{ media.node.title.romaji }}
              </h2>
              <p class="text-center text-sm text-gray-600 my-2">
                {{ media.node.type }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Characters -->
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-blue-400"></div>
        <span class="flex-shrink mx-4 text-blue-400">Characters</span>
        <div class="flex-grow border-t border-blue-400"></div>
      </div>
      <div class="flex flex-wrap w-full">
        <div
          v-for="index in (Media.characters.edge)? Media.characters.edges.length - 1 : 0"
          v-bind:key="index"
          class="
            ml-2
            mt-3
            lg:h-32 lg:w-[32%]
            w-[47.5%]
            lg:flex
            border-2 border-sky-500
            hover:bg-gray-300
            cursor-pointer
          "
        >
          <div
            class="
              md:w-full
              h-32
              lg:w-1/5 lg:h-auto
              flex-none
              bg-cover
              rounded-t
              lg:rounded-t-none lg:rounded-l
              text-center
              overflow-hidden
            "
            v-bind:style="{
              backgroundImage:
                'url(' + Media.characters.edges[index].node.image.large + ')',
            }"
            title="Woman holding a mug"
          ></div>
          <div
            class="
              text-center
              border-l
              lg:w-[80%] lg:border-b
              border-gray-400
              lg:border-gray-400
              rounded-b
              lg:rounded-b-none lg:rounded-r
              p-1
              flex flex-col
              justify-between
              leading-normal
            "
          >
            <div class="max-h-full">
              <h2
                v-if="!Media.characters.edges[index]"
                class="text-gray-900 font-bold text-lg"
              >
                {{
                  Media.characters.edges[index].node
                    ? Media.characters.edges[index].node.name.full
                    : ""
                }}
              </h2>
              <p class="text-center text-sm text-gray-600 my-2">
                {{ Media.characters.edges[index].role }}
              </p>
            </div>
          </div>
          <div
            class="
              text-center
              border-r
              lg:w-[80%] lg:border-b
              border-gray-400
              lg:border-gray-400
              rounded-b
              lg:rounded-b-none lg:rounded-r
              p-1
              flex flex-col
              justify-between
              leading-normal
            "
          >
            <div class="max-h-full">
              <h2
                v-if="!Media.characters.edges[index].voiceActors"
                class="text-gray-900 font-bold text-lg"
              >
                {{
                  Media.characters.edges[index].voiceActors
                    ? Media.characters.edges[index].voiceActors[0].name.full
                    : ""
                }}
              </h2>
              <p class="text-center text-sm text-gray-600 my-2">
                {{
                  Media.characters.edges[index].voiceActors &&
                  Media.characters.edges[index].voiceActors[0].language
                }}
              </p>
            </div>
          </div>
          <div
            class="
              md:w-full
              h-32
              lg:w-1/5 lg:h-auto
              flex-none
              bg-cover
              rounded-t
              lg:rounded-t-none lg:rounded-l
              text-center
              overflow-hidden
            "
            v-bind:style="{
              backgroundImage:
                'url(' +
                (Media.characters.edges[index].voiceActors &&
                  Media.characters.edges[index].voiceActors[0].image.large) +
                ')',
            }"
            title="Woman holding a mug"
          ></div>
        </div>
      </div>

      <!-- Watch -->
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-blue-400"></div>
        <span class="flex-shrink mx-4 text-blue-400">Watch</span>
        <div class="flex-grow border-t border-blue-400"></div>
      </div>
      <iframe
        v-if="!Media.trailer"
        class="custom-video"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      ></iframe>

      <iframe
        v-else-if="Media.trailer && Media.trailer.site == 'youtube'"
        class="custom-video"
        v-bind:src="`https://www.youtube.com/embed/${Media.trailer.id}`"
      ></iframe>

      <div
        v-else
        style="
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
        "
      >
        <iframe
          style="
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0px;
            top: 0px;
            overflow: hidden;
          "
          frameborder="0"
          type="text/html"
          v-bind:src="`https://www.dailymotion.com/embed/video/${Media.trailer.id}?autoplay=1`"
          width="100%"
          height="100%"
          allowfullscreen
          allow="autoplay"
        >
        </iframe>
      </div>

      <!-- Reviews -->
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-blue-400"></div>
        <span class="flex-shrink mx-4 text-blue-400">Reviews</span>
        <div class="flex-grow border-t border-blue-400"></div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import PageLoading from "./PageLoading.vue";

const query = gql`
  query Media($id: Int) {
    Media(id: $id) {
      id
      title {
        romaji
        native
      }
      bannerImage
      coverImage {
        extraLarge
      }
      description
      characters {
        edges {
          node {
            name {
              full
            }
            image {
              large
            }
          }
          role
          voiceActors {
            name {
              full
            }
            language
            image {
              large
            }
          }
        }
      }
      reviews {
        edges {
          node {
            rating
          }
        }
      }
      relations {
        edges {
          node {
            type
            title {
              romaji
              english
            }
            coverImage {
              large
            }
          }
        }
      }
      rankings {
        rank
        type
        year
        context
        season
      }
      trailer {
          id
          site
          thumbnail
      }
    }
  }
`;

export default {
  apollo: {
    Media: {
      query: query,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
};
</script>
