import React from "react";

import './TodoCard.css'

interface TodoCardProps {
  text: string;
  difficult: number;
  taskOwner: string;
  taskId: number;
  header: string
}

const TodoCard = ({text, difficult, taskOwner, header}:TodoCardProps) => {
  return (
    <div className="taskWrapper" >
      <div className="header_task">{header}</div>
      <div className="text">{text}</div>
      <div className="difficult">Difficult: {difficult}</div>
      <div className="owner">Owner: {taskOwner}</div>
    </div>
  )
 
}

export default TodoCard 