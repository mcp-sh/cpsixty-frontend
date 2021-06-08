<template>
  <v-card v-if="updatedGuest">
    <v-card-title class="text-h4">{{ guest.name }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            outlined
            type="number"
            v-model.number="updatedGuest.travelInfo.numPax"
            label="Number of Persons"
            prepend-icon="mdi-account"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            outlined
            type="number"
            v-model.number="updatedGuest.travelInfo.numRooms"
            label="Number of Rooms"
            prepend-icon="mdi-bed"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <!-- ETA Menu -->
        <v-col cols="12" sm="6">
          <v-menu
            v-model="menuETA"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                label="Arrival Date"
                :value="formatDate(guest.travelInfo.arrDate)"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              no-title
              locale="en-gb"
              :first-day-of-week="0"
              v-model="updatedGuest.travelInfo.arrDate"
              @input="menuETA = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <!-- ETD Menu -->
        <v-col cols="12" sm="6">
          <v-menu
            v-model="menuETD"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                label="Departure Date"
                :value="formatDate(guest.travelInfo.depDate)"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              no-title
              locale="en-uk"
              :first-day-of-week="0"
              v-model="updatedGuest.travelInfo.depDate"
              @input="menuETD = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="updateGuest" text color="primary">UPDATE</v-btn>
      <v-spacer></v-spacer>
      <v-checkbox v-model="guestCancelled" label="I can not make it" />
    </v-card-actions>
    <v-snackbar
      v-model="successBar"
      timeout="5000"
      color="success"
      outlined
      top
    >
      {{ successText }}
    </v-snackbar>
  </v-card>
</template>

<script>
import moment from "moment";
import GuestService from "@/services/GuestService.js";
export default {
  name: "GuestCardEn",
  props: {
    guest: Object,
  },
  data: function () {
    return {
      updatedGuest: null,
      successBar: false,
      successText: "Information updated",
      menuETA: false,
      menuETD: false,
      guestCancelled: false,
    };
  },
  methods: {
    formatDate(d) {
      return moment(d).locale("en-gb").format("LL");
    },
    updateGuest() {
      const id = this.guest._id;
      const updGuest = {
        arrDate: this.updatedGuest.travelInfo.arrDate,
        depDate: this.updatedGuest.travelInfo.depDate,
        numPax: this.updatedGuest.travelInfo.numPax,
        numRooms: this.updatedGuest.travelInfo.numRooms,
        cancelled: this.guestCancelled,
      };
      GuestService.updateGuest(id, updGuest).then((response) => {
        console.log("Status:", response.status, response.data.travelInfo);
        this.guest = response.data;
        this.successBar = true;
      });
    },
  },
  mounted() {
    this.updatedGuest = { ...this.guest };
  },
};
</script>

<style scoped></style>
