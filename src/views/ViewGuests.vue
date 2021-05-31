<template>
  <v-container>
    <h1>View All Guests</h1>
    <v-row v-if="guests">
      <v-col cols="6" v-for="guest in guests" :key="guest._id">
        <router-link :to="{ name: 'ViewGuest', params: { id: guest._id } }">
          <v-card>
            <v-card-title>{{ guest.name }}</v-card-title>
            <v-card-text>
              Number of Person: {{ guest.travelInfo.numPax }}<br />
              Number of Rooms:{{ guest.travelInfo.numRooms }}<br />
              ETA: {{ formatDate(guest.travelInfo.arrDate) }}<br />
              ETD: {{ formatDate(guest.travelInfo.depDate) }}
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
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
    axios.get(`http://localhost:3000/api/guests/`).then((response) => {
      this.guests = response.data;
    });
  },
};
</script>

<style scoped></style>
