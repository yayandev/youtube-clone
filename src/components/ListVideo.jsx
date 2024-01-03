"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SkeletonListVideo from "./SkeletonListVideo";
import InfiniteScroll from "react-infinite-scroll-component";

const ListVideo = () => {
  const [nextPage, setNextPage] = useState(true);
  const [pageToken, setPageToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [maxVideos, setMaxVideos] = useState(21);
  const [videos, setVideos] = useState([]);

  const nextVideos = async () => {
    setLoading(true);
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL_API}/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=21&pageToken=${pageToken}&key=${process.env.NEXT_PUBLIC_KEY}`
    );

    const data = await response.data;

    const total = data.pageInfo.totalResults;

    if (maxVideos >= total) {
      setNextPage(false);
    }

    let plus = [...videos, ...data.items];

    setMaxVideos(maxVideos + 21);

    setVideos(plus);

    setLoading(false);
  };

  useEffect(() => {
    const getPopularVideos = async () => {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL_API}/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=ID&maxResults=21&key=${process.env.NEXT_PUBLIC_KEY}`
      );

      const data = await response.data;

      setPageToken(data.nextPageToken);

      setVideos(data.items);

      setMaxVideos(maxVideos + 21);
      setLoading(false);
    };
    getPopularVideos();
  }, []);

  // if (loading) return <SkeletonListVideo />;

  return (
    <>
      <InfiniteScroll
        dataLength={videos.length}
        next={nextVideos}
        hasMore={nextPage}
        loader={<SkeletonListVideo />}
        endMessage={<h4 className="text-center my-24">Nothing more to show</h4>}
      >
        <div className="w-fullgrid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 7xl:grid-cols-5 gap-3 p-3">
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
      </InfiniteScroll>
    </>
  );
};

export default ListVideo;
