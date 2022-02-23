<template>
  <div>
    <page-loading v-if="!isLoaded"/>
    <Home/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data : () => {
    return{
      isLoaded: false
    }
  },
  mounted(){
    this.isLoaded = true;
  },
}
</script>
