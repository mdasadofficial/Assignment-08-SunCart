import Banner from "./components/Banner";
import PopularProducts from "./components/PopularProducts";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner />
      <PopularProducts/>
    </div>
  );
}
