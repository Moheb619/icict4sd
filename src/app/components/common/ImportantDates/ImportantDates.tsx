import styles from "./ImportantDates.module.scss";

const ImportantDates = () => {
  return (
    <section id="dates" className="p-4 md:p-14">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold">IMPORTANT DATES</h2>
        </div>
        <div className="mt-5">
          <table className={`border-separate border border-slate-400 mx-auto text-lg md:text-xl ${styles.important_dates_table}`}>
            <tbody>
              <tr className={`${styles.important_dates_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  Paper Submission Deadline <strong className="text-success">(Final)</strong>
                </td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <strong>7 July, 2023</strong>
                </td>
              </tr>
              <tr className={`${styles.important_dates_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">Notification of Acceptance</td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <strong>September 01, 2023</strong>
                </td>
              </tr>
              <tr className={`${styles.important_dates_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">Camera Ready Submission Deadline</td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <strong>September 07, 2023</strong>
                </td>
              </tr>
              <tr className={`${styles.important_dates_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">Author Registration Deadline</td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <strong>September 07, 2023</strong>
                </td>
              </tr>
              <tr className={`${styles.important_dates_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">Date of the Conference</td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <strong>September 21-23, 2023</strong>
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
