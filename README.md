# React Bug Tracker Dashboard

A **Frontend-only Bug Tracker Dashboard** built using **React + JavaScript**, demonstrating **role-based access control**, **CRUD operations**, **charts**, and **responsive UI**.

---

## Live Demo & Repository

- **Live application:** https://venugopalsp95.github.io/bugtracker/

- **GitHub Repository:** https://github.com/venugopalsp95/bugtracker

---

## Screenshots

### Dashboard

[Dashboard](./src/assets/screenshots/dashboard.png)

### Bug List

[Bug List](./src/assets/screenshots/buglist.png)

### User List

[User List](./src/assets/screenshots/userlist.png)

### Reports

[Reports](./src/assets/screenshots/reports.png)

---

## Features

### Authentication & Roles

- Login / Logout system (no backend)
- Role-based access:
  - **Admin**
  - **Developer**
  - **QA**

### User Management (Admin Only)

- Add users
- Edit users
- Delete users (Admin users cannot be deleted)
- Role assignment

### Bug Management

- Create bug (modal)
- Edit bug (modal)
- Delete bug
- Assign user to bug
- Bug fields:
  - Title
  - Status (Open / In Progress / Closed)
  - Severity (Low / Medium / High)
  - Assigned User
  - Created Date

### Dashboard & Reports

- Recent bugs list
- Bug status distribution (Chart.js)
- Severity-wise chart
- User-wise open bugs

### UX Enhancements

- Pagination
- Search (bugs & users)
- Responsive design (mobile / tablet / desktop)

### Data Handling (No Backend)

- Uses **localStorage** for persistence
- One-time **seed data initialization**
- Safe fallback when data is deleted

---

## Tech Stack

| Category   | Tech             |
| ---------- | ---------------- |
| Frontend   | React (Vite)     |
| Language   | JavaScript       |
| Routing    | React Router DOM |
| State      | Context API      |
| Charts     | Chart.js         |
| Styling    | CSS              |
| Storage    | localStorage     |
| Deployment | GitHub Pages     |

---

## Folder Structure

```text
src/
├── components/
│ ├── bugs/
│ │ ├── bugmodal/
│ │ │  ├── CreateBugModal.jsx
│ │ │  └── EditBugModal.jsx
│ ├── layout/
│ │ ├── header/
│ │ │  ├── Header.jsx
│ │ │  └── header.css
│ │ ├── sidebar/
│ │ │  ├── Sidebar.jsx
│ │ │  └── sidebar.css
│ │ ├── Layout.jsx
│ │ ├── layout.css
│ ├── pagination/
│ │ ├── Pagination.jsx
│ ├── reports/
│ │ ├── assignmentchart/
│ │ │  ├── Assignmentchart.jsx
│ │ ├── severitychart/
│ │ │  ├── Severitychart.jsx
│ │ ├── statuschart/
│ │ │  ├── Statuschart.jsx
│ │ ├── chartSetup.js
│ ├── users/
│ │ ├── usermodal/
│ │ │  ├── CreateUserModal.jsx
│ │ │  └── EditUserModal.jsx
├── context/
│ ├── AuthContext.jsx
│ └── BugContext.jsx
│ └── UIContext.jsx
│ └── UserContext.jsx
├── hooks/
│ └── usePagination.js
├── pages/
│ ├── buglist/
│ │ ├──Buglist.jsx
│ │ └──buglist.css
│ ├── dashboard/
│ │ ├── Dashboard.jsx
│ │ └── dashboard.css
│ ├── login/
│ │ ├── Login.jsx
│ │ └── login.css
│ ├── reports/
│ │ ├── Reports.jsx
│ │ └── reports.css
│ ├── users/
│ │ ├── Usermanagement.jsx
│ │ └── usermanagement.css
├── routes/
│ └── AppRoutes.jsx
├── seeddata/
│ ├── buglist.js
│ └── userlist.js
├── styles/
│ └── index.css
├── utils/
│ ├── initStorage.js
│ └── permissions.js
├── App.jsx
└── main.jsx
```

---

# Role Permissions

| Action                | Admin | Developer | QA  |
| --------------------- | ----- | --------- | --- |
| View Dashboard        | ✅    | ✅        | ✅  |
| Create Bug            | ✅    | ❌        | ✅  |
| Edit Bug              | ✅    | ✅        | ❌  |
| Delete Bug            | ✅    | ❌        | ❌  |
| View Users            | ✅    | ✅        | ✅  |
| Add/Edit/Delete Users | ✅    | ❌        | ❌  |
| View Reports          | ✅    | ✅        | ✅  |

---

## Charts (Chart.js)

- Bug Status Bar Chart
- Severity Distribution Pie Chart

> Charts update automatically based on live bug data stored in localStorage.

---

## Key Learnings

- Context API for global state
- Role-based access control (RBAC)
- Managing UI state (sidebar, modal)
- LocalStorage as a mock backend
- Chart integration with live data
- Responsive dashboard layout

---

## Limitations

- No real backend or authentication server
- Data is browser-specific (localStorage)
- Multi-user real-time sync not supported

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/venugopalsp95/bugtracker.git

npm install

npm run dev
```

---

## Author

**Venugopal S P**
React Frontend Developer

---
