import React from "react";

import columns from "../../store/columns";

import './TodoCard.css'

interface TodoCardProps {
  text: string;
  difficult: number;
  taskOwner: string;
  taskId: number;
  header: string
  columnId: number
}

const TodoCard = ({text, difficult, taskOwner, header, taskId, columnId}:TodoCardProps) => {
  return (
    <div className="taskWrapper" >
      <div className="delete_header">
      <div className="header_task">{header}</div>
      <button className="deleteButton" onClick={() => columns.deleteTask(taskId, columnId)}>x</button>
      </div>
      <div className="text">{text}</div>
      <div className="difficult">Difficult: {difficult}</div>
      <div className="owner">Owner: {taskOwner}</div>
    </div>
  )
 
}

export default TodoCard 