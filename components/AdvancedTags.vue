<template>
  <div class="mt-4">
    <div class="font-bold py-2">{{ handleOnRenderCategory(category) }}</div>
    <div class="mt-2 flex flex-wrap w-full overflow-visible">
      <button
        v-for="mediaTag in MediaTagCollection.filter(
          (index) => index.category == category
        )"
        v-bind:key="mediaTag.name"
        v-bind:value="mediaTag.name"
        class="
          py-1
          px-3
          custom-background
          rounded-lg
          m-2
          font-bold
          text-sm text-white
          relative
        "
        @click="handleOnClickSpan"
        @mouseenter="(e) => handleShowSpan(e)"
        @mouseleave="() => showSpan = 0"
      >
        <div v-bind:id="`tag-${mediaTag.name}`" class="fixed h-[120px] w-[250px] bg-black text-white z-40 text-left p-2 rounded tag-spans" v-bind:style="{top: spanPositionTop + 'px', left: spanPositionLeft + 'px'}" v-show="mediaTag.description && showSpan == mediaTag.name">{{mediaTag.description}}</div>
        {{ mediaTag.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.custom-background {
  background: #3db4f2e6;
}
.custom-background:hover {
  background: #77dc4d;
}
</style>

<script>
export default {
  props: ["MediaTagCollection", "category", "handleSelectOnChange"],
  data(){
      return{
          showSpan: 0,
          spanPositionLeft: 0,
          spanPositionTop: 500,
      }
  },
  methods: {
    handleOnRenderCategory(category) {
      return category.replace("-", " ");
    },
    handleOnClickSpan(e) {
      this.handleSelectOnChange(e.target.value);
    },
    handleShowSpan(e){
      const rect = e.target.getBoundingClientRect();
      this.spanPositionLeft = rect.left;
      this.spanPositionTop = rect.top - 125;
      this.showSpan = e.target.value;
    }
  },
};
</script>