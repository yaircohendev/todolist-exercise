<template> <div></div></template>

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

<style scoped></style>
