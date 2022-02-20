<template>
  <div
    class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
  >
    <div class="flex-1 flex justify-between sm:hidden">
      <a 
        v-if="pageIndex > 1"
        :href="`/${pageIndex-1}`"
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        Previous
      </a>
      <div
        v-else
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        Previous
      </div>
      <a
        v-if="pageIndex < 4219"
        :href="`/${pageIndex+1}`"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        Next
      </a>
      <a
        v-else
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        Next
      </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{20 * (pageIndex-1)}}</span>
          to
          <span class="font-medium">{{20 * (pageIndex)}}</span>
          of
          <span class="font-medium">{{20 * 4219}}</span>
          results
        </p>
      </div>

      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            :href="`/1`"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">First</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-bar-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
              />
            </svg>
          </a>
          <a
            v-if="pageIndex > 1"
            :href="`/${pageIndex-1}`"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <div
            v-else
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-50 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <div v-for="index in [0, 1, 2]" :key="index">
            <a
              v-if="pageIndex == pageIndex + index && pageIndex <= 4213"
              :href="`/${pageIndex + index}`"
              aria-current="page"
              class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {{ pageIndex + index }}
            </a>
            <a
              v-else-if="pageIndex > 4213 && pageIndex == 4213 + index"
              :href="`/${4213 + index}`"
              aria-current="page"
              class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {{ 4213 + index }}
            </a>
            <a
              v-else-if="pageIndex > 4213 && pageIndex != 4213 + index"
              :href="`/${4213 + index}`"
              aria-current="page"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
            >
              {{ 4213 + index }}
            </a>
            <a
              v-else
              :href="`/${pageIndex + index}`"
              aria-current="page"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
            >
              {{ pageIndex + index }}
            </a>
          </div>
          <span
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
          >
            ...
          </span>
          <div v-for="index in [4217, 4218, 4219]" :key="index">
            <a
              v-if="pageIndex == index"
              :href="`/${index}`"
              aria-current="page"
              class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {{ index }}
            </a>
            <a
              v-else
              :href="`/${index}`"
              aria-current="page"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
            >
              {{ index }}
            </a>
          </div>
          <a
            v-if="pageIndex < 4219"
            :href="`/${pageIndex + 1}`"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Next</span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <div
            v-else
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gray-50 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Next</span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <a
            :href="`/4219`"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Last</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-bar-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

const GenreCollection = gql`
  query {
    GenreCollection
  }
`;

export default {
  data() {
    return {
      pageIndex: this.$route.params.page
        ? parseInt(this.$route.params.page)
        : 1,
    };
  },
  //   apollo: {
  //     GenreCollection: {
  //       query: GenreCollection,
  //       prefetch: true,
  //     },
  //   },
};
</script>
