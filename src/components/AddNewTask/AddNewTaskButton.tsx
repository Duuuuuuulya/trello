import React, { useState } from "react";

import './AddNewTaskButton.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import columns from "../../store/columns";

interface AddNewTaskButtonProps {
  columnId: number
  header: string
}

function handleChange(event: { target: { value: string; }; }) {
  columns.header = event.target.value
}

const AddNewTaskButton = ({columnId}: AddNewTaskButtonProps) => {
  const [createTask, setCreateTask] = useState(false)
  return (
    !createTask ? 
    <div className="addTaskWrapper">
      <AddOutlinedIcon/>
      {/* <div onClick={() => columns.addTaskToColumn(columnId)}>Add new card</div> */}
      <div onClick={() => setCreateTask(true)}>Add new card</div>
    </div> : 
    <div>
      <input  onChange={handleChange}></input>
      <button onClick={() => {columns.addTaskToColumn(columnId); setCreateTask(false)}}></button>
    </div>
  )
}

export default AddNewTaskButton