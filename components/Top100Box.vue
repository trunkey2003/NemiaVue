<template>
  <div class="w-full flex mt-3">
    <div class="w-[5%] text-white h-[110px] flex items-center justify-center">
      #{{ rank }}
    </div>
    <div class="w-[95%] h-[110px] bg-white rounded flex p-[5px]">
      <a class="h-[100px] w-[80px] bg-gray-200" v-bind:href="`/media/${id}`">
        <img class="w-full h-full" v-bind:src="image" />
      </a>
      <div class="p-3 w-full ml-5 flex">
        <div class="w-[50%] font-bold">
          <a v-bind:href="`/media/${id}`" @mouseover="(e) => e.target.style.color=color" @mouseout="(e) => e.target.style.color='#333'">{{ title }}</a>
          <br />
          <div class="flex mt-2">
            <a
              v-for="genre in genres"
              v-bind:key="genre"
              v-bind:href="`/?searchGenre=${genre}`"
            >
              <div class="rounded mx-1 bg-black">
              <div
                class="rounded px-1 py-[0.1rem] text-[10px] hover:opacity-80"
                v-bind:style="{ background: color + '40', color: color }"
                >{{ genre }}</div
              >
              </div>
            </a>
          </div>
        </div>
        <div class="w-[50%] flex">
          <div class="w-[30%] flex">
            <svg
              class="heart mt-1"
              viewBox="0 0 32 29.6"
              width="20"
              height="20"
            >
              <path
                d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
              />
            </svg>
            <div class="ml-3 text-sm">
              <div class="font-bold">{{ averageScore }}%</div>
              {{ popularity }} users
            </div>
          </div>
          <div class="w-[30%] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-[20px] h-[20px]"
            >
              <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M326.1 160l127.4-127.4C451.7 32.39 449.9 32 448 32h-86.06l-128 128H326.1zM166.1 160l128-128H201.9l-128 128H166.1zM497.7 56.19L393.9 160H512V96C512 80.87 506.5 67.15 497.7 56.19zM134.1 32H64C28.65 32 0 60.65 0 96v64h6.062L134.1 32zM0 416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V192H0V416z"
              />
            </svg>
            <div class="ml-3 text-sm">
              <div class="font-bold">{{ format }}</div>
              {{ handleRenderTiming(episodes, duration) }}
            </div>
          </div>
          <div class="w-[30%] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-[20px] h-[20px]"
            >
              <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
              />
            </svg>
            <div class="ml-3 text-sm">
              <div class="font-bold">
                {{ handleCapitalizeString(season) }} {{ year }}
              </div>
              {{ status }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "genres",
    "color",
    "averageScore",
    "format",
    "episodes",
    "duration",
    "popularity",
    "season",
    "year",
    "status",
    "image",
    "rank",
    "id"
  ],
  methods: {
    handleRenderTiming(episodes, duration) {
      if (!episodes) return;
      if (episodes != 1) return episodes + " " + "episodes";
      const secondsToHms = (minute) => {
        minute = Number(minute);
        var h = Math.floor(minute / 60);
        var m = Math.floor(minute % 60);

        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : "";
        return hDisplay + mDisplay;
      };
      if (duration) {
        return secondsToHms(duration);
      }
    },

    handleCapitalizeString(string) {
      if (!string) return null;
      string = string?.toLowerCase();
      return string?.charAt(0).toUpperCase() + string?.slice(1);
    },
  },
};
</script>