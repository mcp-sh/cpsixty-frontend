<template>
  <v-card>
    <v-card-title>{{ guest.name }}</v-card-title>
    <v-card-text>
      Number of Person: {{ guest.travelInfo.numPax }}<br />
      Number of Rooms:{{ guest.travelInfo.numRooms }}<br />
      ETA: {{ formatDate(guest.travelInfo.arrDate) }}<br />
      ETD: {{ formatDate(guest.travelInfo.depDate) }}
    </v-card-text>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
  name: "GuestCard",
  props: {
    guest: Object,
  },
  methods: {
    formatDate(d) {
      return moment(d).format("MMM Do YY");
    },
  },
};
</script>

<style scoped></style>
