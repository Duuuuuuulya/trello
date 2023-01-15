import React, { useState } from "react";

import { observer } from "mobx-react-lite";

import columns from "../../store/columns";

import AddColumnButton from "../AddColumnButton/AddColumnButton";
import './MainPage.css'
import Header from "../../Header/Header";
import AddNewTaskButton from "../AddNewTask/AddNewTaskButton";
import TodoCard from "../TodoCard/TodoCard";


const MainPage = observer(()  => {
  const[currentColumn, setCurrentColumn] = useState(null)
  const[currentTask, setCurrentTask] = useState(null)
  
  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, elem: any, item: any) {
    setCurrentColumn(elem)
    setCurrentTask(item)
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

  function dropCardHandler(e: React.DragEvent<HTMLDivElement>, item: any): void {
    item.tasks.push(currentTask)
    const currentIndex = currentColumn.tasks.indexOf(currentTask)
    currentColumn.tasks.splice(currentIndex, 1 )
    columns.columnsArr.map(b => {
      if (b.taskId === item.columnId) {
        return item
      }
      if (b.taskId === currentColumn.columnId) {
        return currentColumn
      }
      return b
    })
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>, elem: any, item: any): void {
    e.preventDefault()
    console.log(item.taskId)
    console.log(elem.taskId)
    const currentIndex = currentColumn.tasks.indexOf(currentTask)
    currentColumn.tasks.splice(currentIndex, 1 )
    const dropIndex = elem.tasks.indexOf(item)
    elem.tasks.splice(dropIndex + 1, 0, currentTask)
    columns.columnsArr.map(b => {
      if (b.taskId === item.columnId) {
        return item
      }
      if (b.taskId === currentColumn.columnId) {
        return currentColumn
      }
      return b
    })

  }

 

  return (
    <>
    <Header />
    <div className="columnsWrapper">
      <div className="ColumnHeader">
        {columns.columnsArr.map((item, idx) => (
            <div className="column" 
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, item)}
            key={item.tasks.taskId}
            >
            <div className="columnHeaderItem" key={item.title} 
             >
              {item.title}
            </div>
            <div>
            {item.tasks.map((elem: any) => (
            <div 
            key={elem.columnId} 
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, item, elem)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, item, elem)}
            >
            <TodoCard text={elem.text} taskId={elem.taskId} difficult={elem.difficult} taskOwner={elem.taskOwner} header ={elem.header} columnId={idx}/>
            </div>
            ))}
            </div>
            <AddNewTaskButton columnId = {item.columnId} header = {item.header}/>
            </div> 
         
        ))}   
      </div>
      <AddColumnButton />
    </div></>
  )
})

export default MainPage