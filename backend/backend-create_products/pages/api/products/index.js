import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const products = await Product.find();
      response.status(200).json(products);
      return;
    }
    if (request.method === "POST") {
      const productData = request.body;
      console.log(productData);

      await Product.create(productData);

      response.status(201).json({ message: "Product created." });
      return;
    }
  } catch (error) {
    console.log(error);
    response.status(400).json({ error: error.message });
    return;
  }
}
