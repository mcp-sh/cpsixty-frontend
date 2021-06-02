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
      </v-row>
      <v-row v-else>
        <v-col cols="10" class="mb-4">
          <div class="text-h5 mb-5">Hello {{ currentGuest.name }}</div>
          <div class="text-subtitle-1 mb-3">
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
        <v-col cols="4">
          <div class="text-h5">The hotel</div>
          <v-img
            position="center"
            max-width="400"
            height="200"
            src="/images/apollon-club-hotel-ischia.jpg"
            class="mb-3"
          >
          </v-img>
          <div class="text-body-1">
            We will be staying at the
            <a href="https://hotelapollon.it/" target="_blank"
              >Apollon Club Hotel</a
            >
            I will arrange rooms as required for you from Friday to Monday.
            Should you arrive earlier, please let me know and I will inform the
            hotel of your schedule.
          </div>
        </v-col>
        <v-col cols="4">
          <div class="text-h5">Ischia</div>
          <v-img
            position="center"
            height="200"
            max-width="400"
            src="/images/Ischia-map.png"
            class="mb-3"
          >
          </v-img>
          <div class="text-body-1">
            Ischia is easily reached form Naples by ferry. The transfer by ferry
            takes about 1 hour. The ferry terminal is easily reached from Naples
            airport by taxi.
          </div>
        </v-col>
        <v-col cols="4">
          <div class="text-h5">Transportation</div>
          <v-img
            position="center"
            height="200"
            max-width="400"
            src="/images/ischia-ferry.jpg"
            class="mb-3"
          >
          </v-img>
          <div class="text-body-1">
            Ischia is easily reached form Naples by ferry. The transfer by ferry
            takes about 1 hour. The ferry terminal is easily reached from Naples
            airport by taxi.
          </div>
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
