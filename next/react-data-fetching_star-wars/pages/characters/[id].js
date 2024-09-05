import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occured whilte fetching data");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const URL = `https://swapi.dev/api/people/${id}`;
  const { data: character, isLoading, error } = useSWR(URL, fetcher);

  if (error) return <p>An error occured while loading</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <Layout>
      <Card
        id={id}
        name={character.name}
        height={character.height}
        eyeColor={character.eye_color}
        birthYear={character.birth_year}
      />
    </Layout>
  );
}
