// index.js
import app from "./app";

const PORT = parseInt(process.env.PORT);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
