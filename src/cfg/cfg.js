export const cfg = {
  API: {
    HOST:
      process.env.NODE_ENV === "production"
        ? "https://api-my-project2-mtaj.vercel.app"
        : "http://localhost:3000",
  },
};
