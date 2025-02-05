import Filter from "./Filter";
import Card from "./Card";
import Link from "next/link";
const Places = () => {
  const placesCard = [
    {
      img: "/place1.png",
      country: "Maldives",
      text: "Hurawalhi Island",
      time: "7 Days Tour on 2 person",
      price: 620,
    },
    {
      img: "/place2.png",
      country: "Indonesia",
      text: "Bali Province",
      time: "4 days 2 person",
      price: 780,
    },
    {
      img: "/place3.png",
      country: "Spain",
      text: "Barcelona city beach",
      time: "4 days 4 person",
      price: 850,
    },
    {
      img: "/place4.png",
      country: "Maldives",
      text: "Hurawalhi Island",
      time: "7 Days Tour on 2 person",
      price: 620,
    },
    {
      img: "/place5.png",
      country: "Canada",
      text: "St. John's",
      time: "7 Days Tour on 2 person",
      price: 620,
    },
    {
      img: "/place6.png",
      country: "Maldives",
      text: "Machu Picchu",
      time: "7 Days Tour on 2 person",
      price: 820,
    },
    {
      img: "/place7.png",
      country: "French",
      text: "Bora Bora Island",
      time: "7 Days Tour on 2 person",
      price: 550,
    },
    {
      img: "/place8.png",
      country: "Australia",
      text: "Sydney Opera House",
      time: "7 Days Tour on 2 person",
      price: 310,
    },
  ];
  return (
    <div className="my-[20px] px-3" id="tour-packages">
      <div className="bg-[url('/plans.png')]">
        <h1 className="text-center  text-[54px] font-bold">
          The <span className="text-orange">best place for</span> vacation
        </h1>
        <Filter />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {placesCard.map((place, index) => (
          <Card
            key={index}
            img={place.img}
            country={place.country}
            text={place.text}
            time={place.time}
            price={place.price}
            color={place.color}
          />
        ))}
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
