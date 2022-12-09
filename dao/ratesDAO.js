import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;
let rates;

export class RatesDAO {
  static async injectDB(connection) {
    if (rates) {
      return;
    }

    try {
      rates = await connection.db("currencies").collection("rates");
    } catch (e) {
      console.error(`Unable to establish collection handles in DAO: ${e}`);
    }
  }

  static async addRate(date, rate) {
    try {
      return await rates.insertOne({
        date,
        rate,
      });
    } catch (e) {
      console.error(`Unable to add rate: ${e}`);

      return { error: e };
    }
  }

  static async getRate(date) {
    try {
      console.log(ObjectId(date));
      return await rates.findOne({ _id: ObjectId(date) });
    } catch (e) {
      console.error(`Unable to get rates: ${e}`);

      return { error: e };
    }
  }
}
