<template>
  <div>
    <div v-show="pageIsLoading">
      <page-loading />
    </div>
    <div
      id="meida"
      class="container mx-auto w-full min-h-screen bg-gray-100 rounded-t-2xl"
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
              "
            >
              {{ Media.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="w-full p-4 mt-4 flex flex-wrap bg-gray-200">
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Format</div>
          <div>{{ Media.format }}</div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Status</div>
          <div>{{ handleCapitalizeString(Media.status) }}</div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Start Date</div>
          <div>
            {{
              handleRenderIntegerMonth(Media.startDate.month) +
              ", " +
              Media.startDate.year
            }}
          </div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Season</div>
          <div>
            {{
              handleCapitalizeString(Media.season) + " " + Media.startDate.year
            }}
          </div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Popularity</div>
          <div>{{ Media.popularity }}</div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Favorites</div>
          <div>{{ Media.favourites }}</div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Studios</div>
          <div v-if="Media.studios.edges">
            {{
              Media.studios.edges
                .map((index) => {
                  if (index.isMain) return index.node.name;
                })
                .filter((index) => index)
                .join(", ")
            }}
          </div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Producers</div>
          <div v-if="Media.studios.edges">
            {{
              Media.studios.edges
                .map((index) => {
                  if (!index.isMain) return index.node.name;
                })
                .filter((index) => index)
                .join(", ")
            }}
          </div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Source</div>
          <div>{{ handleCapitalizeString(Media.source) }}</div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Hashtag</div>
          <div>{{ Media.hashtag }}</div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Genres</div>
          <div>{{ Media.genres.join(", ") }}</div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Romaji</div>
          <div>{{ Media.title.romaji }}</div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">English</div>
          <div>{{ Media.title.english }}</div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Native</div>
          <div>{{ Media.title.native }}</div>
        </div>
        <div class="w-[100%] lg:w-[25%] py-2">
          <div class="font-bold">Synonyms</div>
          <div>{{ Media.synonyms.join(", ") }}</div>
        </div>
      </div>

      <!-- Tags -->
      <div class="mt-3">
        <div class="font-bold">Tags</div>
        <div class="mt-2 flex flex-wrap">
          <tag-span
            v-for="tag in Media.tags"
            v-bind:key="tag.name"
            :title="tag.name"
            :value="tag.rank"
          />
        </div>
      </div>

      <!-- External & Streaming links -->
      <div>
        <div class="font-bold mt-3">External & Streaming links</div>
        <div class="flex flex-wrap mt-2">
          <link-span
            v-for="link in Media.externalLinks"
            v-bind:key="link.site"
            :title="link.site"
            :url="link.url"
          />
        </div>
      </div>

      <!-- Ranking -->
      <div class="font-bold mt-3 flex items-center">Rankings</div>
      <div class="flex flex-wrap">
        <div
          v-for="ranking in Media.rankings ? Media.rankings : []"
          v-bind:key="ranking.type + ranking.rank"
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
              text-[#996515]
              bg-[#FFDF00]
              hover:bg-[#D4AF37]
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
              text-[#ef3038]
              bg-red-300
              hover:bg-red-400
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
      <div class="font-bold mt-3 flex items-center">Relations</div>
      <div class="flex flex-wrap">
        <div
          v-for="(media, index) in Media.relations.edges
            ? Media.relations.edges
            : []"
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
              backgroundImage: 'url(' + media.node.coverImage.large + ')',
            }"
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
      <div class="font-bold mt-3 flex items-center">Characters</div>
      <div v-if="Media.characters.edges.length" class="flex flex-wrap w-full">
        <div
          v-for="index in (0, Media.characters.edges.length - 1)"
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
                {{ Media.characters.edges[index].node.name.full }}
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
            <div
              class="max-h-full"
              v-if="Media.characters.edges[index].voiceActors[0]"
            >
              <h2 class="text-gray-900 font-bold text-lg">
                {{ Media.characters.edges[index].voiceActors[0].name.full }}
              </h2>
              <p class="text-center text-sm text-gray-600 my-2">
                {{ Media.characters.edges[index].voiceActors[0].language }}
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
            v-if="Media.characters.edges[index].voiceActors[0]"
            v-bind:style="{
              backgroundImage:
                'url(' +
                (Media.characters.edges[index].voiceActors[0] &&
                  Media.characters.edges[index].voiceActors[0].image.large) +
                ')',
            }"
          ></div>
        </div>
      </div>

      <!-- Staff -->
      <div class="font-bold mt-3 flex items-center">Staff</div>
      <div class="flex flex-wrap">
        <div
          v-for="(media, index) in Media.staff.edges"
          v-bind:key="media.node.id + index"
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
              backgroundImage: 'url(' + media.node.image.large + ')',
            }"
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
                {{ media.node.name.full }}
              </h2>
              <p class="text-center text-sm text-gray-600 my-2">
                {{ media.role }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Watch -->
      <div class="font-bold mt-3 flex items-center">Trailer</div>
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

      <!-- Recommendations -->
      <div>
        <div class="font-bold mt-3 flex items-center">Recommendations</div>
        <div class="flex flex-wrap">
          <a
            v-bind:href="`/media/${media.node.mediaRecommendation.id}`"
            v-for="media in Media.recommendations.edges"
            v-bind:key="media.node.id"
            class="
              cursor-pointer
              lg:mx-[0.8%]
              my-3
              rounded
              w-full
              mx-[1%]
              lg:w-[12.5%]
              relative
              hover:no-underline
            "
          >
            <media-container-media-page
              :image="media.node.mediaRecommendation.coverImage.large"
              :title="media.node.mediaRecommendation.title.romaji"
              :id="media.node.id"
              :rating="media.node.rating"
            />
          </a>
        </div>
      </div>

      <!-- Reviews -->
      <div class="font-bold mt-3 flex items-center">Reviews</div>
      <div class="flex flex-wrap">
        <review-box
          v-for="review in reviews"
          v-bind:key="review.node.id"
          :avatar="review.node.user.avatar.medium"
          :summary="review.node.summary"
          :rating="review.node.rating"
        />
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import TagSpan from "./TagSpan.vue";
import LinkSpan from "./LinkSpan.vue";
import MediaContainer from "./MediaContainer.vue";
import MediaContainerMediaPage from "./MediaContainerMediaPage.vue";

const query = gql`
  query Media($id: Int) {
    Media(id: $id) {
      id
      title {
        english
        romaji
        native
      }
      synonyms
      bannerImage
      coverImage {
        extraLarge
      }
      description
      format
      status
      startDate {
        year
        month
      }
      season
      popularity
      favourites
      studios {
        edges {
          node {
            name
          }
          isMain
        }
      }
      source
      hashtag
      genres
      tags {
        name
        rank
      }
      externalLinks {
        url
        site
      }
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
      staff {
        edges {
          node {
            id
            name {
              full
            }
            image {
              large
            }
          }
          role
        }
      }
      recommendations(sort: RATING_DESC, page: 1, perPage: 7) {
        edges {
          node {
            rating
            id

            mediaRecommendation {
              id
              title {
                romaji
              }
              coverImage {
                large
              }
            }
          }
        }
      }
      reviews(limit: 2, sort: RATING_DESC) {
        edges {
          node {
            id
            rating
            user {
              name
              avatar {
                medium
              }
            }
            summary
          }
        }
      }
    }
  }
`;

export default {
  components: { TagSpan, LinkSpan, MediaContainer, MediaContainerMediaPage },
  data() {
    return {
      pageIsLoading: true,
      reviews: [],
    };
  },
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
  methods: {
    handleRenderIntegerMonth(month) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months[month - 1];
    },

    handleCapitalizeString(string) {
      string = string?.toLowerCase();
      return string?.charAt(0).toUpperCase() + string?.slice(1);
    },
  },
  mounted() {
    this.pageIsLoading = false;
    this.reviews = this.Media.reviews?.edges.filter((node, index) => index < 4);
  },
};
</script>
