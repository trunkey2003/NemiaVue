<template>
  <div>
    <media v-if="isDesktop"/>
    <media-mobile v-else/>
  </div>
</template>

<script>
import Media from '~/components/Media.vue';
import MediaMobile from '~/components/MediaMobile.vue';

export default {
  components: { Media },
  data(){
    return{
      isDesktop: true
    }
  },
  beforeMount(){
    //unfriendly for developer, friendly with user
    this.isDesktop = window.innerWidth > 1200;
  }
};
</script>