"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SkeletonListVideo from "./SkeletonListVideo";

const ListVideo = () => {
  const [loading, setLoading] = useState(true);
  const [maxVideos, setMaxVideos] = useState(21);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getPopularVideos = async () => {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL_API}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=ID&maxResults=${maxVideos}&key=${process.env.NEXT_PUBLIC_KEY}`
      );

      const data = await response.data;

      console.log(data);
      setVideos(data.items);
      setLoading(false);
    };

    getPopularVideos();
  }, [maxVideos]);

  if (loading) return <SkeletonListVideo />;

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-3">
        {videos?.map((item, i) => (
          <Link
            href={`/watch/${item.id}`}
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
                <p className="text-sm">{item.snippet.channelTitle}</p>
                <div className="flex text-sm gap-1">
                  <p>{item.statistics.viewCount} views</p>
                  <p>•</p>
                  <p>{item.snippet.publishedAt.split("T")[0]}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center my-3">
        <button
          onClick={() => setMaxVideos(maxVideos + 21)}
          className="p-2 rounded border font-semibold"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default ListVideo;
