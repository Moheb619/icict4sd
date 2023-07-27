import styles from "./NationalAdvisoryCommittee.module.scss";

const NationalAdvisoryCommitteList = [
  "Dr. Satya Prasad Majumder, VC, BUET",
  "Dr. Md. Nurunnabi Mollah, Professor, EEE, KUET",
  "Dr. Md. Mostofa Akbar, CSE, BUET",
  "Dr. Md. Sazzad Hossain, Professor, CSE, ULAB, Member (UGC)",
  "Dr. A K M Nazrul Islam, Professor, EECE, MIST",
  "Dr. Md. Mahbubur Rahman, Professor, CSE, MIST",
  "Dr. Md. Abdur Rahman, Professor, EEE, AIUB",
  "Dr. M. Shamim Kaiser, Professor, IIT, JU",
  "Dr. Mohammad Abu Yousuf, Professor, IIT, JU",
  "Dr. M.M.A. Hashem, Professor, CSE, KUET",
  "Dr. Tabin Hasan, Professor, CS, AIUB",
  "Dr. Mohammad Kaykobad,Distinguished Professor Department of CSE, Brac University",
  "Engr. Md. Nurul Huda, President, Institution of Engineers, Bangladesh (IEB)",
  "Md. Shamsul Arefin, Secretary, ICT Division",
  "Ziaul Hasan NDC, Secretary, Ministry of Science & Technology",
  "Dr. Abdus Samad, Professor, EECE, MIST",
  "Dr. Risala Tasin Khan Professor, IIT, JU",
  "Dr. Samia Subrina Professor Department of Electrical and Electronic Engineering, BUET",
  "Prof. Dr. Dip Nandi, Associate Dean, Faculty of Science and Technology, American International University-Bangladesh (AIUB)",
];

const NationalAdvisoryCommittee = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-12">
      <h2 className="text-2xl md:text-4xl font-bold">National Advisory Committee</h2>
      <div className="overflow-x-auto w-full">
        <table className={`national_advisory_table border-separate border border-slate-400 mx-auto text-base md:text-lg my-5 ${styles.national_advisory_table}`}>
          <tbody>
            <tr className="bg-black text-white">
              <th>Serial Number</th>
              <th>Details</th>
            </tr>
            {NationalAdvisoryCommitteList.map((member, index) => (
              <tr key={index} className={`${styles.national_advisory_table_row}`}>
                <td>{index + 1}</td>
                <td>{member}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NationalAdvisoryCommittee;
