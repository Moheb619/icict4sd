import React from "react";

const EventSchedule = () => {
  return (
    <section id="schedule" className="p-14">
      <div className="container">
        <div className="section-header flex items-center flex-col">
          <h2 className="text-4xl font-bold text-center my-2">EVENT SCHEDULE</h2>
          <p className="text-3xl text-center  my-2">Conference Schedule (Day-1)</p>
          <p className="my-2 text-center">The schedule is given in Bangladesh local time (GMT +6)</p>
          <table className="table table-bordered table-striped  my-2 md:w-[90%]">
            <tbody className="px-10">
              <tr className="bg-gray-400 text-white">
                <th>SL No.</th>
                <th>Events</th>
                <th>Duration</th>
                <th>Running Time</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Registration Booth Opening</td>
                <td>1 hr</td>
                <td>0800 hrs</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Opening Ceremony</td>
                <td>1 hr 30 min</td>
                <td>0900 - 1030 hrs</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Tea-break : Day 01</td>
                <td>30 mins</td>
                <td>1030 - 1100 hrs</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Opening of Industrial Exhibition</td>
                <td>1 hr</td>
                <td>1100 - 1200 hrs</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Keynote Session 01</td>
                <td>1 hr</td>
                <td>1200 - 1300 hrs</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Lunch</td>
                <td>1 hr</td>
                <td>1300 - 1400 hrs</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Slot for IEEE Student Branch</td>
                <td>1 hr</td>
                <td>1400 - 1500 hrs</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <p className="text-3xl text-center  my-2">Conference Schedule (Day-2)</p>

          <p className="my-2 text-center">The schedule is given in Bangladesh local time (GMT +6)</p>
          <table className="table table-bordered table-striped my-2 md:w-[90%]">
            <tbody>
              <tr className="bg-gray-400 text-white">
                <th>SL No.</th>
                <th>Events</th>
                <th>Duration</th>
                <th>Running Time</th>
              </tr>
              <tr>
                <td>7</td>
                <td>Opening of Day 02</td>
                <td>30 mins</td>
                <td>0800 hrs</td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  Technical Session: Slot 01 <small className="text-danger">(4 parallel sessions, each session 06 papers , 20 min for each presentation, 06*20 min)</small>{" "}
                </td>
                <td>2 hrs</td>
                <td>0830-1030 hrs</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Tea-break Session: Day 02</td>
                <td>30 mins</td>
                <td>1030 - 1100 hrs</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Keynote Session 02</td>
                <td>1 hrs</td>
                <td>1100 - 1200 hrs</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Invited Talk</td>
                <td>30 mins</td>
                <td>1200 - 1230 hrs</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Launch and Prayer Break</td>
                <td>1 hr</td>
                <td>1230 - 1430 hrs</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Keynote Session 03</td>
                <td>1 hrs</td>
                <td>1430 - 1530 hrs</td>
              </tr>
              <tr>
                <td>14</td>
                <td>
                  Technical Session: Slot 02 <small className="text-danger">(4 parallel sessions, each session 06 papers , 20 min for each presentation, 06*20 min)</small>{" "}
                </td>
                <td>2 hrs</td>
                <td>1530 - 1730 hrs</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <p className="text-3xl text-center my-2">Conference Schedule (Day-3)</p>

          <p className="my-2 text-center">The schedule is given in Bangladesh local time (GMT +6)</p>
          <table className="table table-bordered table-striped my-2 md:w-[90%]">
            <tbody>
              <tr className="bg-gray-400 text-white">
                <th>SL No.</th>
                <th>Events</th>
                <th>Duration</th>
                <th>Running Time</th>
              </tr>
              <tr>
                <td>15</td>
                <td>Opening of Day 03</td>
                <td>30 mins</td>
                <td>0800 hrs</td>
              </tr>
              <tr>
                <td>16</td>
                <td>
                  Technical Session: Slot 03 <small className="text-danger">(4 parallel sessions, each session 06 papers , 20 min for each presentation, 06*20 min)</small>{" "}
                </td>
                <td>2 hrs</td>
                <td>0830-1030 hrs</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Tea-break Session: Day 03</td>
                <td>30 mins</td>
                <td>1030 - 1100 hrs</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Keynote Session 04</td>
                <td>30 mins</td>
                <td>1100 - 1130 hrs</td>
              </tr>
              <tr>
                <td>19</td>
                <td>
                  Technical Session: Slot 04 <small className="text-danger">(4 parallel sessions, each session 06 papers , 20 min for each presentation, 06*20 min)</small>{" "}
                </td>
                <td>2 hrs</td>
                <td>1130 - 1330 hrs</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Launch</td>
                <td>30 mins</td>
                <td>1330 - 1400 hrs</td>
              </tr>
              <tr>
                <td>21</td>
                <td>Invited Talk</td>
                <td>50 mins</td>
                <td>1400 - 1450 hrs</td>
              </tr>
              <tr>
                <td>22</td>
                <td>
                  Technical Session: Slot 05 <small className="text-danger">(4 parallel sessions, each session 06 papers , 20 min for each presentation, 06*20 min)</small>{" "}
                </td>
                <td>2 hrs</td>
                <td>1500 - 1700 hrs</td>
              </tr>
              <tr>
                <td>23</td>
                <td>Closing Session with Prize Distributions & Dinner</td>
                <td>2 hrs</td>
                <td>1900 - 2100 hrs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
