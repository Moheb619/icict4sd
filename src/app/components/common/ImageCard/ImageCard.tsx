import Image, { StaticImageData } from "next/image";

interface ImageCardProps {
  name: string;
  bio: string;
  url: StaticImageData;
}

const ImageCard: React.FC<ImageCardProps> = ({ name, bio, url }) => {
  return (
    <div className="w-64 md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
      <Image src={url} alt="img" title="img" className="w-full h-[20rem] object-cover rounded-t-lg" id="whoobe-ixxe5" />
      <div className="w-full p-4 justify-start flex flex-col">
        {name === "David Brown" ? (
          <>
            <h4 className={`text-2xl text-center text-red-600 ${name && bio ? "border-b-2" : ""}`}>{name}</h4>
            <br />
            <br />
          </>
        ) : (
          <h4 className={`text-2xl text-center text-red-600 ${name && bio ? "border-b-2" : ""}`}>{name}</h4>
        )}
        <p className="my-4 text-center">{bio ? bio : name ? "" : "N/A"}</p>
      </div>
    </div>
  );
};

export default ImageCard;
