<template>
  <v-app>
    <v-app-bar app color="gray lighten-3">
      <v-toolbar-title>
        <h2>CPsixty</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <router-link
          v-if="guestId"
          class="mx-3"
          :to="{ name: 'viewguest', params: { id: guestId } }"
          >My Info
        </router-link>
        <router-link class="mx-3" :to="{ name: 'home' }">Home </router-link>
      </div>
      <div v-if="isAdmin">
        <router-link class="mx-3" :to="{ name: 'addguest' }">Add </router-link>
        <router-link class="mx-3" :to="{ name: 'viewguests' }"
          >View All
        </router-link>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    guestId: "",
    isAdmin: false,
  }),
  mounted() {
    this.guestId = this.$cookies.get("guestId");
    if (this.$cookies.get("isAdmin")) {
      this.isAdmin = true;
    }
  },
};
</script>
<style>
#app {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      rgba(67, 102, 217, 0.5),
      rgba(67, 102, 217, 0.5)
    ),
    url("/images/ischia.jpg");
}
</style>
