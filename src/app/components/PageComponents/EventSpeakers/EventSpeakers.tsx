import ImageCard from "../../common/ImageCard/ImageCard";
import DavidBrown from "public/img/keynote/David Brown.jpg";
import KamalZuhairiBinZamli from "public/img/keynote/Kamal Zuhairi Bin Zamli.jpg";
import LindaDaniela from "public/img/keynote/Linda Daniela.jpg";
import DrSatyaPrasadMajumder from "public/img/keynote/Dr. Satya Prasad Majumder.jpg";
import ProfJahangirHossain from "public/img/keynote/Prof Jahangir Hossain.jpg";
import DrShahjahanMahmud from "public/img/speakers/Dr Shahjahan Mahmud.jpg";
import YasirAzman from "public/img/speakers/Yasir Azman.jpg";
import dummyImages from "public/img/dummyImages/dummy-profile-pic-male.jpg";
const keynoteSpeakers = [
  { name: "Linda Daniela", bio: "Dean, Faculty of Education, Psychology and Art University of Latvia", url: LindaDaniela },
  { name: "Professor Ts. Dr. Kamal Zuhairi Bin Zamli", bio: "Deputy Vice-Chancellor (Research & Innovation), University of Malaysia Pahang", url: KamalZuhairiBinZamli },
  { name: "David Brown", bio: "Professor in Interactive Systems for Social Inclusion, School of Science & Technology, Nottingham Trent University", url: DavidBrown },
  { name: "Dr. Satya Prasad Majumder", bio: "VC, BUET", url: DrSatyaPrasadMajumder },
  { name: "Prof. Jahangir Hossain", bio: "Professor School of Electrical and Data Engineering", url: ProfJahangirHossain },
];
const invitedSpeakers = [
  { name: "Dr. Shahjahan Mahmud", bio: "Chairman, BCSCL", url: DrShahjahanMahmud },
  { name: "Yasir Azman", bio: "CEO, GrameenPhone", url: YasirAzman },
];

const EventSpeakers = () => {
  return (
    <section id="speakers" className="flex items-center flex-col p-4 md:p-14">
      <h2 className="text-2xl md:text-4xl font-bold text-center my-2">Event Speakers</h2>
      <div>
        <h3 className="text-xl md:text-3xl text-center my-2">Keynote Speakers</h3>
        <div className="my-5 flex flex-wrap justify-center">
          {keynoteSpeakers.map((speaker, index) => {
            return (
              <div key={speaker.name} className="mx-2 md:mx-5 my-2 md:my-3">
                <ImageCard title={"keynote"} name={speaker.name} bio={speaker.bio} url={speaker.url} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-xl md:text-3xl text-center my-2">Invited Speakers</h3>
        <div className="my-5 flex flex-wrap justify-center">
          {invitedSpeakers.map((speaker, index) => {
            return (
              <div key={index} className="mx-2 md:mx-5 my-2 md:my-3">
                <ImageCard title={"speaker"} name={speaker.name} bio={speaker.bio} url={speaker.url} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventSpeakers;
