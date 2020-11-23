import { SyntheticEvent } from "react";

export default function loadAsyncImage({ image }: { image: string }) {
  const srcImage: HTMLImageElement = new Image();

  return new Promise<string>((resolve, reject) => {
    const handlerLoad = () => {
      resolve(srcImage.src);
    };
    const handlerError = () => {
      srcImage.onload = null;
      srcImage.onerror = null;
      srcImage.onabort = null;
      reject();
    };
    srcImage.onload = handlerLoad;
    srcImage.onerror = handlerError;
    srcImage.onabort = handlerError;
    srcImage.src = image;
  });
}
