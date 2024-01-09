import ListVideoByCategory from "@/components/ListVideoByCategory";
import MobileSelectCategory from "../../../components/MobileSelectCategory";

export default function Home({ params }) {
  const q = params.q;
  return (
    <>
      <MobileSelectCategory />
      <ListVideoByCategory q={q} />
    </>
  );
}
