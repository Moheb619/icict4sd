import ImageCard from "../../common/ImageCard/ImageCard";
import DrSadidHasan from "public/img/keynote/Dr. Sadid Hasan.jpg";
import DrSatyaPrasadMajumder from "public/img/keynote/Dr. Satya Prasad Majumder.jpg";
import dummyImages from "public/img/dummyImages/dummy-profile-pic-male.jpg";
const keynoteSpeakers = [
  { name: "Dr. Sadid Hasan", bio: "AI Lead at Microsoft Cambridge, MA, USA", url: DrSadidHasan },
  { name: "Dr. Satya Prasad Majumder", bio: "VC, BUET", url: DrSatyaPrasadMajumder },
];

const EventSpeakers = () => {
  return (
    <section id="speakers" className="flex items-center flex-col p-14">
      <h2 className="text-4xl font-bold text-center my-2">Event Speakers</h2>
      <div>
        <h3 className="text-3xl text-center my-2">Keynote Speakers</h3>
        <div className="my-5 flex">
          {keynoteSpeakers.map((speaker, index) => {
            return (
              <div key={speaker.name} className="mx-5">
                <ImageCard name={speaker.name} bio={speaker.bio} url={speaker.url} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-3xl text-center my-2">Speakers</h3>
        <div className="my-5 flex">
          <div className="mx-5">
            <ImageCard name={""} bio={""} url={dummyImages} />
          </div>
          <div className="mx-5">
            <ImageCard name={""} bio={""} url={dummyImages} />
          </div>
        </div>
        <p className="text-center text-[#9195a2] italic text-[1.2rem]">Yet To Be Announced</p>
      </div>
    </section>
  );
};

export default EventSpeakers;
