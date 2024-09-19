import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  try {
    if (request.method === "GET") {
      const product = await Product.findById(id).populate("reviews");
      response.status(200).json(product);
      return;
    }

    if (request.method === "PUT") {
      const updatedProduct = request.body;
      console.log(updatedProduct);
      await Product.findByIdAndUpdate(id, updatedProduct);
      response.status(200).json({ status: "Product successfully updated." });
    }

    if (request.method === "DELETE") {
      await Product.findByIdAndDelete(id);
      response.status(200).json({ status: "Product successfully deleted." });
    }
  } catch (error) {
    response.status(404).json({ status: "Not Found" });
    return;
  }
}
