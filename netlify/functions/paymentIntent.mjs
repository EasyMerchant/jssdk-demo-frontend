const defaultOptions = {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': Netlify.env.get("API_KEY"),
    'x-apisecret': Netlify.env.get("API_SECRET")
  }
}
export default async (request, context) => {
  try {
    let env = Netlify.env.get("API_ENVIRONMENT");
    let base_url = "https://stage-api.stage-easymerchant.io/api/v1";
    if (env == 'production') {
      base_url = "https://api.lyfepay.io/api/v1";
    } else if (env == 'sandbox') {
      base_url = "https://sandbox-api.sandbox-lyfepay.io/api/v1";
    }
    const response = await fetch(base_url+"/paymentintent", defaultOptions);
    const data = await response.json();
    return new Response(JSON.stringify({
      statusCode: 201,
      body: data
    }));
  } catch (error) {
    return new Response(error.toString(), {
      statusCode: 500,
      body: JSON.stringify(error)
    })
  }
}
