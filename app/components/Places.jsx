import Filter from "./Filter";
import Card from "./Card";
import Link from "next/link";
const Places = () => {
  return (
    <div className="my-[20px] px-3" id="tour-packages">
      <div className="bg-[url('/plans.png')]">
        <h1 className="text-center  text-[54px] font-bold">
          The <span className="text-orange">best place for</span> vacation
        </h1>
        <Filter />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="text-center mt-3">
        <Link href={"/TourDestinations"} className="btn ">
          Tour Destinations
        </Link>
      </div>
    </div>
  );
};

export default Places;
