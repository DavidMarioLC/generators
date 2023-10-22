import PageFontsizes from "@/components/PageFontsizes";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Font Size Generator",
  description: "Generador de tamaños tipográficos",
  openGraph: {
    title: "Font Size Generator",
    description: "Generador de tamaños tipográficos",
  },
};

export default function Page() {
  return <PageFontsizes />;
}
