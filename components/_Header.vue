<template>
  <div>
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
        <a href="/" class="flex">
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
            class="
              flex
              w-full
              justify-between	
              md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium
            "
          >
            <li>
              <button
                type="button"
                class="
                  px-4
                  py-1
                  my-3
                  lg:my-0
                  bg-gradient-to-r
                  from-green-400
                  to-blue-500
                  hover:from-pink-500 hover:to-yellow-500
                  text-white
                  text-lg
                "
                data-bs-toggle="modal"
                data-bs-target="#signUpModal"
              >
                Sign Up
              </button>
            </li>
            <li>
              <button
                type="button"
                class="
                  px-4
                  py-1
                  my-3
                  lg:my-0
                  bg-gradient-to-r
                  from-green-400
                  to-blue-500
                  hover:from-pink-500 hover:to-yellow-500
                  text-white
                  text-lg
                "
                data-bs-toggle="modal"
                data-bs-target="#signInModal"
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Modal -->
    <div
      class="modal fade custom-modal-01"
      id="signUpModal"
      tabindex="-1"
      aria-labelledby="SignUpModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h3 class="text-center mt-3 text-3xl">Sign Up</h3>
            <form>
              <div
                class="custom-error-dialog text-white fw-bold bg-danger my-3"
              ></div>
              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  class="form-label"
                  >Username</label
                >
                <input
                  minlength="3"
                  maxlength="20"
                  class="form-control"
                  id="exampleInputTaiKhoan1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label"
                  >Password</label
                >
                <input
                  minlength="3"
                  maxlength="20"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label"
                  >Confirm Password</label
                >
                <input
                  minlength="3"
                  maxlength="20"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Auto Login After Sign Up</label
                >
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary custom-button-01">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade custom-modal-01"
      id="signInModal"
      tabindex="-1"
      aria-labelledby="SignInModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h3 class="text-center mt-3 text-3xl">Sign In</h3>
            <form>
              <div
                class="custom-error-dialog text-white fw-bold bg-danger my-3"
              ></div>
              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  class="form-label"
                  >Username</label
                >
                <input
                  minlength="3"
                  maxlength="20"
                  class="form-control"
                  id="exampleInputTaiKhoan1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label"
                  >Password</label
                >
                <input
                  minlength="3"
                  maxlength="20"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Remember Me</label
                >
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary custom-button-01">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      classActive: "hidden",
    };
  },
  methods: {
    myToogle: function () {
      this.classActive = this.classActive == "hidden" ? "" : "hidden";
      // some code to filter users
    },
  },
};
</script>
