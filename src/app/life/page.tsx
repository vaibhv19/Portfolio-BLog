import type { Metadata } from "next";
import LifeApp from "@/life";

export const metadata: Metadata = {
  title: "Just Me | Vaibhav Gupta",
  description: "A personal digital scrapbook, visual catalog, and quiet thoughts.",
};

export default function LifePage() {
  return <LifeApp />;
}
