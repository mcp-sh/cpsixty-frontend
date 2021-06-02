<template>
  <v-container>
    <v-row justify="center" v-if="guest">
      <v-col v-if="langDe" cols="9">
        <GuestCardDe :guest="guest" />
      </v-col>
      <v-col v-else cols="9">
        <GuestCardEn :guest="guest" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios";
import GuestService from "@/services/GuestService.js";
import GuestCardDe from "@/components/guestCardDe.vue";
import GuestCardEn from "@/components/guestCardEn.vue";
export default {
  components: { GuestCardDe, GuestCardEn },
  props: { langDe: Boolean },
  data: function () {
    return {
      guest: null,
    };
  },
  created() {
    const guestId = this.$route.params.id;
    this.$cookies.set("guestId", guestId);
    GuestService.getGuest(guestId).then((response) => {
      this.guest = response.data;
    });
  },
};
</script>

<style scoped></style>
