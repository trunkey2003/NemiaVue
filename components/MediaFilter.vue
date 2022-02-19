<template>
  <div class="container flex justify-center items-center text-gray-700 pb-6">
      <select
        class="w-[18%] h-10 pl-3 pr-6 mx-2 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        placeholder="Regular input"
      >
        <option v-for="genre in GenreCollection">{{genre}}</option>
      </select>

      <select
        class="w-[18%] h-10 pl-3 pr-6 mx-2 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        placeholder="Regular input"
      >
        <option v-for="mediaTag in MediaTagCollection">{{mediaTag.name}}</option>
      </select>

      <select
        class="w-[18%] h-10 pl-3 pr-6 mx-2 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        placeholder="Regular input"
      >
        <option v-for="index in (1,100)">{{2023 - index}}</option>
      </select>

      <select
        class="w-[18%] h-10 pl-3 pr-6 mx-2 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        placeholder="Regular input"
      >
        <option>TV Show</option>
        <option>Movie</option>
        <option>TV Short</option>
        <option>Special</option>
        <option>OVA</option>
        <option>ONA</option>
        <option>Music</option>
      </select>
      
      <select
        class="w-[18%] h-10 pl-3 pr-6 mx-2 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        placeholder="Regular input"
      >
        <option>FINISHED</option>
        <option>RELEASING</option>
        <option>NOT_YET_RELEASED</option>
        <option>CANCELLED</option>
        <option>HIATUS</option>
      </select>
    </div>
</template>

<script>
import gql from "graphql-tag";

const GenreCollection = gql`
  query{
  GenreCollection
  }
`;

const MediaTagCollection = gql`
  query{
  MediaTagCollection {
    name
  }
}
`;

export default {
  apollo: {
    GenreCollection: {
      query: GenreCollection,
      prefetch: true,
    },
    MediaTagCollection: {
      query: MediaTagCollection,
      prefetch: true,
    },
  },
};
</script>