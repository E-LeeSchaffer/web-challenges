import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";

export default function Volumes() {
  return (
    <>
      <Title>The Lord of the Rings</Title>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

const Title = styled.h1`
  font: var(--font-headline-1);
`;
