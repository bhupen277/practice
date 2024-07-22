// const fs = require('fs');

// // Initial JSON configuration object
// let config = {
//   "runOnStart": true,
//   "updateInterval": 5,
//   "logging": true,
//   "silent": true,
//   "commitMessage": "--- Auto Git Commit ---",
//   "locale": "en-US",
//   "timeZone": "Europe/Berlin"
// };

// // Generate the userName with the current time
// let currentDate = new Date().toLocaleTimeString();
// let userName = "commit by bhupen " + currentDate;

// // Update the commitMessage in the config object
// config.commitMessage = userName;

// // Print the updated config to the console
// console.log(config);

// // Optionally, save the updated config to a new file
// fs.writeFile('updatedConfig.json', JSON.stringify(config, null, 2), (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
