<template>
  <v-container id="home">
    <v-row class="my-3">
      <h1 class="text-h4">Hello Admin</h1>
    </v-row>
    <v-row>
      <p>{{ guests.length }} guests are added so far</p>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios";
import GuestService from "@/services/GuestService.js";
export default {
  name: "Home",

  computed: {
    count() {
      return this.guests.length();
    },
  },
  data() {
    return {
      guests: [],
    };
  },
  created() {
    GuestService.getGuests().then((response) => {
      this.guests = response.data;
    });
    this.$cookies.set("isAdmin", true);
  },
};
</script>
