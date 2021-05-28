var stripe = require('stripe')("sk_test_51FbabNKoQd0YnjwHPpW4Yn6f2R4FMZsmwQIOMbejpG2JlusIxRFILCW6eBknaJRoVB7IhoPoo30iWxrrYiRmIeqw00pfQYu41m");


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