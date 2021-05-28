var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export async function handler(event, context, callback) {
    console.log("queryStringParameters", event.queryStringParameters)
    const sessions = await stripe.checkout.sessions.list({
        limit: 3,
    });
    callback(null, {
      // return null to show no errors
      statusCode: 200, // http status code
      body: JSON.stringify({
        msg: sessions,
      }),
    })
  }
