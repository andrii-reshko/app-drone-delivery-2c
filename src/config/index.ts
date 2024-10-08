export default {
  app: {
    name: import.meta.env.VITE_APP_NAME || "React App",
  },
  server: {
    mock: import.meta.env.VITE_SERVER_MOCK === "true",
    url: import.meta.env.VITE_SERVER_URL || "http://localhost:8000",
  },
};
