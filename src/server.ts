import { app } from "./app";

const PORT = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000;

app.listen(
  {
    port: PORT,
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);
