import type { Metadata } from "next";
import LifeApp from "@/life";

export const metadata: Metadata = {
  title: "Vaibhav Gupta | Life",
  description: "A scrapbook, coded instead — visual catalog, highlights, and quiet thoughts.",
};

export default function LifePage() {
  return <LifeApp />;
}
