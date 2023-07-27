/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async rewrites() {
    return [
      {
        source: "/Admin",
        destination: "https://icict4sd.vercel.app/Admin",
      },
      {
        source: "/UserMessages",
        destination: "https://icict4sd.vercel.app/UserMessages",
      },
      {
        source: "/ConferenceSteeringCommittee",
        destination: "https://icict4sd.vercel.app/ConferenceSteeringCommittee",
      },
      {
        source: "/OrganizingCommittee",
        destination: "https://icict4sd.vercel.app/OrganizingCommittee",
      },
      {
        source: "/InternationalAdvisoryCommittee",
        destination: "https://icict4sd.vercel.app/InternationalAdvisoryCommittee",
      },
      {
        source: "/TechnicalCommittee",
        destination: "https://icict4sd.vercel.app/TechnicalCommittee",
      },
      {
        source: "/Webmaster",
        destination: "https://icict4sd.vercel.app/Webmaster",
      },
      {
        source: "/CallForPapers",
        destination: "https://icict4sd.vercel.app/CallForPapers",
      },
      {
        source: "/Scopes",
        destination: "https://icict4sd.vercel.app/Scopes",
      },
      {
        source: "/PaperSubmissionGuidelines",
        destination: "https://icict4sd.vercel.app/PaperSubmissionGuidelines",
      },
      {
        source: "/RegistrationFees",
        destination: "https://icict4sd.vercel.app/RegistrationFees",
      },
      {
        source: "/ImportantDate",
        destination: "https://icict4sd.vercel.app/ImportantDate",
      },
      {
        source: "/ImportantDate",
        destination: "https://icict4sd.vercel.app/ImportantDate",
      },
    ];
  },
};

module.exports = nextConfig;
