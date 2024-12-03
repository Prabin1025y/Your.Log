import Intro from "@/components/Landing/Intro";
import PostsContainer from "@/components/Landing/PostsContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Intro />
      <PostsContainer />
    </div>
  );
}
