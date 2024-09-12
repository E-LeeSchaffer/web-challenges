import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductList() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <p>Error occured while fetching!</p>;
  if (!data) return <p>No data found!</p>;

  return (
    <>
      <h1>List of all products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
