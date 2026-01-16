import { useContext } from "react";
import { BugContext } from "../../../context/BugContext";
import { Bar } from "react-chartjs-2";
import "../chartSetup";
const StatusChart = () => {
  const { bugs } = useContext(BugContext);
  const data = {
    labels: ["Open", "Progress", "Close"],
    datasets: [
      {
        label: "Bugs",
        data: [
          bugs.filter(
            (bug) => bug.status.toLowerCase() === "Open".toLowerCase()
          ).length,
          bugs.filter(
            (bug) => bug.status.toLowerCase() === "progress".toLowerCase()
          ).length,
          bugs.filter(
            (bug) => bug.status.toLowerCase() === "close".toLowerCase()
          ).length,
        ],
        backgroundColor: ["#6366f1", "#eb4f4f", "#faf615"],
      },
    ],
  };
  return (
    <div>
      <h3>Bugs by Status</h3>
      <Bar data={data} />
    </div>
  );
};

export default StatusChart;
