import { Metadata } from "next";
import Clock from "./clock";

export const metadata: Metadata = {
  title: "Clocks",
  description: "Digital clock view",
};

export default function Page() {
    return (
        <Clock />
    )
}