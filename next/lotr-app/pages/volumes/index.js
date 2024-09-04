import { introduction, volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function Overview() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume, index) => (
          <li key={index}>
            <Link href={`/volumes/${volume.slug}`}>
              <h2>{volume.title}</h2>
            </Link>

            <p>{volume.description}</p>
          </li>
        ))}
        {/* <li>Volume 1: The Fellowship of the Ring</li>
        <li>Volume 2: The Two Towers</li>
        <li>Volume 3: The Return of the King</li> */}
      </ul>
    </div>
  );
}
