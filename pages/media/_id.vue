<template>
  <div>
    <page-loading v-if="!isLoaded"/>
    <Media/>
  </div>
</template>

<script>

export default {
  data : () => {
    return{
      isLoaded: false
    }
  },
  mounted(){
    this.isLoaded = true;
  }
};
</script>
