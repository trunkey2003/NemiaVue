<template>
<div class="container w-full min-h-screen bg-gray-100 rounded-t-2xl">
   <img v-bind:src="Media.bannerImage"></img>
   <div class="ml-2 mt-3 max-w-sm lg:h-96 lg:w-full md:w-full lg:max-w-full lg:flex">
      <div class="md:w-full h-96 lg:w-1/5 lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" v-bind:style="{ backgroundImage: 'url(' + Media.coverImage.extraLarge + ')' }" title="Woman holding a mug"></div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
         <div class="max-h-full">
            <h2 class="text-gray-900 font-bold text-4xl">{{Media.title.romaji}}</h2>
            <p class="text-sm text-gray-600 flex items-center my-2">
               {{Media.title.native}}
            </p>
            <p v-html="Media.description" class="text-gray-700 text-base text-clip overflow-auto max-h-[85%] bg-gray-200">{{Media.description}}</p>
         </div>
      </div>
   </div>
   <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-blue-400"></div>
      <span class="flex-shrink mx-4 text-blue-400">Characters</span>
      <div class="flex-grow border-t border-blue-400"></div>
   </div>
   <div class="flex flex-wrap w-full">
      <div v-for="index in Media.characters.edges.length-1"  class="ml-2 mt-3 lg:h-32 lg:w-[32%] w-[47.5%] lg:flex border-2 border-sky-500 hover:bg-gray-300 cursor-pointer">
         <div class="md:w-full h-32 lg:w-1/5 lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" v-bind:style="{ backgroundImage: 'url(' + Media.characters.edges[index].node.image.large + ')' }" title="Woman holding a mug"></div>
         <div class="text-center border-l lg:w-[80%] lg:border-b border-gray-400 lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-1 flex flex-col justify-between leading-normal">
            <div class="max-h-full">
               <h2 class="text-gray-900 font-bold text-lg">{{Media.characters.edges[index].node.name.full}}</h2>
               <p class="text-center text-sm text-gray-600 my-2">
                  {{Media.characters.edges[index].role}}
               </p>
            </div>
         </div>
         <div class="text-center border-r lg:w-[80%] lg:border-b border-gray-400 lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-1 flex flex-col justify-between leading-normal">
            <div class="max-h-full">
               <h2 class="text-gray-900 font-bold text-lg">{{Media.characters.edges[index].voiceActors[0].name.full}}</h2>
               <p class="text-center text-sm text-gray-600 my-2">
                  {{Media.characters.edges[index].voiceActors[0].language}}
               </p>
            </div>
         </div>
         <div class="md:w-full h-32 lg:w-1/5 lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" v-bind:style="{ backgroundImage: 'url(' + Media.characters.edges[index].voiceActors[0].image.large + ')' }" title="Woman holding a mug"></div>
      </div>
   </div>
   <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-blue-400"></div>
      <span class="flex-shrink mx-4 text-blue-400">Watch</span>
      <div class="flex-grow border-t border-blue-400"></div>
   </div>
   <iframe class="custom-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
   <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-blue-400"></div>
      <span class="flex-shrink mx-4 text-blue-400">Reviews</span>
      <div class="flex-grow border-t border-blue-400"></div>
   </div>
</div>
</template>

<script>
import gql from "graphql-tag";

const query = gql`
query Media($id: Int) {
  Media(id: $id) {
    id
    title {
      romaji
      native
    }
    bannerImage
    coverImage {
      extraLarge
    }
    description
    characters{
      edges{
        node{
          name {
            full
          }
          image {
            large
          }
        }
        role
        voiceActors{
          name{
            full
          }
          language
          image {
            large
          }
        }
      }
    }
  }
}
`;

export default {

  apollo: {
    Media: {
      query: query,
      prefetch({ route }) {
        return {
          id: route.params.id,
        };
      },
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
};
</script>
