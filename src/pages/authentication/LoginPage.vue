<template>
  <div class="auth-page">
    <div class="form">
      <form class="login-form">
        <input type="text" placeholder="email" v-model="email" />
        <input type="password" placeholder="password" v-model="password" />
        <button @click.prevent="loginUser">login</button>

        <ErrorBar :errors="errors" />

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
import ErrorBar from "@/components/ErrorBar";
import validate from "@/modules/validation-module";

export default {
  name: "LoginPage",
  components: { ErrorBar },
  data() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    async loginUser() {
      try {
        this.errors = [];
        if (!validate.email(this.email)) {
          this.errors.push("Please enter a valid email address");
        }
        if (!this.errors.length) {
          await Auth.signInWithEmailAndPassword(this.email, this.password);
          await this.$router.push("/");
        }
      } catch (err) {
        console.error(err);
        this.errors.push(err.message);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/authentication.scss";
</style>
