import { volumes } from "@/resources/lib/data";
import next from "next";
import Link from "next/link";
import Image from "next/image";

export default function VolumeThree() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <Link href={`/volumes`}>⬅️All Volumes</Link>
      <h1>The Return of the King</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image src={volume.cover} alt={volume.title} width={400} height={400} />
      <VolumeLinks />
    </>
  );
}

export function VolumeLinks() {
  const currentIndex = volumes.findIndex(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  const previousVolume = volumes[currentIndex - 1];
  const nextVolume = volumes[currentIndex + 1];

  return (
    <>
      {previousVolume && (
        <Link href={`/volumes/${previousVolume.slug}`}>
          ⬅️{previousVolume.title}
        </Link>
      )}
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>{nextVolume.title}➡️</Link>
      )}
    </>
  );
}