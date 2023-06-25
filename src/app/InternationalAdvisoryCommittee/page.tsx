import styles from "./InternationalAdvisoryCommittee.module.scss";

const InternationalAdvisoryCommittee = () => {
  return (
    <div className="flex flex-col items-center p-12">
      <h2 className="text-4xl font-bold">International Advisory Committe</h2>
      <table className={`international_advisory_table border-separate border border-slate-400 mx-auto text-[1.2rem] my-5 ${styles.international_advisory_table}`}>
        <tbody>
          <tr className="bg-black text-white">
            <th>Serial Number</th>
            <th>Details</th>
          </tr>
          <tr className={`${styles.international_advisory_table_row}`}>
            <td>1</td>
            <td>
              Prof. Ranjan Gangopadhyay, PhD
              <br />
              Dept of Electronics and Communication Engineering
              <br />
              LNM Institute of Information Technology
              <br />
              Jaipur, India
            </td>
          </tr>
          <tr className={`${styles.international_advisory_table_row}`}>
            <td>2</td>
            <td>
              Prof. Hairul Azhar Bin Abdul Rashid, PhD
              <br />
              Vice President, RDI
              <br />
              Multimedia University
              <br />
              Selangor, Malaysia
            </td>
          </tr>
          <tr className={`${styles.international_advisory_table_row}`}>
            <td>3</td>
            <td>
              Prof. Mirza Salim Beg, PhD
              <br />
              Dept of Electronics Engineering
              <br />
              Aligarh Muslim University
              <br />
              Aligarh, India
            </td>
          </tr>
          <tr className={`${styles.international_advisory_table_row}`}>
            <td>4</td>
            <td>
              Shafi U. Bhuiyan, MBBS, MPH, MBA, PhD, MJF
              <br />
              Founding Academic Director ITMD
              <br />
              Ryerson University
              <br />
              Toronto, Canada
            </td>
          </tr>
          <tr className={`${styles.international_advisory_table_row}`}>
            <td>5</td>
            <td>
              Asst. Prof. Ahmed Imran, PhD
              <br />
              Information, Technology (IT) & Systems
              <br />
              University of Canberra
              <br />
              Canberra, Australia
            </td>
          </tr>
          <tr className={`${styles.international_advisory_table_row}`}>
            <td>6</td>
            <td>
              Dr. M. Ameer Ali (CSE, BUET; PhD, Australia)
              <br />
              Cyber security Analyst
              <br />
              UL, Melbourne, Australia
            </td>
          </tr>
          <tr className={`${styles.international_advisory_table_row}`}>
            <td>7</td>
            <td>
              Dr. Sadid Hasan
              <br />
              AI Lead at Microsoft
              <br />
              Cambridge, MA, USA
            </td>
          </tr>
          <tr className={`${styles.international_advisory_table_row}`}>
            <td>8</td>
            <td>
              Dr. Mufti Mahmud
              <br />
              Associate Professor
              <br />
              Department of Computer Science
              <br />
              Nottingham Trent University, UK
            </td>
          </tr>
          <tr className={`${styles.international_advisory_table_row}`}>
            <td>9</td>
            <td>
              Dr M Hasan Shaheed, Phd
              <br />
              School of Engineering and Materials Science
              <br />
              Queen Mary University of London
              <br />
              London, UK
            </td>
          </tr>
          <tr className={`${styles.international_advisory_table_row}`}>
            <td>10</td>
            <td>
              Professor Mike Hinchey, PhD
              <br />
              Software Engineering
              <br />
              University of Limerick
              <br />
              Ireland
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InternationalAdvisoryCommittee;
