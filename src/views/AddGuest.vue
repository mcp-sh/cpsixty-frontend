<template>
  <v-container>
    <v-row>
      <h1 class="text-center">Add Guest</h1>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field label="Name" v-model="name"></v-text-field>
        <v-text-field label="Email" v-model="email"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-btn @click="addGuest">Add</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import GuestService from "@/services/GuestService.js";
// import axios from "axios";
export default {
  data() {
    return {
      email: "",
      name: "",
    };
  },
  methods: {
    addGuest() {
      const newGuest = {
        name: this.name,
        email: this.email,
      };
      GuestService.addGuest(newGuest).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<style scoped></style>
