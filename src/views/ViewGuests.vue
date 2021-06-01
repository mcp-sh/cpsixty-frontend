<template>
  <v-container class="my-3">
    <v-row justify="center">
      <h1>View All Guests</h1>
    </v-row>
    <v-row v-if="guests" justify="center">
      <v-simple-table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Pax</th>
            <th>Rooms</th>
            <th>ETA</th>
            <th>ETD</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="guest in guests" :key="guest._id">
            <td>{{ guest.name }}</td>
            <td>{{ guest.travelInfo.numPax }}</td>
            <td>{{ guest.travelInfo.numRooms }}</td>
            <td>{{ formatDate(guest.travelInfo.arrDate) }}</td>
            <td>{{ formatDate(guest.travelInfo.depDate) }}</td>
            <td>
              <router-link
                :to="{ name: 'viewguest', params: { id: guest._id } }"
              >
                <v-btn text color="orange">Edit</v-btn>
              </router-link>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
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

<style scoped>
a {
  text-decoration: none;
}
</style>
