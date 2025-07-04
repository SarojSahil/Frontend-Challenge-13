import Members from "./Members";
import ArrowTopRightImg from "../assets/images/ArrowTopRight.svg";

const TeamSection = () => {

  return (
    <section className="bg-light-gray bg-decoration bg-no-repeat rounded-2xl overflow-clip grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <div className="p-8 mb-14 md:col-span-3 lg:col-span-2">
        <h2 className="text-blue font-medium">Our team</h2>
        <h1 className="text-heading text-black">Meet the brain</h1>
        <p className="text-dark-gray max-w-md">We are proud to have them as part of our community and look forward to continuing to push the boundaries of what's possible in the world of digital art.</p>
      </div>
      <Members />
      <div className="aspect-square relative md:col-[1/2] md:row-[3/4] lg:col-[1/2] lg:row-[2/3]">
        <a href="" className="text-dark-gray absolute left-8 bottom-8">
          See all members
          <img src={ArrowTopRightImg} alt="Top Right Arrow" className="inline-block"/>
        </a>
      </div>
    </section>
  );
}

export default TeamSection;