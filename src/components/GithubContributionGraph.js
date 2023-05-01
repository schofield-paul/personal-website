import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// depricated -- using external api

export default function GithubContributionGraph({ username }) {
  const [imageUrl, setImageUrl] = useState(null);
  console.log(process.env.GITHUB_TOKEN);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/makeitsough/contributions`,
          {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
          }
        );
        const blob = await response.blob();
        setImageUrl(URL.createObjectURL(blob));
      } catch (error) {
        console.error(error);
      }
    };
    fetchImage();
  }, [username]);

  return imageUrl ? (
    <Image
      src={imageUrl}
      alt='GitHub contribution Graph'
      height={200}
      width={600}
    />
  ) : (
    <div>Loading...</div>
  );
}
