// components/loaderControl.ts
import { useLoader } from "./LoaderContext";

let showLoader: (show: boolean) => void = () => {};

export const initLoader = (loaderFn: typeof showLoader) => {
  showLoader = loaderFn;
};

export { showLoader };
