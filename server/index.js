const server = require("./server.js");

const instance = process.env.PORT || 5001;

server.listen(instance, () => {
  console.log(`server running on port ${instance}`);
});
