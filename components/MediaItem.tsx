import Image from "next/image";
import { title } from "process";
import { useEffect, useState } from "react";

type MediaType = "image" | "video" | "audio";

type SourceType = "url" | "file";

interface MediaItemProps {
  type: MediaType;
  src: string;
  title: string;
  sourceType: SourceType;
  coverURL?: string;
}

export default function MediaItem(props: MediaItemProps) {
  const { type, src, sourceType, coverURL } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [component, setComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (type) {
      case "image":
        setComponent(
          <Image src={src} alt={title} width="100%" height="100%"
            layout="responsive" objectFit="contain"/>
        )

      // TODO: Implement video and audio cases
    }
  }, [])

  return (
    <>
      <div className="xl:w-48 lg:w-40 md:w-40 w-36 object-cover">
        {component}
      </div>
    </>
  )
}