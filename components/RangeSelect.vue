<template>
  <div class="w-[270px] mx-auto h-32">
    <div class="py-2 flex">
      <div class="font-bold">{{searchTitle}}</div>
    </div>
    <div class="multi-range relative">
      <div
        class="
          absolute
          py-[0.2rem]
          w-[40px]
          max-w-[40px]
          bg-gray-800 bg-opacity-70
          rounded-lg
          text-white
          top-[-0.1rem]
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
        class="
          absolute
          py-[0.2rem]
          w-[40px]
          max-w-[40px]
          bg-gray-800 bg-opacity-70
          rounded-lg
          text-white
          top-[-0.1rem]
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
        />
        <input
          type="range"
          v-bind:min="min"
          v-bind:max="max"
          v-model="upper"
          name="upper"
          @mouseup="handleDropUpper"
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
  margin: 5px;
  position: relative;
  right: 6px;
  cursor: grab;
  appearance: none;
  pointer-events: all;
  box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
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
  height: 50px;
}
.multi-range input[type="range"] {
  position: absolute;
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
  props: ["handleOnChangeSearchLower", "handleOnChangeSearchUpper", "searchTitle", "min", "max"],
  data() {
    return {
      lower: parseInt(this.min),
      upper: parseInt(this.max),
    };
  },
  watch: {
    lower(newLower, oldLower) {
      if (parseInt(this.lower) + 1 >= this.upper) this.lower = oldLower;
    },
    upper(newUpper, oldUpper) {
      if (parseInt(this.lower) + 1 >= newUpper) this.upper = oldUpper;
    },
  },
  methods: {
    handleDropLower() {
      this.handleOnChangeSearchLower(this.lower);
    },
    handleDropUpper() {
      this.handleOnChangeSearchUpper(this.upper);
    },
  },
};
</script>