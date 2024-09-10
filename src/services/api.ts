import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-company-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6Im5ldyBjb21wYW55IiwiY25waiI6IjEyMzEyNDEyNSIsImlhdCI6MTcyNTc1OTE1OH0.o5tuVEjPnAxiYgMqTp993mZgm-cJ8W7owe0mGouoqL4",
  },
});

export default api;
