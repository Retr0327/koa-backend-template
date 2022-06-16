import app from "./api/app";

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`⚡️[server] Listening on port ${PORT}`);
});
