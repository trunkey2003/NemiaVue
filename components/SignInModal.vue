<template>
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
</template>

<script>
export default {
};
</script>