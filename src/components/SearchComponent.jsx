"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SkeletonListVideo from "./SkeletonListVideo";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchComponent = () => {
  const [pageToken, setPageToken] = useState("");
  const [nextPage, setNextPage] = useState(true);
  const keyword = useSearchParams().get("q");
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [maxVideos, setMaxVideos] = useState(30);

  const handleNextSearch = async () => {
    setLoading(true);

    if (keyword) {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL_API}/search?part=snippet&maxResults=30&pageToken=${pageToken}&q=${keyword}&key=${process.env.NEXT_PUBLIC_KEY}`
      );

      const data = await response.data;
      const total = data.pageInfo.totalResults;

      if (maxVideos >= total) {
        setNextPage(false);
      }

      setVideos([...videos, ...data.items]);
    }

    setMaxVideos(maxVideos + 30);
    setLoading(false);
  };
  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true);

      if (keyword) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}/search?part=snippet&maxResults=30&q=${keyword}&key=${process.env.NEXT_PUBLIC_KEY}`
        );

        const data = await response.data;
        const total = data.pageInfo.totalResults;
        setPageToken(data.nextPageToken);
        if (maxVideos >= total) {
          setNextPage(false);
        }

        setVideos(data.items);
      }

      setMaxVideos(maxVideos + 30);
      setLoading(false);
    };

    handleSearch();
  }, []);

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
      <InfiniteScroll
        dataLength={videos.length}
        next={handleNextSearch}
        hasMore={nextPage}
        loader={<SkeletonListVideo />}
        endMessage={<h4 className="text-center my-24">Nothing more to show</h4>}
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 7xl:grid-cols-5 gap-3 p-3">
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
      </InfiniteScroll>
    </div>
  );
};

export default SearchComponent;
