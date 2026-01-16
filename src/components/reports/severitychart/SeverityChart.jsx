import { useContext } from "react";
import "../chartSetup";
import { BugContext } from "../../../context/BugContext";
import { Pie } from "react-chartjs-2";

const SeverityChart = () => {
  const { bugs } = useContext(BugContext);

  const data = {
    labels: ["Low", "Medium", "High", "Critical"],
    datasets: [
      {
        data: [
          bugs.filter(
            (bug) => bug.severity.toLowerCase() === "Low".toLowerCase()
          ).length,
          bugs.filter(
            (bug) => bug.severity.toLowerCase() === "Medium".toLowerCase()
          ).length,
          bugs.filter(
            (bug) => bug.severity.toLowerCase() === "High".toLowerCase()
          ).length,
          bugs.filter(
            (bug) => bug.severity.toLowerCase() === "Critical".toLowerCase()
          ).length,
        ],
        backgroundColor: ["#22c55e", "#faf615", "#efb344", "#eb4f4f"],
      },
    ],
  };

  return (
    <div style={{ gridRow: "1 / 3" }}>
      <h3>Bugs by Severity</h3>
      <Pie data={data} />
    </div>
  );
};

export default SeverityChart;
