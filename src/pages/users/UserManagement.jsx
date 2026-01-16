import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import CreateUserModal from "../../components/users/usermodal/CreateUserModal";
import EditUserModal from "../../components/users/usermodal/EditUserModal";
import { BugContext } from "../../context/BugContext";
import Pagination from "../../components/pagination/Pagination";
import usePagination from "../../hooks/usePagination";
import { AuthContext } from "../../context/AuthContext";
import { permissions } from "../../utils/permissions";
import editIcon from "../../assets/icons/edit.png";
import deleteIcon from "../../assets/icons/delete.png";

import "./usermanagement.css";

const UserManagement = () => {
  const { users, addUser, deleteUser } = useContext(UserContext);
  const { bugs } = useContext(BugContext);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const { user } = useContext(AuthContext);
  if (!user) return null;
  const role = user?.role?.toLowerCase()?.trim();
  const can = permissions[role] || {};

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchUser.toLowerCase())
  );

  const getOpenBugCount = (user) =>
    bugs.filter(
      (bug) =>
        bug.assigned.toLowerCase() === user.toLowerCase() &&
        bug.status.toLowerCase() === "open"
    ).length;

  const { currentPage, totalPages, paginatedData, goToPage } = usePagination(
    filteredUsers,
    5
  );

  const openEdit = (user) => {
    setEditModal(true);
    setSelectedUser(user);
  };

  return (
    <>
      {showModal && (
        <CreateUserModal onAdd={addUser} onClose={() => setShowModal(false)} />
      )}
      {editModal && (
        <EditUserModal bug={selectedUser} onClose={() => setEditModal(false)} />
      )}
      <div
        className={`user-list-container ${
          showModal || editModal ? "page blur" : "page"
        }`}
      >
        <header className="heading">
          <h2>User Management</h2>
          {can.addUser && (
            <button onClick={() => setShowModal(true)}>+ Add Users</button>
          )}
        </header>
        <div className="filter-search">
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder="search"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          />
        </div>
        <main className="user-tabel">
          <table className="fullscreen-table">
            <thead>
              <tr>
                <th className="hide-smallscreen">Id</th>
                <th>Name</th>
                <th className="hide-smallscreen">Email</th>
                <th>Role</th>
                <th>Open Bugs</th>
                {can.editUser && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((user) => (
                <tr key={user.id}>
                  <td className="hide-smallscreen">{user.id}</td>
                  <td style={{ textTransform: "capitalize" }}>{user.name}</td>
                  <td className="hide-smallscreen">{user.email}</td>
                  <td>{user.role}</td>

                  <td>{getOpenBugCount(user.name)}</td>
                  {can.editUser && (
                    <td className="action-button">
                      <img
                        onClick={() => openEdit(user)}
                        src={editIcon}
                        alt=""
                      />
                      <img
                        onClick={() => deleteUser(user.id)}
                        src={deleteIcon}
                        alt=""
                      />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              goToPage(page);
              window.scrollTo(0, 0) || page;
            }}
          />
        </main>
      </div>
    </>
  );
};

export default UserManagement;
