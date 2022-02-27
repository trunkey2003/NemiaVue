<template>
  <div>
    <div class="alert-error-box" v-if="showError">
      <div class="relative px-4 w-full h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-black rounded-lg shadow dark:bg-gray-700 w-full">
            <!-- Modal header -->
            <div class="flex justify-end p-2">
                <button @click="handleLoginError('')" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-gray-300" data-modal-toggle="popup-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 pt-0 text-center">
                <svg class="mx-auto mb-4 w-14 h-14 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-white">{{msg}}</h3>
                <button @click="handleLoginError('')" data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Close
                </button>
            </div>
        </div>
    </div>
    </div>
    <div v-if="loading">
      <fetch-loading/>
    </div>
    <nav
      class="
        bg-gray-400
        border-gray-200
        px-2
        sm:px-4
        py-2
        rounded
        dark:bg-gray-900
        bg-opacity-80
      "
    >
      <div
        class="
          container
          custom-font-cursive
          flex flex-wrap
          justify-between
          items-center
          mx-auto
        "
      >
        <a href="/" class="flex hover:opacity-80 hover:no-underline">
          <img src="/nemia.png" class="w-10 h-10" />
          <span
            class="
              self-center
              text-3xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >emia</span
          >
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          @click="myToogle"
          v-bind:class="`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          v-bind:class="`${classActive} w-full md:block md:w-auto`"
          id="mobile-menu"
        >
          <ul
            v-if="!user"
            class="
              flex
              w-full
              justify-between
              md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium
            "
          >
            <li>
              <sign-up-modal @error="handleLoginError" @loading="handlePageLoading"/>
            </li>
            <li>
              <sign-in-modal @error="handleLoginError" @loading="handlePageLoading" />
            </li>
          </ul>
          <div
            v-else
            class="
              flex
              w-full
              justify-between
              md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium
              text-white
            "
          >
            <div class="py-2">Hello, {{ user }}</div>
            <button
              type="button"
              class="
                ml-3
                py-2
                px-4
                bg-gradient-to-r
                from-green-400
                to-blue-500
                hover:from-pink-500 hover:to-yellow-500
                text-white
              "
              @click="signOut()"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import PageLoading from './PageLoading.vue';
import SignInModal from "./SignInModal.vue";
import SignUpModal from "./SignUpModal.vue";
export default {
  components: { SignUpModal, SignInModal, PageLoading },
  name: "Header",
  data() {
    return {
      showError: false,
      loading: false,
      user: null,
      classActive: "hidden",
      msg: "",
    };
  },
  methods: {
    myToogle: function () {
      this.classActive = this.classActive == "hidden" ? "" : "hidden";
      // some code to filter users
    },
    signOut() {
      this.handlePageLoading(true);
      this.$axios
        .get("https://me-musicplayer.herokuapp.com/api/user/signout", {
          withCredentials: true,
        })
        .then(() => (window.location.href = "/"))
        .finally(() => this.handlePageLoading(false));
    },
    handleLoginError(msg) {
      if (msg) {
        this.showError = true;
        this.msg = msg;
      } else {
        this.showError = false;
        this.msg = "";
      }
    },
    handlePageLoading(boolean){
      this.loading = boolean;
    }
  },
  async beforeMount() {
    const { data } = await this.$axios.get(
      "https://me-musicplayer.herokuapp.com/api/user/trunkey",
      {
        withCredentials: true,
      }
    );
    this.user = data.onAccess;
  },
};
</script>
