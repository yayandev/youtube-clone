"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SkeletonListVideo from "./SkeletonListVideo";
import Link from "next/link";

const SearchComponent = () => {
  const keyword = useSearchParams().get("q");
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [maxVideos, setMaxVideos] = useState(21);

  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true);

      if (keyword) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}/search?part=snippet&maxResults=${maxVideos}&q=${keyword}&key=${process.env.NEXT_PUBLIC_KEY}`
        );

        const data = await response.data;

        setVideos(data.items);
      }

      setLoading(false);
    };

    handleSearch();
  }, [keyword, maxVideos]);

  if (loading) return <SkeletonListVideo />;

  if (!keyword) {
    document.location.href = "/";
    return (
      <div className="w-full">
        <h1 className="text-center font-bold">No Keyword</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-3">
        {videos?.map((item, i) => {
          if (item.id.videoId) {
            return (
              <Link
                href={`/watch/${item.id.videoId}`}
                key={i}
                className="border space-y-3 rounded-md"
              >
                <img
                  src={item.snippet.thumbnails.medium.url}
                  className="w-full"
                  alt=""
                />
                <div className="w-full flex gap-2 p-2">
                  {/* <img src="/logo1.png" className="h-10 w-10 rounded-full" alt="" /> */}
                  <div className="space-y-2">
                    <h2 className="font-semibold">{item.snippet.title}</h2>
                    <div className="flex text-sm gap-1">
                      <p className="text-sm">{item.snippet.channelTitle}</p>
                      {/* <p>{item?.statistics?.viewCount} views</p> */}
                      <p>•</p>
                      <p>{item?.snippet?.publishedAt.split("T")[0]}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
      <div className="flex justify-center my-3">
        <button
          onClick={() => setMaxVideos(maxVideos + 21)}
          className="p-2 rounded border font-semibold"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
