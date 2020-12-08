const mailgun = require("mailgun-js")
require("dotenv").config()

exports.handler = function (event, context, callback) {
  theBody = JSON.parse(event.body)

  const DOMAIN = process.env.MAILGUN_DOMAIN
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API,
    domain: DOMAIN,
  })
  const data = {
    from: theBody.from,
    to: process.env.EMAIL,
    subject: `You are recieving this email from ${theBody.from} about: 
    ${theBody.subject}`,
    text: theBody.body,
  }
  mg.messages().send(data, (error, body) => {
    if (error) {
      return console.log(error)
    }
    callback(null, {
      statusCode: 200,
      body: "Mail sent",
    })
  })
}
