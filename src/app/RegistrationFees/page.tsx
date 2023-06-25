import styles from "./RegistrationFees.module.scss";

const RegistrationFees = () => {
  return (
    <div className="p-14">
      <h1 className="text-4xl font-bold mb-6 text-center">Registration Fees</h1>
      <table className={`international_advisory_table border-separate border border-slate-400 mx-auto text-[1.2rem] my-5 ${styles.registration_fees_table}`}>
        <tbody>
          <tr className="bg-black text-white">
            <th>Registration Category</th>
            <th>IEEE Members</th>
            <th>Non-IEEE Members</th>
          </tr>
          <tr className={`${styles.registration_fees_table_row}`}>
            <td>Local Students- Author* (In BDT)</td>
            <td>5000</td>
            <td>7000</td>
          </tr>
          <tr className={`${styles.registration_fees_table_row}`}>
            <td>Local Students- Participant (In BDT)</td>
            <td>2500</td>
            <td>3500</td>
          </tr>
          <tr className={`${styles.registration_fees_table_row}`}>
            <td>Local Authors* (In BDT)</td>
            <td>8000</td>
            <td>9500</td>
          </tr>
          <tr className={`${styles.registration_fees_table_row}`}>
            <td>Local Participants (in BDT)</td>
            <td>4000</td>
            <td>4750</td>
          </tr>
          <tr className={`${styles.registration_fees_table_row}`}>
            <td>International Students- Author* (In USD)</td>
            <td>125</td>
            <td>150</td>
          </tr>
          <tr className={`${styles.registration_fees_table_row}`}>
            <td>International Students- Participants (In USD)</td>
            <td>65</td>
            <td>75</td>
          </tr>
          <tr className={`${styles.registration_fees_table_row}`}>
            <td>International Authors* (In USD)</td>
            <td>200</td>
            <td>250</td>
          </tr>
          <tr className={`${styles.registration_fees_table_row}`}>
            <td>International Participants (in USD)</td>
            <td>100</td>
            <td>125</td>
          </tr>
          <tr className={`${styles.registration_fees_table_row}`}>
            <td>Local IEEE Life Member (In BDT)</td>
            <td>5000</td>
            <td>-</td>
          </tr>
          <tr className={`${styles.registration_fees_table_row}`}>
            <td>International IEEE Life Member (In USD)</td>
            <td>125</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationFees;
