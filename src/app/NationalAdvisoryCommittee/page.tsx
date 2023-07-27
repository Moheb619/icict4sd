import styles from "./NationalAdvisoryCommittee.module.scss";

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
            <tr className={`${styles.national_advisory_table_row}`}>
              <td>1</td>
              <td>
                Prof. Dr. Sazzad Hosssain
                <br />
                Member, UGC, Bangladesh
              </td>
            </tr>
            <tr className={`${styles.national_advisory_table_row}`}>
              <td>2</td>
              <td>
                Dr. Risala Tasin Khan
                <br />
                Professor, Institute of Information Technology
              </td>
            </tr>
            <tr className={`${styles.national_advisory_table_row}`}>
              <td>3</td>
              <td>
                Dr. Samia Subrina,Professor
                <br />
                Department of Electrical and Electronic Engineering, BUET
              </td>
            </tr>
            <tr className={`${styles.national_advisory_table_row}`}>
              <td>4</td>
              <td>
                Mohammad Kaykobad, PhD
                <br />
                Distinguished Professor
                <br />
                Department of CSE, Brac University
              </td>
            </tr>
            <tr className={`${styles.national_advisory_table_row}`}>
              <td>5</td>
              <td>
                Dr. Pran Kanai Saha,Professor
                <br />
                Department of Electrical and Electronic Engineering, BUET
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NationalAdvisoryCommittee;
