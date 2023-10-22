import PageSpaces from "@/components/PageSpaces";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spaces Generator",
  description: "Generador de Margins and Paddings",
  openGraph: {
    title: "Spaces Generator",
    description: "Generador de Margins and Paddings",
  },
};

export default function Page() {
  return <PageSpaces />;
}
