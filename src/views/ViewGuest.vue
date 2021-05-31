<template>
  <v-container>
    <h1>View Guest</h1>
    <v-row v-if="guest">
      <v-col cols="6">
        <v-card>
          <v-card-title>{{ guest.name }}</v-card-title>
          <v-card-text>
            Number of Person: {{ guest.travelInfo.numPax }}<br />
            Number of Rooms:{{ guest.travelInfo.numRooms }}<br />
            ETA: {{ formatDate(guest.travelInfo.arrDate) }}<br />
            ETD: {{ formatDate(guest.travelInfo.depDate) }}
          </v-card-text>
        </v-card>
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
      guest: null,
    };
  },
  methods: {
    formatDate(d) {
      return moment(d).format("MMM Do YYYY");
    },
  },
  created() {
    axios
      .get(`http://localhost:3000/api/guests/${this.$route.params.id}`)
      .then((response) => {
        this.guest = response.data;
      });
  },
};
</script>

<style scoped></style>
