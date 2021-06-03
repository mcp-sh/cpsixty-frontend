<template>
  <v-app>
    <v-app-bar app color="gray lighten-3">
      <v-spacer></v-spacer>
      <div>
        <router-link :to="{ name: 'home' }">
          <v-btn text color="blue accent-2">Home</v-btn>
        </router-link>
        <router-link
          v-if="guestId"
          :to="{ name: 'viewguest', params: { id: guestId } }"
        >
          <v-btn v-if="langDe" text color="blue accent-2">Reisedaten</v-btn>
          <v-btn v-else text color="blue accent-2">Travel data</v-btn>
        </router-link>
        <v-btn text color="blue accent-2" @click="toggleLang">EN | DE</v-btn>
      </div>
      <div v-if="isAdmin">
        <router-link :to="{ name: 'addguest' }">
          <v-btn text color="blue accent-2">Add</v-btn>
        </router-link>
        <router-link :to="{ name: 'viewguests' }">
          <v-btn text color="blue accent-2">View All</v-btn>
        </router-link>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view :langDe="langDe" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    guestId: "",
    isAdmin: false,
    langDe: false,
  }),
  methods: {
    toggleLang() {
      this.langDe = !this.langDe;
    },
  },
  mounted() {
    this.guestId = this.$cookies.get("guestId");
    if (this.$cookies.get("isAdmin")) {
      this.isAdmin = true;
    }
  },
};
</script>
<style>
a {
  text-decoration: none;
}
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
