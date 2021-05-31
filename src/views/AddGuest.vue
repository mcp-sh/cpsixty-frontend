<template>
  <div id="addguest">
    <h1>Add Guest</h1>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Name" v-model="name"></v-text-field>
          <v-text-field label="Email" v-model="email"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-btn @click="addGuest">Add</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
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
      axios
        .post("http://localhost:3000/api/guests", newGuest)
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style scoped></style>
