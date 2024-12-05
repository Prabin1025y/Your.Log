import Intro from "@/components/Landing/Intro";
import PostsContainer from "@/components/Landing/PostsContainer";

interface HomeProps {
  searchParams: {
    page: string;
    cat: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const page = parseInt(params.page) || 1;
  const { cat } = await searchParams;
  return (
    <div>
      <Intro />
      <PostsContainer page={page} cat={cat} />
    </div>
  );
}
