const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "5d0e79572a7c93bdbf6e73b50ab33564-us17",
  server: "us17",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();
