<template>
  <div class="auth-page">
    <div class="form">
      <form class="login-form">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>login</button>
        <p class="message">
          Not registered?
          <a @click="$router.push('register')">Create an account</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { Auth } from "@/firebase/auth";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async loginUser() {
      try {
        await Auth.signInWithEmailAndPassword(this.email, this.password);
        await this.$router.push("/");
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/authentication.scss";
</style>
