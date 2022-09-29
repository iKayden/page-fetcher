const request = require("request");
const fs = require("fs");

const userInput = process.argv.slice(2);

//1.String with URL to fetch
//2. three options
request(userInput[0], (err, response, body) => {
  if (err) {
    console.log(`Error has occurred => ${err}`);
    process.exit();
  }
  if (response.statusCode !== 200) {
    console.log(
      `Something went wrong... => ${response.statusCode}... Try again.`
    );
  }
  fs.writeFile(userInput[1], body, (e) => {
    if (e) {
      throw err;
    }
    console.log(
      `Downloaded and saved ${fs.statSync(userInput[1]).size} bytes to ${
        userInput[1]
      }`
    );
  });
});
