import React, { memo } from "react";
import { default as ReactLazyLoad } from "react-lazyload";

interface LazyLoadProps {
  children?: React.ReactNode;
  offset?: number;
  height?: number;
  id: string;
  once?: boolean;
}

const LazyLoad = ({
  children,
  offset = 200,
  height = 500,
  id,
  once = true,
}: LazyLoadProps) => {
  return (
    <ReactLazyLoad
      offset={offset}
      height={height}
      once={once}
      {...(id
        ? {
            placeholder: <div id={id} style={{ height: height }} />,
          }
        : {})}
    >
      {children}
    </ReactLazyLoad>
  );
};

export default memo(LazyLoad);
