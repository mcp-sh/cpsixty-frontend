import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://cpsixty-api.herokuapp.com/api",
  // baseURL: "http://localhost:3000/api",
  withCredentials: false,
  headers: {
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
