const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const nodemailer = require('nodemailer');
const app = express();
// Used to get the Password from the .env file.
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
  // Define API routes here
  // app.use(routes);
  
  // Send every other request (anything else) to the React app
  // Define any API routes before this runs
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  app.post('/submit', (req, res) => {
    console.log(req.body)
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "p.corcoran.portfolio@gmail.com",
                pass: process.env.PASS
            }
        })

        let info = transporter.sendMail({
            from: "website@p-corcoran-portfolio.com",
            to: "patrickcorcoran10@gmail.com",
            subject: "Portfolio Inqury from " + req.body.name,
            text: req.body.message,
            html: htmlEmail
        })

        console.log("Message sent: %s", info.text);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info) )
        })
    })

  
  // Syncing our database and logging a message to the user upon success
  // using db.sequelize.sync({force: true}).then(function() { will reset db every time.
  
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });