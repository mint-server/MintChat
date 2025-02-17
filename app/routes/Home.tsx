import type { Route } from "./+types/Home";
import MainLayout from "~/layouts/MainLayout";
import ChannelSideBar from "~/features/ChannelList";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "MintChat" },
    { name: "description", content: "IRC chat system for instant messaging" },
  ];
}

const Home = () => {
  return (
    <MainLayout leftSidebar={<ChannelSideBar />} rightSidebar={<div>Right</div>}>
      <div>Center</div>
    </ MainLayout>
  );
}

export default Home;