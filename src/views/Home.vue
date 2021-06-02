<template>
  <v-container id="home">
    <v-sheet color="rgba(255,255,255,0.8)" min-height="60vh" class="pa-4 mt-4">
      <v-row>
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
        <v-col cols="6">
          <div class="text-h5">The hotel</div>
          <div class="text-body-2">
            We will be staying at the Apollon Club Hotel I will arrange rooms as
            required for you from Friday to Monday. Should you arrive earlier,
            please let me know and I will inform the hotel of your schedule.
          </div>
        </v-col>
        <v-col cols="6">
          <div class="text-h5">Transportation</div>
          <div class="text-body-2">
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
