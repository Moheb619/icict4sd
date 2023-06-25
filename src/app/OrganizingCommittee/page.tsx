import ImageCard from "../components/common/ImageCard/ImageCard";
import conferenceChair from "public/img/Committee/Brig Gen Md Mustafa Kamal.jpg";
import organizingChair from "public/img/Committee/nasir.jpg";
import memberSecretary from "public/img/Committee/Saiful Islam (1).jpg";
import jointSecretary from "public/img/Committee/Afrina Khatun.jpg";

const OrganizingCommiteeDetails = [
  { name: "Conference Chair", bio: "Brig Gen Md Mustafa Kamal, SGP Dean, FST, BUP", url: conferenceChair },
  { name: "Organizing Chair", bio: "Dr. Mohammaed Nasir Uddin, Associate Professor,Dept. of ICT,FST, BUP", url: organizingChair },
  { name: "Member Secretary", bio: "Saiful Islam, Assistant Professor,Dept. of ICT,FST, BUP", url: memberSecretary },
  { name: "Joint Secretary", bio: "Afrina Khatun, Lecturar, Dept. of ICT, FST, BUP", url: jointSecretary },
];
const OrganizingCommitee = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-12">
      <h1 className="text-2xl md:text-4xl font-bold">Organizing Committee</h1>
      <div className="flex flex-col my-5">
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={OrganizingCommiteeDetails[0].name} bio={OrganizingCommiteeDetails[0].bio} url={OrganizingCommiteeDetails[0].url} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={OrganizingCommiteeDetails[1].name} bio={OrganizingCommiteeDetails[1].bio} url={OrganizingCommiteeDetails[1].url} />
          </div>
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={OrganizingCommiteeDetails[2].name} bio={OrganizingCommiteeDetails[2].bio} url={OrganizingCommiteeDetails[2].url} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={OrganizingCommiteeDetails[3].name} bio={OrganizingCommiteeDetails[3].bio} url={OrganizingCommiteeDetails[3].url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommitee;
