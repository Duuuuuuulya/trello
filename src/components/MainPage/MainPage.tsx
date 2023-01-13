import React, { useState } from "react";

import { observer } from "mobx-react-lite";

import columns from "../../store/columns";

import AddColumnButton from "../AddColumnButton/AddColumnButton";
import './MainPage.css'
import Header from "../../Header/Header";
import AddNewTaskButton from "../AddNewTask/AddNewTaskButton";
import TodoCard from "../TodoCard/TodoCard";


const MainPage = observer(() => {
  const [currentCard, setCurrentCard] = useState (null)
  
  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, elem: any) {
    console.log('drag', elem)
    setCurrentCard(elem)
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>): void {
   
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>): void {
   
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault()
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>, elem: any): void {
    e.preventDefault()
    console.log('drop', elem)
    
  }

  return (
    <>
    <Header />
    <div className="columnsWrapper">
      <div className="ColumnHeader">
        {columns.columnsArr.map((item) => (
            <>
            <div className="column" >
            <div className="columnHeaderItem" key={item.title}>
              {item.title}
            </div>
            <div>
            {item.tasks.map((elem: any) => (
            <div 
            key={elem.taskId} 
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, elem)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, elem)}
            >
            <TodoCard text={elem.text} taskId={elem.taskId} difficult={elem.difficult} taskOwner={elem.taskOwner} header ={elem.header}/>
            </div>
            ))}
            </div>
            <AddNewTaskButton columnId = {item.columnId} header = {item.header}/>
            </div>
            </>
        ))}   
      </div>
      <AddColumnButton />
    </div></>
  )
})

export default MainPage