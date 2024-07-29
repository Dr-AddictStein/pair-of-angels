import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'codingjedi048@gmail.com',
    pass: 'eskd tzxp stpe akdl'
  }
});

app.post('/news-letter', (req, res) => {
  const { to, subject, text } = req.body;

  let mailOptions = {
    from: 'codingjedi048@gmail.com',
    to:to,
    subject:subject,
    text:text
  };

  console.log("HUA",mailOptions)

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});
app.post('/contact-us', (req, res) => {
  const { name,lastname,email,message } = req.body;

  let mailOptionsClient = {
    from: 'codingjedi048@gmail.com',
    to:email,
    subject:"Received your Message.",
    text:"Thanks for letting us know about your Interest with Pair of Angels. We reveived your message. Will get back to you soon..."
  };

  console.log("HUA",mailOptionsClient)

  transporter.sendMail(mailOptionsClient, (error, info) => {
    if (error) {
      res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });

  let mailOptionsAdmin = {
    from: 'codingjedi048@gmail.com',
    to:"angel@pairofangels.com",
    // to:"codingjedi048@gmail.com",
    subject:"Got a new Message.",
    text:`You just received a new message from one of the Clients.\nName: ${name + ' ' + lastname}\nEmail: ${email}\nMessage: ${message}\n`
  };

  console.log("HUA",mailOptionsAdmin)

  transporter.sendMail(mailOptionsAdmin, (error, info) => {
    if (error) {
      res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
