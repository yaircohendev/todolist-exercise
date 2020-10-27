<template>
  <div></div>
</template>

<script>
import { Auth } from "@/firebase/auth";

export default {
  name: "SignUpPage",
  data() {
    return {
      email: "",
      password: ""
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

<style scoped></style>
