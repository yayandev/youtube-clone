"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SkeletonWatchVideo from "./SkeletonWatchVideo";
import { FaEye, FaHand, FaHeart } from "react-icons/fa6";
import Link from "next/link";

const WatchVideo = ({ id }) => {
  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideo = async () => {
      setLoading(true);

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL_API}/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id=${id}&key=${process.env.NEXT_PUBLIC_KEY}`
      );

      const data = await response.data;

      console.log(data);
      setVideo(data.items[0]);

      document.title = `Youtube - ${data.items[0].snippet.title}`;

      setLoading(false);
    };

    getVideo();
  }, [id]);

  if (loading) return <SkeletonWatchVideo />;

  console.log(video);

  return (
    <div className="p-3 w-full flex gap-2 md:flex-row flex-col box-border">
      <div className="flex-[2] space-y-3">
        <iframe
          className="w-full sm:h-[370px] lg:h-[450px] h-[270px]"
          src={`https://www.youtube.com/embed/${id}`}
          frameborder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold sm:text-lg">{video.snippet.title}</h1>
        <div className="flex gap-2 items-center">
          <h2 className="font-semibold">{video?.snippet?.channelTitle}</h2>
          <span>-</span>
          <p>{video?.snippet?.publishedAt.split("T")[0]}</p>
        </div>
        <div className="w-full border-b flex flex-wrap gap-2 items-center">
          <p className="flex items-center gap-1">
            <span>{video?.statistics?.viewCount}</span>
            <span>
              <FaEye />
            </span>
          </p>
          <p className="flex items-center gap-1">
            <span>{video?.statistics?.likeCount}</span>
            <span>
              <FaHeart />
            </span>
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {video?.snippet?.tags?.map((tag, i) => (
            <Link
              href={`/search?q=${tag.replace(" ", "+")}`}
              className="text-xs p-1 text-blue-500 rounded"
              key={i}
            >
              #{tag}
            </Link>
          ))}
        </div>
        <div
          className="w-full border-b pb-2 text-sm"
          dangerouslySetInnerHTML={{ __html: video?.snippet?.description }}
        ></div>
      </div>
      <div className="flex-1">
        <div className="w-full sm:my-0 my-5">
          <h1 className="font-bold text-center">Tidak ada video terkait!</h1>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
