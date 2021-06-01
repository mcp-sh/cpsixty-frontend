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
    <v-snackbar
      v-model="successBar"
      timeout="5000"
      color="success"
      outlined
      top
    >
      {{ successText }}
    </v-snackbar>
  </v-container>
</template>

<script>
import GuestService from "@/services/GuestService.js";

export default {
  data() {
    return {
      successBar: false,
      successText: "Sucessfully added Guest",
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
        this.email = "";
        this.name = "";
        this.successBar = true;
        console.log(response);
      });
    },
  },
};
</script>

<style scoped></style>
