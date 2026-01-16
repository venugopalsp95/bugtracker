import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";

const CreateBugModal = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState("");
  const [severity, setSeverity] = useState("");
  const [status, setStatus] = useState("");
  const [assigned, setAssigned] = useState("");

  const { users } = useContext(UserContext);

  const handleSubmit = () => {
    onAdd({
      title,
      severity,
      status,
      assigned,
      created: new Date().toISOString(),
    });
    setTitle("");
    setSeverity("Low");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Create Bug</h3>
        <input
          type="text"
          placeholder="Bug Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
          <option>Select Severity</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Select Status</option>
          <option value="open">open</option>
          <option value="close">close</option>
          <option value="progress">progress</option>
        </select>

        <select value={assigned} onChange={(e) => setAssigned(e.target.value)}>
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>

        <button onClick={handleSubmit}>Create</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CreateBugModal;
