import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import anisha from "../images/avatar-anisha.png";
import ali from "../images/avatar-ali.png";
import Richard from "../images/avatar-richard.png";
import Shanai from "../images/avatar-shanai.png";

const testimonials = [
  {
    id: 1,
    image: anisha,
    name: "Anisha Li",
    reaction:
      "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    id: 2,
    image: ali,
    name: "Ali Bravo",
    reaction:
      "We have been able to cancel so many other subscriptions since using Manage.There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    id: 3,
    image: Richard,
    name: "Richard Watts",
    reaction:
      "We have been able to cancel so many other subscriptions since using Manage.There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    id: 4,
    image: Shanai,
    name: "Shanai Gough",
    reaction:
      "We have been able to cancel so many other subscriptions since using Manage.There is no more cross-channel confusion and everyone is much more focused.",
  },
];

const Testimonials = () => {
  return (
    <div>
      <p className="text-5xl font-semibold ml-auto mr-auto text-center mt-[40px]">
        What they've said!
      </p>
      <Swiper spaceBetween={30} slidesPerView={3}>
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-[#ffefeb] m-[20px] mt-[80px] pt-[20px] pb-[30px] pl-[40px] pr-[40px]  flex flex-col items-center ">
              <img
                className="relative top-[-50px] w-[60px]"
                src={testimonial.image}
                alt=""
              />

              <h3 className="relative top-[-30px]">{testimonial.name}</h3>
              <p>{testimonial.reaction}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mb-[150px]">
        <button className="bg-[#F25F3A] border-0 text-white font-bold py-3 px-6 rounded-full mt-6 ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
