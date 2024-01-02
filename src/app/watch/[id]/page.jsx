import WatchVideo from "@/components/WatchVideo";
import React from "react";

const WatchPage = ({ params }) => {
  return (
    <>
      <WatchVideo id={params.id} />
    </>
  );
};

export default WatchPage;
