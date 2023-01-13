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
    console.log(columnId)
    const currentColumn = this.columnsArr.find((item) => {
      return item.columnId === columnId
    }) 
    currentColumn.tasks.push({ header: this.header ,text: this.taskText, difficult: this.taskDifficult, taskOwner: this.taskOwner, taskId: Date.now() })
  }
  
}

export default new Columns()