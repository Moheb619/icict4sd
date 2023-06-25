import styles from "./ImportantDates.module.scss";

const ImportantDates = () => {
  return (
    <section id="dates" className="p-14">
      <div className="container">
        <div className="text-center">
          <h2 className="text-4xl font-bold">IMPORTANT DATES</h2>
        </div>
        <div className="mt-5">
          <table className={`border-separate border border-slate-400 mx-auto text-[1.2rem] ${styles.important_dates_table}`}>
            <tbody>
              <tr className={`${styles.important_dates_table_tr}`}>
                <td>
                  Paper Submission Deadline <strong className="text-success">(Final)</strong>
                </td>
                <td>
                  <strong> 30 June, 2023</strong>
                </td>
              </tr>
              <tr className={`${styles.important_dates_table_tr}`}>
                <td>Notification of Acceptance</td>
                <td>
                  <strong> August 01, 2023</strong>
                </td>
              </tr>
              <tr className={`${styles.important_dates_table_tr}`}>
                <td>Camera Ready Submission Deadline</td>
                <td>
                  <strong> August 15, 2023</strong>
                </td>
              </tr>
              <tr className={`${styles.important_dates_table_tr}`}>
                <td>Author Registration Deadline</td>
                <td>
                  <strong> August 31, 2023</strong>
                </td>
              </tr>
              <tr className={`${styles.important_dates_table_tr}`}>
                <td>Date of the Conference</td>
                <td>
                  <strong>September 14-16, 2023</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
