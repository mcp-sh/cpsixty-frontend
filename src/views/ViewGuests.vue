<template>
  <v-container>
    <h1>View All Guests</h1>
    <v-row v-if="guests">
      <v-col cols="6" v-for="guest in guests" :key="guest._id">
        <router-link :to="{ name: 'ViewGuest', params: { id: guest._id } }">
          <v-card>
            <v-card-title>{{ guest.name }}</v-card-title>
            <v-card-text>
              <v-row>
                <v-col> Number of Person: {{ guest.travelInfo.numPax }} </v-col>
                <v-col> Number of Rooms:{{ guest.travelInfo.numRooms }} </v-col>
              </v-row>
              <v-row>
                <v-col> ETA: {{ formatDate(guest.travelInfo.arrDate) }} </v-col>
                <v-col> ETD: {{ formatDate(guest.travelInfo.depDate) }} </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GuestService from "@/services/GuestService.js";
import moment from "moment";
export default {
  data: function () {
    return {
      guests: null,
    };
  },
  methods: {
    formatDate(d) {
      return moment(d).format("MMM Do YYYY");
    },
  },
  created() {
    GuestService.getGuests().then((response) => {
      this.guests = response.data;
    });
  },
};
</script>

<style scoped></style>
