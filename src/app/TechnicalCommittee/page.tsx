import chair from "public/img/Committee/taher Sir.jpg";
import coChair from "public/img/Committee/salim Sir.jpg";
import coChair2 from "public/img/dummyImages/dummy-profile-pic-male.jpg";
import secretary from "public/img/Committee/maynul sir.jpg";
import jointSecretary from "public/img/Committee/nahian sir.jpg";
import jointSecretary2 from "public/img/Committee/prottasa sir.jpg";
import ImageCard from "../components/common/ImageCard/ImageCard";
const TechnicalCommitteeDetails = [
  { name: "Chair", bio: "Dr. Kazi Abu Taher, Professor, ICT, BUP", url: chair },
  { name: "Co-Chair", bio: "Dr. S MSalim Reza, Asst. Professor, ICT, BUP", url: coChair },
  { name: "Co-Chair", bio: "Dr. Md. Saiful Islam, Director, IICT, BUET", url: coChair2 },
  { name: "Secretary", bio: "Md. Maynul Islam, Assistant Professor, ICT, BUP", url: secretary },
  { name: "Joint-Secretary", bio: "Jaber Al Nahian, Dept. of ICT Lecturar, ICT, BUP", url: jointSecretary },
  { name: "Joint-Secretary", bio: "Md. Sazzadul Islam Prottasha, Lecturar, ICT, BUP", url: jointSecretary2 },
];
const TechnicalCommittee = () => {
  return (
    <div className="flex flex-col items-center p-12">
      <h1 className="text-4xl font-bold">Technical Committee</h1>
      <div className="flex flex-col my-5">
        <div className="flex my-5 mx-auto">
          <div className="mx-5">
            <ImageCard name={TechnicalCommitteeDetails[0].name} bio={TechnicalCommitteeDetails[0].bio} url={TechnicalCommitteeDetails[0].url} />
          </div>
        </div>
        <div className="flex my-5 mx-auto">
          <div className="mx-5">
            <ImageCard name={TechnicalCommitteeDetails[1].name} bio={TechnicalCommitteeDetails[1].bio} url={TechnicalCommitteeDetails[1].url} />
          </div>
          <div className="mx-5">
            <ImageCard name={TechnicalCommitteeDetails[2].name} bio={TechnicalCommitteeDetails[2].bio} url={TechnicalCommitteeDetails[2].url} />
          </div>
        </div>
        <div className="flex my-5 mx-auto">
          <div className="mx-5">
            <ImageCard name={TechnicalCommitteeDetails[3].name} bio={TechnicalCommitteeDetails[3].bio} url={TechnicalCommitteeDetails[3].url} />
          </div>
          <div className="mx-5">
            <ImageCard name={TechnicalCommitteeDetails[4].name} bio={TechnicalCommitteeDetails[4].bio} url={TechnicalCommitteeDetails[4].url} />
          </div>
          <div className="mx-5">
            <ImageCard name={TechnicalCommitteeDetails[5].name} bio={TechnicalCommitteeDetails[5].bio} url={TechnicalCommitteeDetails[5].url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalCommittee;
