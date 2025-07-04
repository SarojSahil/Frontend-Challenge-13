import LiamNovakImg from "../assets/images/LiamNovak.png";
import SophiaMorettiImg from "../assets/images/SophiaMoretti.png";
import EthanRossiImg from "../assets/images/EthanRossi.png";
import IsabellaRicciImg from "../assets/images/IsabellaRicci.png";
import NoahContiImg from "../assets/images/NoahConti.png";
import GradientImg from "../assets/images/Gradient.svg";
const Members = () => {

  const data = [
    {
      id: 101,
      name: "Liam Novak",
      profile: "Software Engineer",
      image: LiamNovakImg,
      imageAlt: "Liam Novak Profile Picture",
      bgColorClass: "bg-purple"
    },
    {
      id: 102,
      name: "Sophia Moretti",
      profile: "Business Development Manager",
      image: SophiaMorettiImg,
      imageAlt: "Sophia Moretti Profile Picture",
      bgColorClass: "bg-pink"
    },
    {
      id: 103,
      name: "Ethan Rossi",
      profile: "Software Engineer",
      image: EthanRossiImg,
      imageAlt: "Ethan Rossi Profile Picture",
      bgColorClass: "bg-sky-blue"
    },
    {
      id: 104,
      name: "Isabella Ricci",
      profile: "UX Designer",
      image: IsabellaRicciImg,
      imageAlt: "Isabella Ricci Profile Picture",
      bgColorClass: "bg-wheat"
    },
    {
      id: 105,
      name: "Noah Conti",
      profile: "Content Creator",
      image: NoahContiImg,
      imageAlt: "Noah Conti Profile Picture",
      bgColorClass: "bg-sea-green"
    },
  ]

  return (
    <>
      {
        data.map(d => <Member data={d} key={d.id} />)
      }
    </>
  );
}

const Member = ({data}) => {
  return (
    <div className={`relative ${data.bgColorClass}`}>
      <img src={data.image} alt={data.imageAlt} className="w-full" />
      <h3 className="absolute left-4 bottom-10 text-label text-white z-20">{data.name}</h3>
      <p className="absolute left-4 bottom-4 font-light text-sm text-white z-20">{data.profile}</p>
      <img src={GradientImg} alt="Black Gradient" className="absolute w-full bottom-0 z-10" />
    </div>
  );
}

export default Members;