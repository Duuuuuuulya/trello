import React, { useState } from "react";

import { observer } from "mobx-react-lite";

import columns from "../../store/columns";

import AddColumnButton from "../AddColumnButton/AddColumnButton";
import './MainPage.css'
import Header from "../../Header/Header";
import AddNewTaskButton from "../AddNewTask/AddNewTaskButton";
import TodoCard from "../TodoCard/TodoCard";

interface MainPageProps {

}

interface ICulom {
  columnId: Number
  tasks: []
  title: string
}

enum IStartCulom {
  ICulom,
  null
}


const MainPage = observer(()  => {

  
  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, task: any, column: any) {
    columns.currentTask = task
    columns.currentColumn = column
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault()
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault()
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault()
  }

  function dropCardHandler(e: React.DragEvent<HTMLDivElement>, column : any): void {
    columns.dropCard(column)
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>, task: any, column: any): void {
    e.preventDefault()
    e.stopPropagation()
    columns.dropHandlerFunc(task, column)
  }

 

  return (
    <>
    <Header />
    <div className="columnsWrapper">
      <div className="ColumnHeader">
        {columns.columnsArr.map((column, idx) => (
            <div className="column" 
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, column)}
            key={column.columnId}
            >
            <div className="columnHeaderItem" key={column.title} 
             >
              {column.title}
            </div>
            <div>
            {column.tasks.map((task: any) => (
            <div 
            key={task.taskId} 
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, task, column)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, task, column)}
            >
            <TodoCard text={task.text} taskId={task.taskId} difficult={task.difficult} taskOwner={task.taskOwner} header ={task.header} columnId={idx}/>
            </div>
            ))}
            </div>
            <AddNewTaskButton columnId = {column.columnId} header = {column.header}/>
            </div> 
         
        ))}   
      </div>
      <AddColumnButton />
    </div></>
  )
})

export default MainPage