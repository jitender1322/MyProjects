import React, { useEffect, useState } from "react";
import "./style.css"

export default function Task() {
  const [task, setTask] = useState('');
  const [des, setDes] = useState('');
  const [checked, setChecked] = useState('');

  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    let allData = JSON.parse(localStorage.getItem("Task")) || [];
    setData(allData);
  }, []);

  const handleSubmit = () => {
    let obj = { task, des, checked, status: 'pending' };
    if (editIndex == null) {
      setData([...data, obj]);
      localStorage.setItem("Task", JSON.stringify([...data, obj]));
    } else {
      let updateData = data[editIndex];
      updateData.task = task;
      updateData.des = des;
      updateData.checked = checked;

      localStorage.setItem("Task", JSON.stringify([...data]));
    }
    setTask('');
    setDes('');
    setChecked('');
  }

  const handleStatus = (index) => {
    const updatedData = data.map((item, i) =>
      i === index ? { ...item, status: "Completed" } : item
    );
    setData(updatedData);
    localStorage.setItem("Task", JSON.stringify(updatedData));
  };

  const handleDelete = (index) => {
    let newData = data.filter((e, i) => i !== index);
    setData(newData);
    localStorage.setItem("Task", JSON.stringify(newData));
  };

  const handleEdit = (index) => {
    let oldData = data[index];
    setTask(oldData.task);
    setDes(oldData.des);
    setChecked(oldData.checked);

    setEditIndex(index);
  }

  return (
    <div>
      <div className="container">
        <h1>Task Manager</h1>
        <div className="form">
          <input type="text" placeholder="Task Title" value={task} onChange={(e) => setTask(e.target.value)} />
          <input type="text" placeholder="Task Description" value={des} onChange={(e) => setDes(e.target.value)} /><br />
          <label>Priority :</label>
          <label><input type="radio" name="priority" checked={checked === 'low'} value='low' onChange={(e) => setChecked(e.target.value)} />Low</label>
          <label> <input type="radio" name="priority" checked={checked === 'medium'} value='medium' onChange={(e) => setChecked(e.target.value)} />Medium</label>
          <label> <input type="radio" name="priority" checked={checked === 'high'} value='high' onChange={(e) => setChecked(e.target.value)} />High</label><br />

          <button onClick={handleSubmit}>{editIndex == null ? "Submit" : "Update"}</button>
        </div>

        <div className="task-table">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Task</th>
                <th>Description</th>
                <th>Priority</th>
                <th colSpan={2}>Action</th>
                <th>Mark as Completed</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((e, i) => {
                  return <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.task}</td>
                    <td>{e.des}</td>
                    <td>{e.checked}</td>
                    <td><button onClick={() => handleEdit(i)}>Edit</button></td>
                    <td><button onClick={() => handleDelete(i)}>Delete</button></td>
                    <td><button onClick={() => handleStatus(i)} disabled={e.status == "Completed"}  >Mark as Completed</button></td>
                    <td>{e.status}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
