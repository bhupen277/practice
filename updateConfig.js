const fs = require('fs');
const { exec } = require('child_process');

// Initial JSON configuration object
let config = {
  "runOnStart": true,
  "updateInterval": 5,
  "logging": true,
  "silent": true,
  "commitMessage": "--- Auto Git Commit ---",
  "locale": "en-US",
  "timeZone": "Europe/Berlin"
};

// Generate the userName with the current time
let currentDate = new Date().toLocaleTimeString();
let userName = "commit by bhupen " + currentDate;

// Update the commitMessage in the config object
config.commitMessage = userName;

// Save the updated config to a file
fs.writeFile('config.json', JSON.stringify(config, null, 2), (err) => {
  if (err) throw err;
  console.log('The configuration file has been updated.');

  // Run Git commands to commit the changes
  exec('git add config.json', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error adding file: ${stderr}`);
      return;
    }
    exec(`git commit -m "${userName}"`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error committing file: ${stderr}`);
        return;
      }
      console.log('Changes have been committed.');
    });
  });
});
