import React from "react";

const abouts = [
  {
    index: 1,
    heading: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    index: 2,
    heading: "Advanced built-in reports",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    index: 3,
    heading: "Everything you need in one place",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
];

const About = () => {
  return (
    <div className="container mx-auto flex justify-between">
      <div className="flex-1/2 basis-[530px] ">
        <h2 className="text-5xl font-semibold">
          {" "}
          What’s different about Manage?
        </h2>
        <p className="leading-6">
          Manage provides all the functionality your <br />
          team needs, without the complexity. Our <br /> software is tailor-made
          for modern digital <br />
          product teams.
        </p>
      </div>
      <div className="flex-1/2 ml-28 basis-[530px]">
        {abouts.map((about) => (
          <div key={about.index} className="mb-8">
            <div className="flex items-center">
              <div className="bg-[#F25F3A] border-0 text-white font-bold py-3 px-8 rounded-full">
                {about.index}
              </div>

              <div className="ml-5 font-semibold">{about.heading}</div>
            </div>
            <div className="ml-24 leading-6">{about.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
