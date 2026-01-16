import { useContext } from "react";
import { BugContext } from "../../context/BugContext";
import "./dashboard.css";
import SeverityChart from "../../components/reports/severitychart/SeverityChart";
import { UserContext } from "../../context/UserContext";
import totalbugs from "../../assets/icons/totalbugs.png";
import closebugs from "../../assets/icons/closebugs.png";
import openbugs from "../../assets/icons/openbugs.png";
import progressbugs from "../../assets/icons/progressbugs.png";

const DashBoard = () => {
  const { bugs } = useContext(BugContext);
  const { users } = useContext(UserContext);

  const recentBugs = [...bugs].slice(-2);
  const recentUsers = [...users].slice(-4);

  const totalBugs = bugs.length;
  const openBugs = bugs.filter(
    (bug) => bug.status.toLowerCase() === "open"
  ).length;
  const closeBugs = bugs.filter(
    (bug) => bug.status.toLowerCase() === "close"
  ).length;
  const progressBugs = bugs.filter(
    (bug) => bug.status.toLowerCase() === "progress"
  ).length;

  const severityStyle = (severity) => {
    switch (severity?.toLowerCase()) {
      case "low":
        return { color: "#00de76" };
      case "medium":
        return { color: "#ffbf00" };
      case "high":
        return { color: "#ff4d00" };
      case "critical":
        return { color: "#ff0000" };
      default:
        return {};
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="bug-quantity-cards">
        <div className="bug-quantity-card">
          <img src={totalbugs} alt="" />
          <div className="bug-data">
            <p>{totalBugs}</p>
            <p>Total Bugs</p>
          </div>
        </div>
        <div className="bug-quantity-card">
          <img src={openbugs} alt="" />
          <div className="bug-data">
            <p>{openBugs}</p>
            <p>Open Bugs</p>
          </div>
        </div>
        <div className="bug-quantity-card">
          <img src={progressbugs} alt="" />
          <div className="bug-data">
            <p>{progressBugs}</p>
            <p>Progress Bugs</p>
          </div>
        </div>
        <div className="bug-quantity-card">
          <img src={closebugs} alt="" />
          <div className="bug-data">
            <p>{closeBugs}</p>
            <p>Closed Bugs</p>
          </div>
        </div>
      </div>
      <div className="bug-details">
        <div className="bug-list">
          <h3 style={{ marginBottom: "1rem" }}>Recent Bug List</h3>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Assignee</th>
                <th className="small-screen-hide">Created At</th>
              </tr>
            </thead>
            <tbody>
              {recentBugs.map((bug) => (
                <tr key={bug.id}>
                  <td>{bug.title}</td>
                  <td style={{ ...severityStyle(bug.severity) }}>
                    {bug.severity}
                  </td>
                  <td>{bug.status}</td>
                  <td>{bug.assigned}</td>
                  <td className="small-screen-hide">
                    {new Date(bug.created).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bug-chart">
          <SeverityChart />
        </div>
      </div>
      <div className="user-details">
        <div className="team">
          <h3>Team Members</h3>
          <div className="team-members">
            {recentUsers.map((user) => (
              <div key={user.id} className="user">
                <div className="user-name">
                  <p>{user.name}</p>
                  <p>{user.role}</p>
                </div>
                <p className="open-bugs">
                  Open: <span>{user.bugs || 0}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <div className="recent-activity-list">
            {recentBugs.map((bug) => (
              <p key={bug.id}>
                <span>{bug.title}</span> bug assigned to{" "}
                <span>{bug.assigned}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
