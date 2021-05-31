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
  </v-container>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function () {
    return {
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
      axios
        .patch(
          `https://cpsixty-api.herokuapp.com/api/guests/${this.guest._id}`,
          this.guest
        )
        .then((response) => {
          console.log(response);
        });
    },
  },
  created() {
    axios
      .get(
        `https://cpsixty-api.herokuapp.com/api/guests/${this.$route.params.id}`
      )
      .then((response) => {
        this.guest = response.data;
      });
  },
};
</script>

<style scoped></style>
