import React, { useEffect, useState } from "react"
import Task from "./Task";



const Home = () => {

      const initialarr = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

      const [tasks, setTasks] = useState(initialarr);
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");

      const submitHandler = (e) => {
            e.preventDefault();

            setTasks([...tasks, { title, description }]);

            setTitle("");
            setDescription("");

      }

      useEffect(() => {
            localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks])

      const deleteTask = (index) => {
            const filterArr = tasks.filter((val, i) => {
                  return i !== index;
            });

            console.log(filterArr);
            setTasks(filterArr);

      }

      return <div className="container">
            <h1>Daily Goals</h1>
            <form onSubmit={submitHandler}>
                  <input type="text" placeholder="Enter title here.." value={title} onChange={(e) => { setTitle(e.target.value) }} />
                  <textarea placeholder=" Enter description here.." value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                  <button type="submit" >ADD</button>
            </form>

            {
                  tasks.map((item, index) => {
                        return <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
                  }
                  )
            }
      </div>

};

export default Home;
