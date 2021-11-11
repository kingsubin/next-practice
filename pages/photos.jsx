import React from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function Photos({ photos }) {
  return (
    <>
      <h1>hello Photos</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`}>
              <a>
                <Image
                  src={photo.thumbnailUrl}
                  width={100}
                  height={100}
                  alt={photo.title}
                />
                <span>{photo.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=1&_end=10`);
  const photos = await res.json();

  return {
    props: {
      photos
    }
  }
}