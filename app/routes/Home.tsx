import type { Route } from "./+types/Home";
import ChannelSideBar from "~/features/ChannelList";
import HomeLayout from "~/layouts/HomeLayout";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "MintChat" },
    { name: "description", content: "IRC chat system for instant messaging" },
  ];
}

const Home = () => {
  return (
    <HomeLayout leftSidebar={<ChannelSideBar />} rightSidebar={<div>Right</div>}>
      <div>Center</div>
    </ HomeLayout>
  );
}

export default Home;