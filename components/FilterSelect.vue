<template>
  <span class="multi-range w-[30%] mx-auto">
    <input type="range" min="0" max="25" value="0" name="lower" />
    <input type="range" min="25" max="50" value="50" name="upper" />
  </span>
</template>

<style>
input[type="range"] {
  box-sizing: border-box;
  appearance: none;
  width: 100%;
  margin: 0;
  padding: 0 0;
  overflow: hidden;
  border: 0;
  border-radius: 1px;
  outline: none;
  background: linear-gradient(#C9E8FF, #C9E8FF) no-repeat center;
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
  background-color: #fff;
  margin: 5px 0;
  position: relative;
  left: 2px;
  cursor: pointer;
  appearance: none;
  pointer-events: all;
  box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
}
input[name="upper"]::-webkit-slider-thumb {
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background-color: #fff;
  margin: 5px;
  position: relative;
  right: 6px;
  cursor: pointer;
  appearance: none;
  pointer-events: all;
  box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
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
export default {};
</script>