import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return "error";
  }

  return (
    <>
      <h2>Details of {data.name}</h2>
      <ul>
        <li>Name: {data.name}</li>
        <li>Description: {data.description}</li>
        <li>{`Price: ${data.price} ${data.currency}`}</li>
        <li>Categroy: {data.category}</li>
      </ul>
    </>
  );
}
