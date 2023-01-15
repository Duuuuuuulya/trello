import { makeAutoObservable} from 'mobx'

class Columns {
  columnsArr = []
  columnName = ''
  header = ''
  taskText = 'sdfdsf'
  taskDifficult = 0
  taskOwner = 'eto ya'
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
  

}

export default new Columns()