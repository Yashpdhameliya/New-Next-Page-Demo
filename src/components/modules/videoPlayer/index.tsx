import React, { useEffect, useRef, useState } from "react";
import styles from "./videoPlayer.module.scss";
import classNames from "classnames";
const PlayIcon = "../assets/icons/play_icon.svg";

export default function VideoPlayer({
  url,
  keyProps,
  videoAutoPlay = true,
}: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoAutoPlay) {
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.8 }
    );
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", function () {
        setIsPlaying(false);
      });
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef?.current]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying && videoRef.current.paused) {
        videoRef.current.play().catch((error) => {});
      } else {
        videoRef.current.pause();
      }
      setIsMuted(true);
    }
  }, [isPlaying]);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
    if (videoRef.current) {
      if (isPlaying && videoRef.current.paused) {
        videoRef.current.play().catch((error) => {});
      } else {
        videoRef.current.pause();
      }
      setIsMuted(true);
    }
  };

  return (
    <div className={classNames(styles.videoPlayerWrapper)}>
      <div className={styles.videoPlayerContainer}>
        {/* {!isLoaded && <Skeleton style={{ width: "100%", height: "100%" }} />} */}
        <video
          id={"videoId-" + keyProps}
          key={"video-" + keyProps}
          playsInline
          loop={videoAutoPlay}
          muted={isMuted}
          autoPlay={false}
          ref={videoRef}
          className={styles.videoPlayer}
          onLoadedData={handleVideoLoad}
          controls={isPlaying}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          style={{
            // opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s",
            background: "#000101",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={url} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>

        <div
          className={classNames(
            styles.overlay_div,
            isPlaying ? styles.hide : styles.show
          )}
        ></div>
{/* 
        {!isPlaying && (
          <div className={styles.play_button}>
            <img src={PlayIcon} alt="playIcon" onClick={togglePlayPause} />
            <h2>Watch Video</h2>
          </div>
        )} */}
      </div>
    </div>
  );
}
