import useSWR from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <p>Error occured</p>;
  if (!data) return <p>Laden...</p>;

  return (
    <>
      <h1>Random character</h1>;
      <ul>
        <li>First name: {data.firstName}</li>
        <li>Last name: {data.lastName}</li>
        <li>Age: {data.age}</li>
        <li>Gender: {data.gender}</li>
        <li>Twitter: {data.twitterName}</li>
        <li>Geohash: {data.geohash}</li>
      </ul>
    </>
  );
}
