import TestimonialCard from "./TestimonialCard";
import Link from "next/link";

const Review = () => {
  return (
    <div className="p-6">
      <div className="text-center mb-3">
        <h1 className="text-4xl font-bold ">
          Contact us to review{" "}
          <span className="text-orange"> your experience</span> with us
        </h1>
        <p className="text-black">
          Give us feedback and let us know what experiences you had while on
          vacation with us
        </p>
      </div>
      <div className="reviews flex justify-evenly flex-col md:flex-row items-center gap-3">
        <TestimonialCard
          name={"Benjamin Robert"}
          comment={
            "Wow, what a fun vacation withOelinken, guided by professionalpeople"
          }
          rating={80000}
        />
        <TestimonialCard
          name={"Benjamin Robert"}
          comment={
            "Wow, what a fun vacation withOelinken, guided by professionalpeople"
          }
          rating={80000}
        />
        <TestimonialCard
          name={"Benjamin Robert"}
          comment={
            "Wow, what a fun vacation withOelinken, guided by professionalpeople"
          }
          rating={80000}
        />
        <TestimonialCard
          name={"Benjamin Robert"}
          comment={
            "Wow, what a fun vacation withOelinken, guided by professionalpeople"
          }
          rating={80000}
        />
      </div>
      <div className="text-center mt-6">
        <Link href={"/Reviews"} className="btn ">
          View All
        </Link>
      </div>
    </div>
  );
};

export default Review;
