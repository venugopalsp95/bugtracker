import { useContext, useState } from "react";
// import buglist from "../../data/buglist";
import "./buglist.css";
import { BugContext } from "../../context/BugContext";
import CreateBugModal from "../../components/bugs/bugmodal/CreateBugModal";
import EditBugModal from "../../components/bugs/bugmodal/EditBugModal";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/pagination/Pagination";
import { AuthContext } from "../../context/AuthContext";
import { permissions } from "../../utils/permissions";
import editIcon from "../../assets/icons/edit.png";
import deleteIcon from "../../assets/icons/delete.png";

const BugList = () => {
  const [searchBug, setSearchBug] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedBug, setSelectedBug] = useState(null);
  const { bugs, addBugs, deleteBugs } = useContext(BugContext);
  const { user } = useContext(AuthContext);
  if (!user) return null;
  const role = user?.role?.toLowerCase()?.trim();
  const can = permissions[role] || {};

  const openEdit = (bug) => {
    setEditModal(true);
    setSelectedBug(bug);
  };

  const filteredBugList = bugs.filter((bug) => {
    return (
      (selectedStatus === "all" ||
        bug.status.toLowerCase() === selectedStatus) &&
      bug.title.toLowerCase().includes(searchBug.toLowerCase())
    );
  });

  const { currentPage, totalPages, paginatedData, goToPage } = usePagination(
    filteredBugList,
    6
  );
  const severityStyle = (severity) => {
    switch (severity?.toLowerCase()) {
      case "low":
        return { backgroundColor: "#d1e7dd", color: "#0f5132" };
      case "medium":
        return { backgroundColor: "#fff3cd", color: "#664d03" };
      case "high":
        return { backgroundColor: "#f8d7da", color: "#842029" };
      case "critical":
        return { backgroundColor: "#f55563", color: "#ffffff" };
      default:
        return {};
    }
  };

  return (
    <>
      {showModal && (
        <CreateBugModal onAdd={addBugs} onClose={() => setShowModal(false)} />
      )}
      {editModal && (
        <EditBugModal bug={selectedBug} onClose={() => setEditModal(false)} />
      )}
      <div
        className={`bug-list-container ${
          showModal || editModal ? "page blur" : "page"
        }`}
      >
        <header className="heading">
          <h2>Bug List</h2>
          {can.createBug && (
            <button onClick={() => setShowModal(true)}>+ Create Bug</button>
          )}
        </header>
        <div className="filter-search">
          <select
            name="status"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">all</option>
            <option value="open">open</option>
            <option value="close">close</option>
            <option value="progress">progress</option>
          </select>
          <input
            type="text"
            placeholder="search"
            value={searchBug}
            onChange={(e) => setSearchBug(e.target.value)}
          />
        </div>
        <main className="buglist-tabel">
          <table className="fullscreen-table">
            <thead>
              <tr>
                <th className="hide-smallscreen">Id</th>
                <th>Title</th>
                <th>Severity</th>
                <th>Status</th>
                <th className="hide-smallscreen">Assignee</th>
                <th className="hide-smallscreen">Created Date</th>
                {can.viewAction && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((bug) => (
                <tr key={bug.id}>
                  <td className="hide-smallscreen">{bug.id}</td>
                  <td>{bug.title}</td>
                  <td style={{ ...severityStyle(bug.severity) }}>
                    {bug.severity}
                  </td>
                  <td>{bug.status}</td>
                  <td className="hide-smallscreen">{bug.assigned}</td>
                  <td className="hide-smallscreen">
                    {new Date(bug.created).toLocaleDateString()}
                  </td>
                  {can.viewAction && (
                    <td className="action-button">
                      {can.editBug && (
                        <img onClick={() => openEdit(bug)} src={editIcon} />
                      )}
                      {can.deleteBug && (
                        <img
                          onClick={() => deleteBugs(bug.id)}
                          src={deleteIcon}
                        />
                      )}
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

export default BugList;
