import { createImageUrlBuilder } from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image | any) => {
  if (!source || !source.asset) {
    const fallbackObj = {
      width: () => fallbackObj,
      height: () => fallbackObj,
      auto: () => fallbackObj,
      fit: () => fallbackObj,
      url: () => "/logo-map-official.png",
    };
    return fallbackObj as any;
  }
  return imageBuilder?.image(source).auto("format").fit("max");
};
