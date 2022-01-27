<template>
  <div class="auth-page">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <b-form @submit.prevent="onSubmit(user)">
            <b-form-group>
              <b-input
                type="text"
                v-model="user"
                placeholder="User"
              ></b-input>
            </b-form-group>
            <button class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    onSubmit(user) {
      this.$store.dispatch("auth/login", user);
      sessionStorage.setItem("user", JSON.stringify({ username: user }));
      sessionStorage.setItem("token", "your auth token here");
      window.history.pushState(null, null, "/");
    },
  },
};
</script>
