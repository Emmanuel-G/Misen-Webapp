const express = require("express");

const PORT = process.env.PORT || 4000;
const server = express();
server.use(express.static("public"));

server.listen(PORT, () => {
  console.log(`Client server running on http://localhost:${PORT}.`);
});
