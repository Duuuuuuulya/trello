import { makeAutoObservable} from 'mobx'


class Columns {
  columnsArr = []
  columnName = ''
  header = ''
  taskText = 'sdfdsf'
  taskDifficult = 0
  taskOwner = 'eto ya'
  currentColumn = null
  currentTask = null
  constructor () {
    makeAutoObservable(this)
  }


  addNewColumnEnd() {
    this.columnsArr.push({title: this.columnName, tasks: [], columnId: Date.now()})
  }
  

  addTaskToColumn(columnId) {
    const currentColumn = this.columnsArr.find((item) => {
      return item.columnId === columnId
    }) 
    currentColumn.tasks.push({ header: this.header ,text: this.taskText, difficult: this.taskDifficult, taskOwner: this.taskOwner, taskId: Date.now() })
    console.log(this.columnsArr)
  }

  deleteTask(taskId, columnId) {
    this.columnsArr[columnId].tasks = this.columnsArr[columnId].tasks.filter(el => el.taskId !== taskId)
  }
  
  dropCard(column) {
    column.tasks.push(this.currentTask)
    const currentIndex = this.currentColumn.tasks.indexOf(this.currentTask)
    this.currentColumn.tasks.splice(currentIndex, 1 )
    this.columnsArr.map(b => {
      if (b.taskId === column.columnId) {
        return column
      }
      if (b.taskId === this.currentColumn.columnId) {
        return this.currentColumn
      }
      return b
    })

  }
  
  dropHandlerFunc(task, column) {
    const currentIndex = this.currentColumn.tasks.indexOf(this.currentTask)
    this.currentColumn.tasks.splice(currentIndex, 1 )
    const dropIndex = column.tasks.indexOf(task)
    column.tasks.splice(dropIndex + 1, 0, this.currentTask)
    task.columnsArr.map(b => {
      if (b.taskId === column.columnId) {
        return column
      }
      if (b.taskId === this.currentColumn.columnId) {
        return this.currentColumn
      }
      return b
    })
  }
}

export default new Columns()