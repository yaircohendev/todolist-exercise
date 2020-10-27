<template>
  <header v-if="user">
    <div class="welcome">
      <span>Welcome, {{ user.email }}</span>
    </div>
    <div class="logout" @click="logoutUser">
      <span>Logout</span>
    </div>
  </header>
</template>

<script>
import { Auth } from "@/firebase/auth";

export default {
  name: "TheHeader",
  data() {
    return {
      user: null
    };
  },
  methods: {
    async logoutUser() {
      try {
        await Auth.signOut();
        this.user = "";
        await this.$router.push("/login");
      } catch (err) {
        console.error(err);
      }
    }
  },
  created() {
    Auth.onAuthStateChanged(user => {
      console.log(user);
    });
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }
};
</script>

<style scoped lang="scss">
header {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 20px;
  text-align: left;
  margin-left: 30px;
  color: #fff;

  .logout {
    text-decoration: underline;
    margin-top: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
