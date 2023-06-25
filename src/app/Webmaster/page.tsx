import bannaSir from "public/img/web/banna.jpg";
import nahianSir from "public/img/web/nahian.jpeg";
import tapuSir from "public/img/web/tapu.png";
import aurnaApu from "public/img/web/aurna.jpg";
import farhad from "public/img/web/farhad.jpg";
import mohebBoss from "public/img/web/moheb.jpg";
import ImageCard from "../components/common/ImageCard/ImageCard";

const webmasterDetails = [
  { name: "Md. Hasan Al Banna", bio: "", url: bannaSir },
  { name: "Md. Jaber Al Nahian", bio: "", url: nahianSir },
  { name: "Tapotosh Ghosh", bio: "", url: tapuSir },
  { name: "Nahid Ferdous Aurna", bio: "", url: aurnaApu },
  { name: "Farhad Jaman", bio: "", url: farhad },
  { name: "Saeed Hossain Moheb", bio: "", url: mohebBoss },
];

const Webmaster = () => {
  return (
    <div className="flex flex-col items-center p-12">
      <h1 className="text-4xl font-bold mb-10">Webmaster</h1>
      <div className="flex flex-wrap">
        {webmasterDetails.map((member, index) => {
          return (
            <div key={member.name} className="mx-5">
              <ImageCard name={member.name} bio={member.bio} url={member.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Webmaster;
