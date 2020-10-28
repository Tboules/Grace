const nodemailer = require("nodemailer")

exports.handler = function (event, context) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    host: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  })
  console.log(event.body)

  transporter.sendMail(
    {
      from: "tboules@gmail.com",
      to: process.env.EMAIL,
      subject: "hello",
      text: "test",
    },
    function (error, info) {
      if (error) {
        callback(error)
      } else {
        callback(null, {
          statusCode: 200,
          body: "working",
        })
      }
    }
  )
}
