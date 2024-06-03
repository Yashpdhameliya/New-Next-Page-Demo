import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const addTransformParam = (src: string) => {
  return src && src.indexOf("?") === -1 ? "?t=w" : "&t=w";
};

const contentHubSizes = [576, 992, 1200, 1920, 2880];
const deviceSizes = [576, 992, 1440, 1920, 2880];

interface LazyImagePropType {
  image?: any;
  priority?: boolean;
  sizes?: string;
  className?: string;
  width?: number;
  height?: number;
  disableSkeleton?: boolean;
  loading?: "lazy" | "eager" | undefined;
}

const LazyImage: React.FC<LazyImagePropType> = ({
  image,
  priority,
  sizes,
  width,
  height,
  loading = "lazy",
  className,
  disableSkeleton,
}) => {
  const { src, alt } = image;
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={className} style={{ position: "relative", width, height }}>
      {!isLoaded && !disableSkeleton && (
        <Skeleton
          style={{ width: "100%", height: "100%" }}
          className={className}
          baseColor="#EEF1F5"
          highlightColor="#ffffff"
        />
      )}

      {image ? (
        <img
          alt={alt}
          width={width}
          height={height}
          onLoad={handleImageLoad}
          loading={loading}
          src={`${src}${addTransformParam(src)}${
            deviceSizes[deviceSizes.length - 1]
          }`}
          // srcSet={deviceSizes
          //   .map(
          //     (deviceSize, index) =>
          //       `${src}${addTransformParam(src)}${
          //         contentHubSizes[index]
          //       } ${deviceSize}w`
          //   )
          //   .join(", ")}
          sizes={sizes ? sizes : `(max-width: 768px) 100vw, 50vw`}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      ) : null}
    </div>
  );
};

export default LazyImage;
