import MediaItem from "components/MediaItem";
import Navbar from "components/Navbar";
import React from "react";

export default function Home({}) {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col">
          <Navbar />

          <div className="p-2 h-fit">
            <MediaItem sourceType="url" src="/test icon.png"
              title="test" type="image"/>
          </div>
        </div>
      </div>
    </>
  );
}
