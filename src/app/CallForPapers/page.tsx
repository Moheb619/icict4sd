import Link from "next/link";
import React from "react";

const CallForPapers = () => {
  return (
    <div className="p-14">
      <h1 className="text-4xl font-bold text-center">Call For Papers</h1>
      <br />
      <br />
      <h3 className="text-3xl text-green-700">
        Download the call for papers flyer.{"("}
        <Link href={"/pdf/Flyer 2023.pdf"} prefetch={false}>
          <span className="text-red-500 hover:text-red-800">Here</span>
        </Link>
        {")"}
      </h3>
      <p className="mt-6">
        Bangladesh University of Professionals (BUP) is a unique public university administered by the Armed Forces upholding the motto &quot;Excellence Through Knowledge&quot;. BUP will host the 2nd
        International Conference on Information and Communication Technology for Sustainable Development (ICICT4SD) on 14-16 September, 2023 at Bangladesh University of Professionals, Dhaka to attain
        the vision of Digital Bangladesh. In order to fulfil the aspiration of Bangladesh Government of achieving Sustainable Development Goals, the theme of the conference is “Shaping a Sustainable
        Future through Advancement in Information and Communication Technology”. This conference will be a platform for creating and sharing ideas among engineers, researchers, scientists,
        industrialists and students. All accepted papers are expected to be published in IEEE Xplore and indexed by EI.
      </p>
    </div>
  );
};

export default CallForPapers;
