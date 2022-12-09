import { RatesDAO } from "../dao/ratesDAO.js";
import { RatesService } from "../service/rates.service.js";

export class RatesController {
  static async apiGetRate(req, res) {
    try {
      const now = new Date();
      const rate = await RatesDAO.getRate(
        new Date(now.toISOString().slice(0, 10)).getTime()
      );

      if (!rate) {
        RatesService.getRates(req, res, (err, data) => {
          if (err) res.send(err);

          console.log("apilayer data: ", data);
          // const rateResponse = await RatesDAO.addRate(
          //   date,
          //   rate,
          // );

          res.json(data);
        });
      }
    } catch (e) {
      console.log(`apiGetRate error: ${e}`);
      res.status(500).json({ error: e });
    }
  }
}
