import { useContext } from "react";
import "../chartSetup";
import { BugContext } from "../../../context/BugContext";
import { Bar } from "react-chartjs-2";

const AsssignmentChart = () => {
  const { bugs } = useContext(BugContext);

  const assigned = bugs.filter((bug) => bug.assigned).length;
  const unassigned = bugs.filter((bug) => !bug.assigned).length;

  const data = {
    labels: ["Assigned", "Unassigned"],
    datasets: [
      {
        label: "Bugs",
        data: [assigned, unassigned],
        backgroundColor: ["#16a34a", "#9ca3af"],
      },
    ],
  };

  return (
    <div>
      <h3>Assignment Status</h3>
      <Bar data={data} />
    </div>
  );
};

export default AsssignmentChart;
