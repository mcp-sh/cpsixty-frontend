<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-center">Add Guest</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <v-text-field label="Name" v-model="name"></v-text-field>
        <v-text-field label="Email" v-model="email"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn @click="addGuest">Add</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import GuestService from "@/services/GuestService.js";

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
