import loadAsyncImage from "@utils/loadAsynImage";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Save images in cache
 */
const cacheImage = new Map();

interface StatusFetchImageProps {
  LOADING: "LOADING";
  ERROR: "ERROR";
  COMPLETE: "COMPLETE";
}
const StatusFetchImage: StatusFetchImageProps = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  COMPLETE: "COMPLETE"
};

type StatusFetchImageTypes = keyof typeof StatusFetchImage;

const useFetchImage = (image: string) => {
  const cachedImage = cacheImage.get(image);
  const initialStatusLoadedImage = cachedImage
    ? StatusFetchImage.COMPLETE
    : StatusFetchImage.LOADING;
  const [status, setStatus] = useState<StatusFetchImageTypes>(
    initialStatusLoadedImage
  );
  const mounted = useRef(false);

  useEffect(() => {
    const loadImage = async () => {
      try {
        if (!image && status === StatusFetchImage.COMPLETE) return;
        const uriImage = await loadAsyncImage({ image });

        cacheImage.set(image, uriImage);
        setStatus(StatusFetchImage.COMPLETE);
      } catch {
        cacheImage.delete(image);
        setStatus(StatusFetchImage.ERROR);
      }
    };
    loadImage();

    return () => {
      mounted.current = false;
    };
  }, [image, status]);

  const onImageLoaded = useCallback(
    (callback: () => void) => {
      if (status === StatusFetchImage.COMPLETE) {
        callback();
      }
    },
    [status]
  );

  return {
    status,
    onImageLoaded,
    image: cachedImage
  };
};

export default useFetchImage;
