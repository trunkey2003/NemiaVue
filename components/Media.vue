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
        <div class="flex min-h-[250px] px-[10vw] 2xl:px-[15vw] bg-white">
          <div class="min-w-[215px] relative">
            <div
              class="
                absolute
                top-[-8rem]
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
            <div class="w-full mt-[185px] flex">
              <div
                class="
                  w-[165px]
                  h-[35px]
                  bg-[#3db4f2]
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
              <div class="w-[35px] h-[35px] bg-[#EC294B] rounded ml-auto">
                <div
                  class="w-full flex items-center justify-center mt-[10.5px]"
                >
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
          </div>
          <div class="w-[82%] px-7 pt-4 mb-4 relative text-[#5C728A]">
            <div class="text-[19px] font-[400] h-[28.5px]">
              {{ Media.title.romaji }}
            </div>
            <div
              class="text-[14px] font-[400] py-[30px] pr-[100px] mb-[15px]"
              v-html="Media.description"
            >
              {{ Media.description }}
            </div>
            <div class="absolute bottom-[-1rem] w-[50vw] text-right">
              <a class="p-[15px] mx-[10px] 2xl:mx-[25px] text-[13px]">Overview</a>
              <a class="p-[15px] mx-[10px] 2xl:mx-[25px] text-[13px]">Watch</a>
              <a class="p-[15px] mx-[10px] 2xl:mx-[25px] text-[13px]">Characters</a>
              <a class="p-[15px] mx-[10px] 2xl:mx-[25px] text-[13px]">Staff</a>
              <a class="p-[15px] mx-[10px] 2xl:mx-[25px] text-[13px]">Stats</a>
              <a class="p-[15px] mx-[10px] 2xl:mx-[25px] text-[13px]">Social</a>
            </div>
          </div>
        </div>
        <div class="flex px-[10vw] 2xl:px-[15vw] mt-4">
          <div class="min-w-[215px] text-[12px] text-[#5C728A]">
            <div
              v-for="ranking in Media.rankings.filter(
                (ranking, index) => index < 2
              )"
              :key="ranking.rank"
              class="
                w-[200px]
                max-w-full
                h-[35px]
                leading-[35px]
                bg-[#FAFAFA]
                rounded
                my-3
                text-center
                font-semibold
                flex
                justify-center
                items-center
              "
            >
              <svg
                v-if="ranking.type == 'RATED'"
                data-v-a6e466b2=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="ml-2 w-[15px] h-[15px] fill-[#f7bf63]"
              >
                <path
                  data-v-a6e466b2=""
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                  class="fill-[#f7bf63]"
                ></path>
              </svg>
              <svg
                v-if="ranking.type == 'POPULAR'"
                data-v-a6e466b2=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="ml-2 w-[15px] h-[15px] fill-[#f7bf63]"
              >
                <path
                  data-v-a6e466b2=""
                  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  class="fill-[#e85d75]"
                ></path>
              </svg>
              <div class="w-full mt-1 text-center">
                #{{ ranking.rank }}
                {{
                  ranking.type == "RATED"
                    ? "Highest" + " " + handleCapitalizeString(ranking.type)
                    : ""
                }}
                {{
                  ranking.type == "POPULAR"
                    ? "Most" + " " + handleCapitalizeString(ranking.type)
                    : ""
                }}
                {{ ranking.season }} {{ ranking.year }}
                {{
                  !ranking.season &&
                  !ranking.year &&
                  ranking.rank &&
                  ranking.type
                    ? "All time"
                    : ""
                }}
              </div>
            </div>
            <div class="w-[200px] max-w-full p-[18px] bg-white my-3 rounded">
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Format</div>
                <div class="text-[#9299A1]">{{ Media.format }}</div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Status</div>
                <div class="text-[#9299A1]">
                  {{ handleCapitalizeString(Media.status) }}
                </div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Start Date</div>
                <div class="text-[#9299A1]">
                  {{
                    handleRenderIntegerMonth(Media.startDate.month) +
                    ", " +
                    Media.startDate.year
                  }}
                </div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Season</div>
                <div class="text-[#9299A1]">
                  {{
                    handleCapitalizeString(Media.season) +
                    " " +
                    Media.startDate.year
                  }}
                </div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Popularity</div>
                <div class="text-[#9299A1]">{{ Media.popularity }}</div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Favorites</div>
                <div class="text-[#9299A1]">{{ Media.favourites }}</div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Studios</div>
                <div
                  v-for="media in Media.studios.edges
                    .map((index) => {
                      if (index.isMain) return index.node.name;
                    })
                    .filter((index) => index)"
                  :key="media"
                  class="text-[#9299A1]"
                >
                  {{ media }}
                </div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Producers</div>
                <div
                  v-for="media in Media.studios.edges
                    .map((index) => {
                      if (!index.isMain) return index.node.name;
                    })
                    .filter((index) => index)"
                  :key="media"
                  class="text-[#9299A1]"
                >
                  {{ media }}
                </div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Source</div>
                <div class="text-[#9299A1]">
                  {{ handleCapitalizeString(Media.source) }}
                </div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Hashtag</div>
                <div class="text-[#9299A1]">{{ Media.hashtag }}</div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Genres</div>
                <div
                  v-for="media in Media.genres"
                  :key="media"
                  class="text-[#9299A1]"
                >
                  {{ media }}
                </div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Romaji</div>
                <div class="text-[#9299A1]">{{ Media.title.romaji }}</div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">English</div>
                <div class="text-[#9299A1]">{{ Media.title.english }}</div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Native</div>
                <div class="text-[#9299A1]">{{ Media.title.native }}</div>
              </div>
              <div class="w-[100%] pb-[14px]">
                <div class="font-semibold">Synonyms</div>
                <div
                  v-for="media in Media.synonyms"
                  :key="media"
                  class="text-[#9299A1]"
                >
                  {{ media }}
                </div>
              </div>
            </div>
            <div class="w-[200px] max-w-full my-3">
              <div
                class="font-semibold ml-[1%] my-3 text-[14px] text-[#5C728A]"
              >
                Tags
              </div>
              <div
                v-for="tag in Media.tags"
                v-bind:key="tag.name"
                :title="tag.name"
                :value="tag.rank"
                class="
                  w-full
                  py-[8px]
                  px-[10px]
                  bg-[#FAFAFA]
                  mb-[10px]
                  text-[#5C728A]
                  rounded
                  flex
                "
              >
                <div class="text-[#5C728A] text-[13px]">{{ tag.name }}</div>
                <div class="ml-auto text-[#9299A1] text-[12px]">
                  {{ tag.rank }}%
                </div>
              </div>
            </div>
            <div class="w-[200px] max-w-full my-3">
              <div
                class="font-semibold ml-[1%] my-3 text-[14px] text-[#5C728A]"
              >
                External & Streaming links
              </div>
              <div
                v-for="link in Media.externalLinks"
                v-bind:key="link.site"
                class="
                  w-full
                  py-[8px]
                  px-[10px]
                  bg-[#FAFAFA]
                  mb-[10px]
                  text-[#5C728A]
                  rounded
                  flex
                "
              >
                <a :href="link.url" class="text-[#9299A1] text-[12px] mr-2">
                  <svg
                    v-if="link.site == `Twitter`"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 fill-cyan-600"
                    viewBox="0 0 512 512"
                  >
                    <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>

                  <svg
                    v-else-if="link.site == `Facebook`"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 fill-cyan-600"
                    viewBox="0 0 512 512"
                  >
                    <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                    />
                  </svg>

                  <svg
                    v-else
                    class="w-5 h-5 fill-cyan-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"
                    />
                  </svg>
                </a>
                <div class="text-[#5C728A] text-[13px]">{{ link.site }}</div>
              </div>
            </div>
          </div>
          <div class="w-[80%]">
            <!-- Realations -->
            <div
              class="
                font-semibold
                ml-[1%]
                mt-3
                flex
                items-center
                text-[14px] text-[#5C728A]
              "
              v-if="Media.relations.edges && Media.relations.edges.length"
            >
              Relations
            </div>
            <div class="mt-2 flex flex-wrap w-full">
              <div
                v-for="(media, index) in Media.relations.edges"
                v-bind:key="index"
                class="flex w-[30%] max-w-[33%] mx-[1%] my-2 bg-white"
              >
                <a
                  v-bind:href="`/media/${media.node.id}`"
                  class="min-w-[85px] min-h-[115px] bg-cover bg-no-repeat"
                  v-bind:style="{
                    backgroundImage: 'url(' + media.node.coverImage.large + ')',
                  }"
                >
                </a>
                <div class="text-[12px] p-2 relative w-full">
                  <a class="text-[#3DB4F2] font-semibold text-[12px]">{{handleCapitalizeString(media.relationType)}}</a>
                  <div class="mt-1">
                    {{media.node.title.romaji}}
                  </div>
                  <div class="absolute bottom-[1rem]">{{handleCapitalizeString(media.node.type + ' · ' + media.node.status)}}</div>
                </div>
              </div>
            </div>

            <!-- Characters -->
            <div
              class="
                font-semibold
                ml-[1%]
                mt-3
                flex
                items-center
                text-[14px] text-[#5C728A]
              "
              v-if="Media.relations.edges && Media.relations.edges.length"
            >
              Characters
            </div>
            <div
              class="mt-1 flex flex-wrap w-full text-[12px]"
              v-if="Media.characters.edges.length"
            >
              <div
                v-for="index in (0,
                Media.characters.edges.length - 1 == 0
                  ? Media.characters.edges.length
                  : Media.characters.edges.length - 1)"
                v-bind:key="index"
                class="flex w-[49%] max-w-[49%] mx-[0.5%] 2xl:w-[31%] 2xl:max-w-[33%] 2xl:mx-[1%] my-2 bg-white"
              >
                <a
                  v-bind:href="`/media/${``}`"
                  class="
                    min-w-[60px] min-h-[80px]
                    2xl:min-w-[85px] 2xl:min-h-[115px]
                    bg-cover bg-no-repeat
                  "
                  v-bind:style="{
                    backgroundImage:
                      'url(' +
                      Media.characters.edges[index].node.image.large +
                      ')',
                  }"
                >
                </a>
                <div class="flex max-w-full w-full truncate p-2 relative">
                  <div class="w-[50%]">
                    <div class="max-w-full truncate">
                      {{ Media.characters.edges[index].node.name.full }}
                    </div>
                    <div
                      class="
                        absolute
                        max-w-full
                        truncate
                        bottom-[1rem]
                        max-w-full
                      "
                    >
                      {{
                        handleCapitalizeString(
                          Media.characters.edges[index].role
                        )
                      }}
                    </div>
                  </div>
                  <div class="w-[50%] custom-diretion">
                    <div
                      v-if="
                        Media.characters.edges[index].voiceActors &&
                        Media.characters.edges[index].voiceActors.length
                      "
                      class="max-w-full truncate"
                    >
                      {{
                        Media.characters.edges[index].voiceActors[0].name.full
                      }}
                    </div>
                    <div
                      v-if="
                        Media.characters.edges[index].voiceActors &&
                        Media.characters.edges[index].voiceActors.length
                      "
                      class="
                        absolute
                        bottom-[1rem]
                        max-w-full
                        truncate
                      "
                    >
                      {{
                        handleCapitalizeString(
                          Media.characters.edges[index].voiceActors[0].language
                        )
                      }}
                    </div>
                  </div>
                </div>
                <a
                  v-if="
                    Media.characters.edges[index].voiceActors &&
                    Media.characters.edges[index].voiceActors.length
                  "
                  v-bind:href="`/media/${``}`"
                  class="
                    min-w-[60px] min-h-[80px]
                    2xl:min-w-[85px] 2xl:min-h-[115px]
                    ml-auto
                    bg-cover bg-no-repeat
                  "
                  v-bind:style="{
                    backgroundImage:
                      'url(' +
                      Media.characters.edges[index].voiceActors[0].image.large +
                      ')',
                  }"
                >
                </a>
              </div>
            </div>

            <!-- Staff -->
            <div
              class="
                font-semibold
                ml-[1%]
                mt-3
                flex
                items-center
                text-[14px] text-[#5C728A]
              "
              v-if="Media.relations.edges && Media.relations.edges.length"
            >
              Staff
            </div>
            <div
              class="mt-1 flex flex-wrap w-full"
              v-if="Media.staff.edges && Media.staff.edges.length"
            >
              <div
                v-for="(media, index) in Media.staff.edges"
                v-bind:key="media.node.id + index"
                class="flex w-[49%] max-w-[49%] mx-[0.5%] 2xl:w-[31%] 2xl:max-w-[33%] 2xl:mx-[1%] my-2 bg-white"
              >
                <a
                  v-bind:href="`/media/${media.node.id}`"
                  class="min-w-[85px] min-h-[115px] bg-cover bg-no-repeat"
                  v-bind:style="{
                    backgroundImage: 'url(' + media.node.image.large + ')',
                  }"
                >
                </a>
                <div class="text-[12px] p-2 relative">
                  <a>Source</a>
                  <div class="mt-1">
                    {{ media.node.name.full }}
                  </div>
                  <div
                    class="
                      absolute
                      bottom-[1rem]
                      max-h-[50px]
                      w-[150px]
                      truncate
                    "
                  >
                    {{ media.role }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Trailer -->
            <div class="ml-[1%]">
              <div
                class="
                  font-semibold
                  mt-3
                  flex
                  items-center
                  text-[14px]
                  mb-2
                  text-[#5C728A]
                "
              >
                Trailer
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
            </div>

            <!-- Recommendations -->
            <div class="ml-[1%]">
              <div
                class="flex mt-3"
                v-if="
                  Media.recommendations.edges &&
                  Media.recommendations.edges.length
                "
              >
                <div
                  class="
                    font-semibold
                    flex
                    items-center
                    text-[14px]
                    mb-2
                    text-[#5C728A]
                  "
                >
                  Recommendations
                </div>
                <a class="font-bold text-[#5C728A] text-[13px] ml-auto">
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
            <div class="ml-[1%]">
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
    </div>
  </div>
</template>

<style scoped>
.Roboto {
  font-family: "Roboto",-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif !important;
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
        isMediaSpoiler
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
          relationType
          node {
            id
            type
            status
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
      if (!string) return;
      string = string?.replace('_', ' ');
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
