<template>
  <div class="auth-page">
    <form class="form">
      <input type="text" placeholder="email address" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <input
        type="password"
        placeholder="confirm password"
        v-model="confirmPass"
      />
      <button @click.prevent="registerUser">create</button>

      <ErrorBar :errors="errors" />

      <p class="message">
        Already registered? <a @click="$router.push('/login')">Sign In</a>
      </p>
    </form>
  </div>
</template>

<script>
import { Auth } from "@/firebase/auth";
import ErrorBar from "@/components/ErrorBar";
import validate from "../../modules/validation-module";

export default {
  name: "SignUpPage",
  components: { ErrorBar },
  data() {
    return {
      email: "",
      password: "",
      confirmPass: "",
      errors: []
    };
  },
  methods: {
    async registerUser() {
      try {
        this.errors = [];
        if (!validate.email(this.email)) {
          this.errors.push("Please enter a valid email address");
        }
        if (this.password !== this.confirmPass) {
          this.errors.push("Password do not match");
        }

        if (!this.errors.length) {
          await Auth.createUserWithEmailAndPassword(this.email, this.password);
          await this.$router.push("/");
        }
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
