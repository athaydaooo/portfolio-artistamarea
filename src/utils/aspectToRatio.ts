import AspectRatio from "@/types/aspect-ratio.ts";

export default function aspectToRatio(aspectRatio: AspectRatio): number {
  const [numerator, denominator] = aspectRatio.split("/").map(Number);

  return numerator / denominator;
}
