import React, { useEffect, useState } from 'react'
import styles from './Todo.module.css'

const Todo = (props) => {
    // For storing displayed tasks
    const [tasks, setTasks] = useState([])
    // For holding data during addition or removal to replace tasks
    const [newTask, setNewTask] = useState('')

    

    // add tasks
    const addTask = () => {
        const task = {
            content: newTask,
            completed: false
        }
        setTasks([...tasks, task])
        setNewTask('')
    }

    // remove tasks
    const removeTask = (index) => {
        setTasks(tasks.filter((_, currentIndex) => currentIndex !== index))
    }

    // toggle completion on a task
    const toggleTask = (index) => {

        const newTasks = tasks.map((task, currentIndex) => {
            if (currentIndex === index) {
                return { ...task, completed: !task.completed }
            }
            return task
        })

        setTasks(newTasks)
    }

    return (
        <div className={styles.container}>
            <input
                type='text'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}>
            </input>

            <button
                onClick={addTask}>
                Add Task
            </button>
            {
                tasks.map((task, index) => (
                    <div key={index} className={styles.task}>

                        <div>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(index)}
                            />

                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.content}
                            </span>
                        </div>

                        <button
                            onClick={() => removeTask(index)}>
                            Delete
                        </button>
                    </div>
                ))

            }

        </div>
    )
}

export default Todo