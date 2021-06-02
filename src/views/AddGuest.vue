<template>
  <v-container v-if="!isAdmin" class="my-3">
    <v-row justify="center">
      <h1>Nothing to see here, Sorry.</h1>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-center">Add Guest</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-text>
            <v-text-field label="Name" v-model="name"></v-text-field>
            <v-text-field label="Email" v-model="email"></v-text-field>
            <v-checkbox v-model="langDe" label="Deutsch" />
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue accent-4" @click="addGuest">Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center"> </v-row>

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
      isAdmin: false,
      langDe: true,
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
  created() {
    if (this.$cookies.get("isAdmin")) {
      this.isAdmin = true;
    }
  },
};
</script>

<style scoped></style>
