<template>
  <v-card>
    <v-card-title class="text-h4">{{ guest.name }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="updatedGuest.travelInfo.numPax"
            label="Anzahl Personen"
            prepend-icon="mdi-account"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="updatedGuest.travelInfo.numRooms"
            label="Anzahl Zimmer"
            prepend-icon="mdi-bed"
            outlined
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
                label="Ankunft"
                :value="formatDate(guest.travelInfo.arrDate)"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              no-title
              locale="de-de"
              :first-day-of-week="1"
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
                label="Arrival Date"
                :value="formatDate(guest.travelInfo.depDate)"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              no-title
              locale="de-de"
              :first-day-of-week="1"
              v-model="updatedGuest.travelInfo.depDate"
              @input="menuETD = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="updateGuest" text color="primary">Aktualisieren</v-btn>
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
  name: "GuestCardDe",
  props: {
    guest: Object,
  },
  data: function () {
    return {
      updatedGuest: null,
      successBar: false,
      successText: "Informationen wurden gespeichert",
      menuETA: false,
      menuETD: false,
      comment: "",
    };
  },
  methods: {
    formatDate(d) {
      return moment(d).locale("de").format("LL");
    },
    updateGuest() {
      const id = this.guest._id;
      const updGuest = {
        arrDate: this.updatedGuest.travelInfo.arrDate,
        depDate: this.updatedGuest.travelInfo.depDate,
        numPax: this.updatedGuest.travelInfo.numPax,
        numRooms: this.updatedGuest.travelInfo.numRooms,
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
