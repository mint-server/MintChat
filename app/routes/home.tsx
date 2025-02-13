import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "MintChat" },
    { name: "description", content: "IRC chat system for instant messaging" },
  ];
}

export default function Home() {
  return <div> Hello World</div>;
}