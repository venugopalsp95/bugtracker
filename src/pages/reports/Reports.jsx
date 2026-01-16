import AsssignmentChart from "../../components/reports/assignmentchart/AsssignmentChart";
import SeverityChart from "../../components/reports/severitychart/SeverityChart";
import StatusChart from "../../components/reports/statuschart/StatusChart";
import "./report.css";

const Reports = () => {
  return (
    <div>
      <h2>Reports</h2>
      <div className="report-container">
        <div className="chart-container">
          <StatusChart />
        </div>
        <div className="chart-container" style={{ gridRow: "1 /3" }}>
          <SeverityChart />
        </div>
        <div className="chart-container">
          <AsssignmentChart />
        </div>
      </div>
    </div>
  );
};

export default Reports;
