<template>
  <v-app>
    <v-app-bar dense app color="primary" dark>
      <v-toolbar-title>
        <h2>CPsixty</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <router-link
          v-if="guestId"
          class="white--text mx-3"
          :to="{ name: 'ViewGuest', params: { id: guestId } }"
          >My Info
        </router-link>
        <router-link class="white--text mx-3" :to="{ name: 'Home' }"
          >Home
        </router-link>
      </div>
      <div v-if="isAdmin">
        <router-link class="white--text mx-3" :to="{ name: 'AddGuest' }"
          >Add
        </router-link>
        <router-link class="white--text mx-3" :to="{ name: 'ViewGuests' }"
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
