<template>
  <v-container v-if="!isAdmin" class="my-3">
    <v-row justify="center">
      <h1>Nothing to see here, Sorry.</h1>
    </v-row>
  </v-container>

  <v-container class="my-3" v-else>
    <v-row justify="center" class="mb-4">
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
            <th>Sprache</th>
            <th>Updated</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="guest in guests"
            :key="guest._id"
            :class="guest.cancelled ? 'red lighten-4' : ''"
          >
            <td>{{ guest.name }}</td>
            <td>{{ guest.travelInfo.numPax }}</td>
            <td>{{ guest.travelInfo.numRooms }}</td>
            <td>{{ formatDate(guest.travelInfo.arrDate) }}</td>
            <td>{{ formatDate(guest.travelInfo.depDate) }}</td>
            <td>{{ guest.langDe ? "de" : "en" }}</td>
            <td>{{ formatDate(guest.updatedAt) }}</td>
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
      isAdmin: false,
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
    if (this.$cookies.get("isAdmin")) {
      this.isAdmin = true;
    }
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
