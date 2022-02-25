<template>
    <div class="mt-1 relative min-w-[18%] mx-2 font-mono">
        <h1 class="text-white py-1 text-sm lg:text-md">{{searchTitle}}</h1>
        <button
          type="button"
          class="
            relative
            h-10
            w-full
            bg-white
            border border-gray-300
            rounded-md
            shadow-sm
            text-left
            cursor-default
            focus:outline-none
            focus:ring-1
            focus:ring-indigo-500
            focus:border-indigo-500
            sm:text-sm
          "
          @click="handleSelectOnClick()"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span class="flex items-center">
            <span class="ml-3 block truncate">{{selecting}}</span>
          </span>
          <span
            class="
              ml-3
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-2
              pointer-events-none
            "
          >
            <!-- Heroicon name: solid/selector -->
            <svg
              class="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        <!--
      Select popover, show/hide based on select state.

      Entering: ""
        From: ""
        To: ""
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <ul
          v-bind:class="`
            ${classActive}
            absolute
            z-10
            w-full
            bg-white
            shadow-lg
            max-h-56
            rounded-md
            py-1
            text-base
            ring-1 ring-black ring-opacity-5
            overflow-auto
            focus:outline-none
            sm:text-sm
            `
          "
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <!--
        Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
      -->
          <li
            v-for="select in selects"
            v-bind:key="select"
            class="
              text-gray-900
              cursor-default
              select-none
              relative
              py-2
              pl-3
              pr-9
              hover:bg-gray-200
            "
            v-bind:id="select"
            role="option"
            @click="(e) => handleOptionOnClick(e)"
          >
            <div class="flex items-center pointer-events-none	">
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <span class="font-normal ml-3 block truncate pointer-events-none"> {{select}} </span>
            </div>
          </li>

          <!-- More items... -->
        </ul>
      </div>
</template>

<script>
export default {
    data() {
        return {
            classActive : "hidden"
        }
    },
    methods:{
        handleSelectOnClick(){
            if (!this.classActive) {
                this.classActive = "hidden";
            } else {
                this.classActive = "";
            }
        },
        handleOptionOnClick(e){
            this.handleSelectOnChange(e.target.id);
            this.handleSelectOnClick();
        }
    },
    props: ['selects', 'selecting', 'searchTitle', 'handleSelectOnChange'],
}
</script>