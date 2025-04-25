function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
const defaultOptions = {
  method: "POST",
  body: JSON.stringify({
    amount: getRandomInt(1,100),
   
  }),
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': Netlify.env.get("API_KEY"),
    'x-apisecret': Netlify.env.get("API_SECRET")
  }
}
export default async (request, context) => {
  try {
    const env = Netlify.env.get("API_ENVIRONMENT");
    let base_url = "https://stage-api.stage-easymerchant.io/api/v1";
    if (env == 'production') {
      base_url = "https://api.lyfepay.io/api/v1";
    } else if (env == 'sandbox') {
      base_url = "https://sandbox-api.sandbox-lyfepay.io/api/v1";
    }
    const parsedBody = await request.json()
    const {amount,is_recurring, intervals, allowed_cycles, recurring_start_date_type, recurring_start_date } = parsedBody;
    if(is_recurring==true){
    defaultOptions.body = JSON.stringify({
      amount,
      is_recurring,
      intervals,
      allowed_cycles,
      recurring_start_date_type,
      recurring_start_date
    });
    }
    const response = await fetch(base_url+"/paymentintent", defaultOptions);
    const data = await response.json();
    return new Response(JSON.stringify({
      statusCode: 201,
      env,
      body: data
    }));
  } catch (error) {
    console.log({error})
    return new Response(error.toString(), {
      statusCode: 500,
      env,
      body: JSON.stringify(error)
    })
  }
}
