import { useRef, useState } from "react";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = ({ image, alt = "", video }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);

    if (!videoRef.current.muted) {
      videoRef.current.play();
    }
  };

  return (
    <div className="work-image">
      {video ? (
        <>
          <video
            ref={videoRef}
          src={`/video/${encodeURIComponent(video)}`}
            autoPlay
            muted
            playsInline
            loop
            controls
            preload="metadata"
          />

          <button
            className="video-sound"
            onClick={toggleSound}
            aria-label={muted ? "Turn sound on" : "Mute sound"}
          >
            {muted ? <MdVolumeOff /> : <MdVolumeUp />}
          </button>
        </>
      ) : (
        <img src={image} alt={alt} />
      )}
    </div>
  );
};

export default WorkImage;