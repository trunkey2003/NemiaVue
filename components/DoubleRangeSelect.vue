<template>
  <div class="w-[270px] mx-auto h-32 mt-1">
    <div class="flex">
      <div class="py-2 font-bold">{{ searchTitle }}</div>
      <div v-show="curruntStateLower != min || curruntStateUpper != max" class="ml-5 my-1 py-1 bg-cyan-600 rounded-full px-4 text-white relative">
        {{ curruntStateLower }} - {{ curruntStateUpper }}
        <svg
          @click="() => {lower = min; upper = max; handleDropLower(); handleDropUpper();}"
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
          />
        </svg>
      </div>
    </div>
    <div class="multi-range relative">
      <div
        v-show="showSpanLower"
        class="
          absolute
          py-[0.2rem]
          w-[40px]
          max-w-[40px]
          bg-gray-800 bg-opacity-70
          rounded-lg
          text-white
          top-[-0.6rem]
          text-center text-sm
          font-medium
        "
        v-bind:style="{
          left:
            (parseInt(lower - min) * 250) / (parseInt(max) - parseInt(min)) -
            20 +
            2 +
            8 +
            'px',
        }"
      >
        {{ lower }}
      </div>
      <div
        v-show="showSpanUpper"
        class="
          absolute
          py-[0.2rem]
          w-[40px]
          max-w-[40px]
          bg-gray-800 bg-opacity-70
          rounded-lg
          text-white
          top-[-0.6rem]
          text-center text-sm
          font-medium
        "
        v-bind:style="{
          left:
            (parseInt(upper - min) * 250) / (parseInt(max) - parseInt(min)) -
            20 +
            2 +
            8 +
            'px',
        }"
      >
        {{ upper }}
      </div>
      <br />
      <span>
        <input
          type="range"
          v-bind:min="min"
          v-bind:max="max"
          v-model="lower"
          name="lower"
          @mouseup="handleDropLower"
          @mouseenter="handleShowSpanLower"
          @mouseout="handleHideSpanLower"
        />
        <input
          type="range"
          v-bind:min="min"
          v-bind:max="max"
          v-model="upper"
          name="upper"
          @mouseup="handleDropUpper"
          @mouseenter="handleShowSpanUpper"
          @mouseout="handleHideSpanUpper"
        />
      </span>
    </div>
  </div>
</template>

<style>
input[type="range"] {
  box-sizing: border-box;
  appearance: none;
  width: 270px;
  margin: 0;
  padding: 0 0;
  overflow: hidden;
  border: 0;
  border-radius: 1px;
  outline: none;
  background: linear-gradient(#c9e8ff, #c9e8ff) no-repeat center;
  background-size: 100% 10px;
  pointer-events: none;
}
input[type="range"]:active,
input[type="range"]:focus {
  outline: none;
}
input[name="lower"]::-webkit-slider-thumb {
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background-color: #3db4f2b3;
  margin: 5px 0;
  position: relative;
  left: 2px;
  cursor: grab;
  appearance: none;
  pointer-events: all;
  box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
}

input[name="lower"]::-webkit-slider-thumb:active:hover {
  cursor: grabbing;
}

input[name="upper"]::-webkit-slider-thumb {
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background-color: #3db4f2b3;
  margin: 5px 0;
  position: relative;
  left: -3px;
  cursor: grab;
  appearance: none;
  pointer-events: all;
  /* box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25); */
}

input[name="upper"]::-webkit-slider-thumb:active:hover {
  cursor: grabbing;
}

input[type="range"]::-webkit-slider-thumb::before {
  content: " ";
  display: block;
  position: absolute;
  top: 13px;
  left: 100%;
  height: 2px;
}
.multi-range {
  position: relative;
  height: 20px;
}
.multi-range input[type="range"] {
  position: absolute;
  top: 15px;
}
.multi-range input[type="range"]:nth-child(1)::-webkit-slider-thumb::before {
  background-color: red;
}
.multi-range input[type="range"]:nth-child(2) {
  background: none;
}
.multi-range input[type="range"]:nth-child(2)::-webkit-slider-thumb::before {
  background-color: grey;
}
</style>


<script>
export default {
  props: [
    "handleOnChangeSearchLower",
    "handleOnChangeSearchUpper",
    "searchTitle",
    "min",
    "max",
  ],
  data() {
    return {
      lower: parseInt(this.min),
      upper: parseInt(this.max),
      curruntStateLower: parseInt(this.min),
      curruntStateUpper: parseInt(this.max),
      showSpanLower: false,
      showSpanUpper: false,
    };
  },
  watch: {
    lower(newLower, oldLower) {
      if (parseInt(newLower) + 2 >= parseInt(this.upper))
        this.lower = parseInt(oldLower);
    },
    upper(newUpper, oldUpper) {
      if (parseInt(newUpper) - 2 <= parseInt(this.lower))
        this.upper = parseInt(oldUpper);
    },
  },
  methods: {
    handleDropLower() {
      if (this.lower != this.curruntStateLower) {
        this.handleOnChangeSearchLower(this.lower);
        this.curruntStateLower = this.lower;
      }
    },
    handleDropUpper() {
      if (this.upper != this.curruntStateUpper) {
        this.handleOnChangeSearchUpper(this.upper);
        this.curruntStateUpper = this.upper;
      }
    },
    handleShowSpanLower() {
      this.showSpanLower = true;
    },
    handleShowSpanUpper() {
      this.showSpanUpper = true;
    },
    handleHideSpanLower() {
      this.showSpanLower = false;
    },
    handleHideSpanUpper() {
      this.showSpanUpper = false;
    },
  },
};
</script>