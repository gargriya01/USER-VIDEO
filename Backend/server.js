const http = require("http");
const app = require("./app");
// const { initializeSocket } = require("./socket");
const port = process.env.PORT || 3000;

const server = http.createServer(app);

// initializeSocket(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzZjMWEyZjBkYTQ3Y2FjMWNiMjZkMzgiLCJpYXQiOjE3MzUxMzc4NDIsImV4cCI6MTczNTIyNDI0Mn0.gTjf8dWHrNeX69N_iiTaLaG5MJKFQY7x-bOxin5lhu4",
//     "captain": {
//         "fullname": {
//             "firstname": "test_captain_firstname",
//             "lastname": "test_captain_lastname"
//         },
//         "email": "test_email@gmail.com",
//         "password": "$2b$10$fAdCOEBrWJQCzL/ODuEJZu8/89Zr8mDb2f9Q0ZtSpyblwrwtF17d.",
//         "status": "inactive",
//         "vehicle": {
//             "color": "red",
//             "plate": "MP 04 XY 6204",
//             "capacity": 3,
//             "vehicleType": "car"
//         },
//         "_id": "676c1a2f0da47cac1cb26d38",
//         "__v": 0
//     }
// }