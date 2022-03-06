<template>
  <div>
    <button
      type="button"
      id="signUpBtn"
      class="
        px-4
        py-1
        my-3
        lg:my-0
        bg-gradient-to-r
        from-green-400
        to-blue-500
        hover:from-pink-500 hover:to-yellow-500
        text-white text-lg
      "
      data-bs-toggle="modal"
      data-bs-target="#signUpModal"
    >
      Sign Up
    </button>
    <div
      class="fade custom-modal-01 modal"
      id="signUpModal"
      tabindex="-1"
      aria-labelledby="SignUpModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content relative">
          <div class="modal-body">
            <h3 class="text-center mt-3 text-3xl">Sign Up</h3>
            <span
              v-if="confirmPasswordError"
              class="
                inline-flex
                items-center
                justify-center
                w-full
                py-2
                mt-2
                text-lg
                font-bold
                leading-none
                text-red-100
                bg-red-600
                rounded-full
              "
              >{{ confirmPasswordError }}</span
            >
            <span
              v-if="usernameError"
              class="
                inline-flex
                items-center
                justify-center
                w-full
                py-2
                mt-2
                text-lg
                font-bold
                leading-none
                text-red-100
                bg-red-600
                rounded-full
              "
              >{{ usernameError }}</span
            >
            <button id="close-sign-up-modal" data-bs-dismiss="modal">
              <svg
                class="absolute top-3 right-3 fill-white hover:fill-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="25"
                height="25"
              >
                <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                />
              </svg>
            </button>
            <form @submit="(e) => handleSubmit(e)">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Username</label
                >
                <input
                  name="username"
                  minlength="3"
                  maxlength="20"
                  class="form-control"
                  id="userNameSignUp"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password1" class="form-label">Password</label>
                <input
                  name="password"
                  minlength="3"
                  maxlength="20"
                  type="password"
                  class="form-control"
                  id="passwordSignUp"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password2" class="form-label w-full"
                  >Confirm Password</label
                >
                <input
                  name="confirmPassword"
                  minlength="3"
                  maxlength="20"
                  type="password"
                  class="form-control"
                  id="passwordConfirmSignUp"
                  data-bv-callback="true"
                  data-bv-callback-message="Wrong answer"
                  data-bv-callback-callback="checkCaptcha"
                  required
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="autoLogin"
                />
                <label class="form-check-label w-full" for="exampleCheck1"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      confirmPasswordError: null,
      usernameError: null,
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const autoLogin = document.getElementById('autoLogin').checked;
      if (e.target.password.value != e.target.confirmPassword.value) {
        this.$emit("error", "Confirm password doesn't match");
        return;
      }

      const body = {
        username: e.target.username.value,
        password: e.target.password.value,
      };
      this.$emit("loading", true);
      this.$axios
        .$post(`${process.env.NUXT_ENV_SERVER}/api/user/signup`, body)
        .then((data) => {
          this.$emit("success", "Congratulations, your account has been successfully created.");
          if (autoLogin)
          this.$axios
            .$post(
              `${process.env.NUXT_ENV_SERVER}/api/user/login`,
              body,
              { withCredentials: true }
            )
            .then((data) => {
              console.log(data);
              window.location.href = "/";
            })
            .catch((err) =>{
              this.$emit("error", "Internal Server error");
              console.log(err);
            })
            .finally(() => this.$emit("loading", false));
          console.log(data);
          document.getElementById("close-sign-up-modal").click();
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 409) {
              this.$emit("error", "User already exist");
            } else {
              this.$emit("error", "Internal Server error");
            }
          }
          this.$emit("loading", false);
        })
        .finally(() => {
          if (autoLogin) return;
          this.$emit("loading", false);
        });
    },
    checkCaptcha() {
      return false;
    },
  },
};
</script>