import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mybutton from "./mybutton";
import "./dashboard.css";
import "./modal.css";
import login from "./Login";

const Dashboard = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  // for current user tasks
  const [tasks, setTasks] = useState([]);
  // modal open ya close
const [isModalOpen, setIsModalOpen] = useState(false);

// jis task ko edit kar rahe
const [editTask, setEditTask] = useState(null);

// modal input ka text
const [editText, setEditText] = useState("");
const [editId, setEditId] = useState(null);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));
    if (!token) {
      setTasks([]); 
      navigate("/");
      return;
    }
    const allTodos =JSON.parse(localStorage.getItem("userTodos")) || {};  //usertodos jo hum nay set ki hai 
    setTasks(allTodos[token.loginID] || []);
  }, [navigate]);

const addTask = () => {
  const token = JSON.parse(localStorage.getItem("Token"));
  if (!task.trim()) return;

  // localStorage se sab users ke todos
  const allTodos =
    JSON.parse(localStorage.getItem("userTodos")) || {};

  // current user ke todos
  const userTasks = allTodos[token.loginID] || [];

  // naya task object
  const newTask = {
    id: Date.now(),                // unique id
    text: task,                    // task text
    completed: false,              // default incomplete
    createdAt: new Date().toLocaleString() // date & time
  };

  // puranay + naya task
  const updatedTasks = [...userTasks, newTask];

  // localStorage update
  allTodos[token.loginID] = updatedTasks;
  localStorage.setItem("userTodos", JSON.stringify(allTodos));

  // state update
  setTasks(updatedTasks);
  setTask("");
};
const toggleComplete = (id) => {
  const token = JSON.parse(localStorage.getItem("Token"));
  const allTodos =
    JSON.parse(localStorage.getItem("userTodos")) || {};

  const userTasks = allTodos[token.loginID] || [];

  // jis task pe click hua sirf usko update karo
  const updatedTasks = userTasks.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );

  allTodos[token.loginID] = updatedTasks;
  localStorage.setItem("userTodos", JSON.stringify(allTodos));

  setTasks(updatedTasks);
};


const deleteTask = (id) => {
  const token = JSON.parse(localStorage.getItem("Token"));
  const allTodos =
    JSON.parse(localStorage.getItem("userTodos")) || {};

  const userTasks = allTodos[token.loginID] || [];

  const filteredTasks = userTasks.filter(
    (t) => t.id !== id
  );

  allTodos[token.loginID] = filteredTasks;
  localStorage.setItem("userTodos", JSON.stringify(allTodos));

  setTasks(filteredTasks);
};

const openEditModal = (task) => {
  setEditId(task.id);        // jis task ko edit karna
  setEditText(task.text);    // purana text input mein
  setIsModalOpen(true);      // modal open
};
const saveEdit = () => {
  const token = JSON.parse(localStorage.getItem("Token"));
  const allTodos =
    JSON.parse(localStorage.getItem("userTodos")) || {};

  const userTasks = allTodos[token.loginID] || [];

  const updatedTasks = userTasks.map((t) =>
    t.id === editId ? { ...t, text: editText } : t
  );

  allTodos[token.loginID] = updatedTasks;
  localStorage.setItem("userTodos", JSON.stringify(allTodos));

  setTasks(updatedTasks);
  setIsModalOpen(false);
};



  const handleLogout = () => {
    setTasks([]);
    localStorage.removeItem("Token");
    navigate("/");
  };
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Dashboard</h1>
        <Mybutton title="Logout" onClick={handleLogout} />
      </div>

      <div className="todo-card">
        <h2>My Tasks</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Add task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

<ul className="todo-list">
  {tasks && tasks.map((t) => (
    // Sirf tab render karo agar task ka text maujood ho
    t && t.text ? (
      <li key={t.id} className={`todo-item ${t.completed ? "done" : ""}`}>
        <input
          type="checkbox"
          checked={t.completed}
          onChange={() => toggleComplete(t.id)}
        />
        <div className="todo-content">
          <span className="todo-text">{t.text}</span>
          <small className="todo-date">{t.createdAt}</small>
        </div>
        <div className="todo-actions">
          <button className="edit-btn" onClick={() => openEditModal(t)}>✏️</button>
          <button className="delete-btn" onClick={() => deleteTask(t.id)}>🗑️</button>
        </div>
      </li>
    ) : null
  ))}
</ul>

        {isModalOpen && (
  <div className="modal">
    <div className="modal-box">
      <h3>Edit Task</h3>
<input
  type="text"
  value={editText}
  onChange={(e) => setEditText(e.target.value)}
/>


      <div className="modal-btns">
        <button type="button" onClick={saveEdit}>Save</button>
        <button onClick={() => setIsModalOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default Dashboard;




































//   const [user,setUser]=useState([]);
//   const [search,setSearch]=useState("");
//   useEffect(() => {
//     const data=JSON.parse(localStorage.getItem("User-data"))|| [];
//     console.log("Storage se ye mila:", data);
//     setUser(data);
//   }, []);
//   const deleteUser =useCallback((emailtoDelete)=>{
//     const allData = JSON.parse(localStorage.getItem("User-data")) || [];
        
       
//         const updatedList = allData.filter(u => u.email !== emailtoDelete);
        
        
//         localStorage.setItem("User-data", JSON.stringify(updatedList));
//         setUser(updatedList);
        
//         alert("User Deleted ");
//     }, [user]);
  
  

  
//   const filterUser=useMemo(() =>{
//     return user.filter((user)=>
//       user.email.toLowerCase().includes(search.toLowerCase()) || user.name.toLowerCase().includes(search.toLowerCase()))
//   },[search,user]);




{/* <div className="search-box">
                <input 
                    type="text" 
                    placeholder="Search by name or email..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="table-wrapper">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterUser.length > 0 ? (
                            filterUser.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button 
                                            className="delete-btn" 
                                            onClick={() => deleteUser(user.email)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" className="no-data">No users found matching your search.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div> */}
