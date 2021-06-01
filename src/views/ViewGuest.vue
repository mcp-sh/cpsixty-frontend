<template>
  <v-container>
    <v-row justify="center" v-if="guest">
      <v-col cols="9">
        <v-card>
          <v-card-title class="text-h4">{{ guest.name }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="guest.travelInfo.numPax"
                  label="Number of Persons"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="guest.travelInfo.numRooms"
                  label="Number of Rooms"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                ETA: {{ formatDate(guest.travelInfo.arrDate) }}<br />
              </v-col>
              <v-col cols="12" sm="6">
                ETD: {{ formatDate(guest.travelInfo.depDate) }}
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="updateGuest" text color="primary">UPDATE</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
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
// import axios from "axios";
import GuestService from "@/services/GuestService.js";
import moment from "moment";
export default {
  data: function () {
    return {
      successBar: false,
      successText: "All Good, info updated",
      guest: null,
      menuA: false,
      ETA: null,
    };
  },
  methods: {
    formatDate(d) {
      return moment(d).format("MMM Do YYYY");
    },
    updateGuest() {
      const id = this.guest._id;
      const updGuest = {
        arrDate: this.guest.travelInfo.arrDate,
        depDate: this.guest.travelInfo.depDate,
        numPax: this.guest.travelInfo.numPax,
        numRooms: this.guest.travelInfo.numRooms,
      };
      GuestService.updateGuest(id, updGuest).then((response) => {
        console.log("Status:", response.status, response.data.travelInfo);
        this.guest = response.data;
        this.successBar = true;
      });
    },
  },
  created() {
    const guestId = this.$route.params.id;
    this.$cookies.set("guestId", guestId);
    GuestService.getGuest(guestId).then((response) => {
      this.guest = response.data;
    });
  },
};
</script>

<style scoped></style>
