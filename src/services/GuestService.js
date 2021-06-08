import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://cpsixty-api.herokuapp.com/api",
  // baseURL: "http://localhost:3000/api",
  withCredentials: false,
  headers: {
    "API-Token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJpYXQiOjE2MjI1OTQ3Nzh9.tMF6WMNREGrHlYrpIlK0MCEsisZantq4bwdhxcUypGM",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getGuests() {
    return apiClient.get("/guests");
  },
  getGuest(id) {
    return apiClient.get(`/guests/${id}`);
  },
  addGuest(guest) {
    return apiClient.post("/guests", guest);
  },
  updateGuest(id, updGuest) {
    return apiClient.patch(`/guests/${id}`, updGuest);
  },
};
