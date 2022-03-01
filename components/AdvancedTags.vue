<template>
    <div class="mt-4">
        <div class="font-bold py-2">{{handleOnRenderCategory(category)}}</div>
        <div class="mt-2 flex flex-wrap">
            <button v-for="mediaTag in MediaTagCollection.filter((index) => (index.category == category))" v-bind:key="mediaTag.name" class="py-1 px-3 custom-background rounded-lg m-2 font-bold text-sm text-white" v-bind:value="mediaTag.name" @click="handleOnClickSpan">{{mediaTag.name}}</button>
        </div>
    </div>
</template>

<style scoped>
    .custom-background {
        background: #3DB4F2E6;
    }
    .custom-background:hover{
        background: #77dc4d;
    }
</style>

<script>
export default {
    props: ['MediaTagCollection', 'category', 'handleSelectOnChange'],
    methods:{
        handleOnRenderCategory(category){
            return category.replace('-', ' ');
        },
        handleOnClickSpan(e){
            this.handleSelectOnChange(e.target.value);
        }
    },
}
</script>