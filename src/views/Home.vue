<template>
  <v-container id="home">
    <v-sheet color="rgba(255,255,255,0.8)" min-height="60vh" class="pa-4 mt-4">
      <v-row v-if="langDe">
        <v-col cols="10" class="mb-4">
          <div class="text-h5 mb-5">Hallo {{ currentGuest.name }}</div>
          <div class="text-body-1 mb-3">
            Ich freue mich sehr, dass du mit mir zusammen meinen Geburtstag
            feiern willst. Um alles vorzubereiten und besser planen zu können
            vervollständige bitte deine Informationen.
          </div>
          <div class="text-body-1">
            Erstmal ein paar allgemeine Informationen.Ich hoffe das alle am
            <span class="font-weight-medium">zweiten Juli</span>
            auf Ischia ankommen werden und wir dann gemeinsam ein schönes
            entspanntes Wochenende in der Landschaft mit guter italienischer
            Gastfreundschaft geniessen können.
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <v-card min-height="500">
            <v-card-title class="light-blue white--text">
              Das Hotel
            </v-card-title>
            <v-img
              position="center"
              height="200"
              src="/images/apollon-club-hotel-ischia.jpg"
              class="mb-3"
            >
            </v-img>
            <v-card-text>
              Wir werden im
              <a href="https://hotelapollon.it/" target="_blank">
                Apollon Club Hotel
              </a>
              wohnen. Ich werde die benötigten Zimmer von Freitag bis Montag
              reservieren. Falls du früher anreist oder länger bleiben wirst
              lass es mich bitte wissen um das Hotel zu informieren.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card min-height="500">
            <v-card-title class="light-blue white--text">
              Ischia & Sant'Angelo
            </v-card-title>

            <v-img
              position="center"
              height="200"
              src="/images/Ischia-map.png"
              class="mb-3"
            >
            </v-img>
            <v-card-text>
              Sant'Angelo ist ein ruhiges Fischerdorf auf der Insel Ischia in
              Kampanien. Ischia ist die größte Insel im Golf von Neapel.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card min-height="500">
            <v-card-title class="light-blue white--text">
              Transport
            </v-card-title>

            <v-img
              position="center"
              height="200"
              src="/images/ischia-ferry.jpg"
              class="mb-3"
            >
            </v-img>
            <v-card-text>
              <div class="text-body-1">
                Ischia ist mit der Fähre von Neapel zu erreichen. Die Überfahrt
                dauert ca. eine Stunde. Der Fährhafen ist von Flughafen mit dem
                Taxi zu erreichen.
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="10" class="mb-4">
          <div class="text-h5 mb-5">Hello {{ currentGuest.name }}</div>
          <div class="text-body-1 mb-3">
            I am very happy to see that you are going to join me for my birthday
            celebration. In order to get everything setup and make sure we are
            going to have a good time please confirm your details for me to
            provide to the hotel.
          </div>
          <div class="text-body-1">
            Here are some general information about the event. I hope for
            everyone to arrive Ischia on
            <span class="font-weight-medium">July 2nd</span>
            spending the weekend, relax, exchange stories and explore the island
            while enjoying Italian hospitality.
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <v-card min-height="500">
            <v-card-title class="light-blue white--text">
              The hotel
            </v-card-title>
            <v-img
              position="center"
              height="200"
              src="/images/apollon-club-hotel-ischia.jpg"
              class="mb-3"
            >
            </v-img>
            <v-card-text>
              We will be staying at the
              <a href="https://hotelapollon.it/" target="_blank">
                Apollon Club Hotel
              </a>
              I will arrange rooms as required for you from Friday to Monday.
              Should you arrive earlier, please let me know and I will inform
              the hotel of your schedule.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card min-height="500">
            <v-card-title class="light-blue white--text">
              Ischia & Sant'Angelo
            </v-card-title>

            <v-img
              position="center"
              height="200"
              src="/images/Ischia-map.png"
              class="mb-3"
            >
            </v-img>
            <v-card-text>
              Ischia is the largest island in the gulf of Naples in the Campania
              region of italy. Sant'Angelo is a quiet fishing village and a
              popular destination for italian and international visitors.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card min-height="500">
            <v-card-title class="light-blue white--text">
              Transportation
            </v-card-title>

            <v-img
              position="center"
              height="200"
              src="/images/ischia-ferry.jpg"
              class="mb-3"
            >
            </v-img>
            <v-card-text>
              Ischia is easily reached form Naples by ferry. The transfer by
              ferry takes about 1 hour. The ferry terminal is easily reached
              from Naples airport by taxi.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
// import axios from "axios";
import GuestService from "@/services/GuestService.js";
export default {
  name: "Home",
  props: { langDe: Boolean },

  computed: {
    count() {
      return this.guests.length();
    },
  },
  data() {
    return {
      guests: [],
      currentGuest: {
        name: "",
      },
    };
  },
  created() {
    GuestService.getGuests().then((response) => {
      this.guests = response.data;
    });
    if (this.$cookies.get("guestId")) {
      const guestId = this.$cookies.get("guestId");
      GuestService.getGuest(guestId).then((response) => {
        // console.log(response.data);
        this.currentGuest = response.data;
      });
    }
  },
};
</script>
