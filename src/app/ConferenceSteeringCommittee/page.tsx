import cheifPatron from "public/img/Committee/vc.jpeg";
import patron from "public/img/Committee/provc.jpg";
import conferenceChair from "public/img/Committee/fstDean.jpeg";
import ImageCard from "../components/common/ImageCard/ImageCard";

const ConferenceSteeringCommitteeDetails = [
  { name: "Cheif Patron", bio: "Maj Gen Md Mahbub-ul Alam, ndc, afwc, psc, MPhil, PhD Vice Chancellor, BUP", url: cheifPatron },
  { name: "Patron", bio: "Professor Dr. Khondoker Mokaddem Hossain Pro-Vice Chancellor, BUP", url: patron },
  { name: "Conference Chair", bio: "Brig Gen Md Mustafa Kamal, SGP Dean, FST, BUP", url: conferenceChair },
];
const ConferenceSteeringCommittee = () => {
  return (
    <div className="p-14 flex flex-col items-center">
      <h1 className="text-4xl font-bold">Conference Steering Committee</h1>
      <div className="flex my-10">
        {ConferenceSteeringCommitteeDetails.map((member, index) => {
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

export default ConferenceSteeringCommittee;
