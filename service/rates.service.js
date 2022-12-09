const requestOptions = {
  method: "GET",
  headers: { apikey: process.env['APILAYER_APIKEY'] ?? "" },
};

export class RatesService {
  static async getRates(req, res, next) {
    await fetch(
      `${process.env['API_URL']}?to=eur&from=usd&amount=1`,
      requestOptions
    ).then((data) => res.send(data.json()));
  }
};