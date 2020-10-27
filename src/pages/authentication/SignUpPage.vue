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
      <button>create</button>
      <p class="message">
        Already registered? <a @click="$router.push('/login')">Sign In</a>
      </p>
    </form>
  </div>
</template>

<script>
import { Auth } from "@/firebase/auth";

export default {
  name: "SignUpPage",
  data() {
    return {
      email: "",
      password: "",
      confirmPass: ""
    };
  },
  methods: {
    async registerUser() {
      try {
        await Auth.createUserWithEmailAndPassword(this.email, this.password);
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
