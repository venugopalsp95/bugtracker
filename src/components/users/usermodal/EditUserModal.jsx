import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";

const EditUserModal = ({ bug, onClose }) => {
  const { updateUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (bug) {
      setName(bug.name);
      setEmail(bug.email);
      setRole(bug.role);
    }
  }, [bug]);

  const handleEdit = () => {
    updateUser({ ...bug, name, email, role }), onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Edit User</h3>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>Select Role</option>
          <option value="admin">Admin</option>
          <option value="qa">QA Engineer</option>
          <option value="developer">Developer</option>
        </select>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditUserModal;
