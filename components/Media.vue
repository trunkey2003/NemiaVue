<template>
  <div class="Roboto">
    <div v-show="pageIsLoading">
      <page-loading />
    </div>
    <div
      id="meida"
      class="mx-auto w-full min-h-screen bg-[#edf1f5] rounded-t-2xl pb-4"
    >
      <div
        class="w-full h-[350px] bg-cover"
        v-bind:style="{
          backgroundImage: 'url(' + Media.bannerImage + ')',
        }"
      ></div>
      <div class="">
        <div class="flex h-[250px] pl-[300px] pr-[300px] bg-white">
          <div class="w-[18%] relative">
            <div
              class="
                absolute
                top-[-7.8rem]
                left-0
                h-[304px]
                w-[215px]
                flex-none
                bg-cover
                overflow-hidden
              "
              v-bind:style="{
                backgroundImage: 'url(' + Media.coverImage.extraLarge + ')',
              }"
            ></div>
            <div
              class="
                absolute
                w-[165px]
                h-[35px]
                bg-[#3db4f2]
                bottom-[1rem]
                text-white
                leading-[35px]
                rounded
                flex
              "
            >
              <div class="pl-9 text-[14px]">Add to List</div>
              <div
                class="
                  flex
                  justify-center
                  items-center
                  ml-auto
                  h-[35px]
                  w-[35px]
                  bg-gray-100 bg-opacity-25
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  class="w-[14px] h-[14px] fill-gray-300"
                >
                  <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                  />
                </svg>
              </div>
            </div>

            <div
              class="
                absolute
                w-[35px]
                h-[35px]
                bg-[#EC294B]
                bottom-[1rem]
                right-[1.3rem]
                rounded
              "
            >
              <div class="w-full flex items-center justify-center mt-[10.5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[14px] h[14px] fill-white mx-auto"
                  viewBox="0 0 512 512"
                >
                  <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-[82%] px-7 pt-4 mb-4 relative text-[#5C728A]">
            <div class="text-[19px] font-[400] h-[28.5px]">
              {{ Media.title.romaji }}
            </div>
            <div
              class="text-[14px] font-[400] py-[15px] pr-[100px]"
              v-html="Media.description"
            >
              {{ Media.description }}
            </div>
            <div class="absolute bottom-[-1rem] right-[100px]">
              <a class="p-[15px] mx-[25px] text-[13px]">Overview</a>
              <a class="p-[15px] mx-[25px] text-[13px]">Watch</a>
              <a class="p-[15px] mx-[25px] text-[13px]">Characters</a>
              <a class="p-[15px] mx-[25px] text-[13px]">Staff</a>
              <a class="p-[15px] mx-[25px] text-[13px]">Stats</a>
              <a class="p-[15px] mx-[25px] text-[13px]">Social</a>
            </div>
          </div>
        </div>
        <div class="flex min-h-[1000px] pl-[300px] pr-[300px] mt-4">
          <div class="w-[20%] h-[1000px] bg-red-200">
            <div
              class="
                w-[80%]
                h-[35px]
                leading-[35px]
                bg-white
                my-3
                text-center
              "
            >
              Hello
            </div>
            <div
              class="
                w-[80%]
                h-[35px]
                leading-[35px]
                bg-white
                my-3
                text-center
              "
            >
              Hello
            </div>
            <div class="w-[80%] h-[500px] leading-[35px] bg-white my-3">
              Hello
            </div>
          </div>
          <div class="w-[80%] h-[1000px] bg-blue-200">
            <!-- Realations -->
            <div
              class="font-semibold ml-[1%] mt-3 flex items-center text-[14px]"
              v-if="Media.relations.edges && Media.relations.edges.length"
            >
              Relations
            </div>
            <div class="mt-2 flex flex-wrap w-full">
              <div class="flex w-[31%] mx-auto bg-white h-[115px]"></div>
              <div class="flex w-[31%] mx-auto bg-white h-[115px]"></div>
              <div class="flex w-[31%] mx-auto bg-white h-[115px]"></div>
            </div>
            <!-- Realations -->
            <div
              class="font-semibold ml-[1%] mt-3 flex items-center text-[14px]"
              v-if="Media.relations.edges && Media.relations.edges.length"
            >
              Characters
            </div>
            <div class="mt-1 flex flex-wrap w-full">
              <div class="flex w-[31%] mt-3 mx-auto bg-white h-[115px]"></div>
              <div class="flex w-[31%] mt-3 mx-auto bg-white h-[115px]"></div>
              <div class="flex w-[31%] mt-3 mx-auto bg-white h-[115px]"></div>
              <div class="flex w-[31%] mt-3 mx-auto bg-white h-[115px]"></div>
              <div class="flex w-[31%] mt-3 mx-auto bg-white h-[115px]"></div>
              <div class="flex w-[31%] mt-3 mx-auto bg-white h-[115px]"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="lg:mr-2 mt-3 lg:h-96 lg:w-full w-full lg:max-w-full lg:flex">
        <div
          class="
            w-full
            h-96
            lg:w-1/5 lg:h-auto
            flex-none
            bg-contain
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
            rounded
            p-4
            flex flex-col
            justify-between
            leading-normal
            w-full
            lg:w-[80%]
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
      </div> -->

      <div class="w-full p-4 mt-4 flex flex-wrap bg-gray-200 rounded-lg">
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
      <div class="mt-3" v-if="Media.tags">
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
        <div
          class="font-bold mt-3"
          v-if="Media.externalLinks && Media.externalLinks.length"
        >
          External & Streaming links
        </div>
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
      <div
        class="font-bold mt-3 flex items-center"
        v-if="Media.rankings && Media.rankings.length"
      >
        Rankings
      </div>
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
              bg-red-200
              hover:bg-red-300
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
      <div
        class="font-bold mt-3 flex items-center"
        v-if="Media.relations.edges && Media.relations.edges.length"
      >
        Relations
      </div>
      <div class="flex flex-wrap">
        <a
          v-for="(media, index) in Media.relations.edges"
          v-bind:key="index"
          v-bind:href="`/media/${media.node.id}`"
          class="
            ml-2
            mt-3
            lg:h-32 lg:w-[32%]
            w-[47.5%]
            lg:flex
            border-3 border-sky-500
            hover:bg-gray-300
            cursor-pointer
            rounded-lg
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
        </a>
      </div>

      <!-- Characters -->
      <div
        class="font-bold mt-3 flex items-center"
        v-if="Media.characters.edges && Media.characters.edges.length"
      >
        Characters
      </div>
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
            border-3 border-sky-500
            hover:bg-gray-300
            cursor-pointer
            rounded
          "
        >
          <div
            class="
              md:w-full
              h-32
              lg:w-1/5 lg:h-auto
              flex-none
              bg-cover
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
      <div
        class="font-bold mt-3 flex items-center"
        v-if="Media.staff.edges && Media.staff.edges.length"
      >
        Staff
      </div>
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
            border-3 border-sky-500
            hover:bg-gray-300
            cursor-pointer
            rounded
          "
        >
          <div
            class="
              md:w-full
              h-32
              lg:w-1/5 lg:h-auto
              flex-none
              bg-cover
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

      <!-- Trailer -->
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
        <div
          class="flex mt-3"
          v-if="
            Media.recommendations.edges && Media.recommendations.edges.length
          "
        >
          <div class="font-bold flex items-center">Recommendations</div>
          <a class="font-bold text-gray-400 text-sm ml-auto leading-6">
            View All Recommendations
          </a>
        </div>

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
      <div
        class="font-bold mt-3 flex items-center"
        v-if="reviews && reviews.length"
      >
        Reviews
      </div>
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

<style scoped>
.Roboto {
  font-family: "Roboto" !important;
}
</style>

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
            id
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
