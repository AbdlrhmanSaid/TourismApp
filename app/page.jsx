import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Places from "./components/Places";
import Chooseus from "./components/Chooseus";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import Blog from "./components/Blog";
import TopBtn from "./components/TopBtn";
export default function Home() {
  return (
    <>
      <Hero />
      <Aboutus />
      <Places />
      <Chooseus />
      <Gallery />
      <Review />
      <Blog />
      <img src="/sponsors.png" alt="sponsors" className="m-auto my-[30px]" />
    </>
  );
}
