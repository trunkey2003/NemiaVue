<template>
  <div>{{Media}}</div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    Media: {
      query: gql`
        query Media($id: Int) {
          Media(id: $id) {
            id
            title {
              english
            }
          }
        }
      `,
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
