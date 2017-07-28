import React, {Component} from 'react';
import TodoStore from '../stores/TodoStore';
import AltContainer from 'alt-container';
import TodoSource from '../sources/TodoSource';
import TodoAction from '../actions/TodoAction';



class AddNewTodo extends Component{

  addTodo(){
    console.log(document.getElementById('inputAddTodo').value);
    if(document.getElementById('inputAddTodo').value)
     TodoAction.addTodo(document.getElementById('inputAddTodo').value);
    document.getElementById('inputAddTodo').value = "";
  }

  render() {
    return (
        <div>
          <input id="inputAddTodo"/>
          <button onClick={this.addTodo}>ADD MORE</button>
        </div>
    )
  }

};

class MarkOrUnmark extends Component{

  markAll(flag){
    TodoAction.markAll(flag);
  }

  render() {
    return (
        <div>
          <input type="radio" name="markAll" onChange={this.markAll.bind(this,true)} /> MarkAll<br/>
          <input type="radio" name="markAll" onChange={this.markAll.bind(this,false)} /> Unmark All<br/>
        </div>
    )
  }

}


class SortTodo extends Component {

  showTypeItem(flag){
    console.log("SortTodoSortTodoSortTodo",flag);
    TodoAction.showTypeItem(flag);
  }

  render() {
    return (
        <div>
          <input type="radio" name="showType" onChange={this.showTypeItem.bind(this,null)} /> Show All<br/>
          <input type="radio" name="showType" onChange={this.showTypeItem.bind(this,true)} /> Done<br/>
          <input type="radio" name="showType" onChange={this.showTypeItem.bind(this,false)} /> Not DOne<br/>
        </div>
    )
  }

}





class AllTodos extends Component {
  todosAll:[];
  
  
  chk(){
    console.log("at allTodos");
  }

  componentWillReceiveProps(nextProps) {
    this.todosAll = nextProps;
    console.log('all todos: componentWillReceiveProps', this.todosAll);

  }


  markAsDone(todo){
      console.log("done todo",todo);
      TodoAction.markAsDone(todo);
  }

  deleteTodo(todoIndex){
    TodoAction.deleteTodo(todoIndex);
  }

  render() {
    

    let markAsDoneBtn;
    let deleteBtn;
    return (
      <ul>
        {this.props.todos.map((todo, i) => {
          if(this.props.typeFlag === null || this.props.typeFlag === todo.flag){
            markAsDoneBtn = (
                <input type="checkbox" checked={todo.flag} onChange={this.markAsDone.bind(this,todo)}/>
            );
            deleteBtn =(
                <button onClick={this.deleteTodo.bind(this,i)}>Delete Me</button>
            )
            return (
              <div>
                     <li key={i}> {markAsDoneBtn}{todo.name} {deleteBtn}</li>
              </div>
            );
          }
        })}
      </ul>
    );
  }
};

class  TodoComponent extends Component  {
 

  componentDidMount() {
    TodoStore.fetchTodos();
    // console.log("did mount::",this.props);
  }
 

  render() {
    return (
      <div>
      <ul>
        <h1>Here Todo</h1>
      </ul>
      <AddNewTodo/>
       <AltContainer store={TodoStore}>
        <AllTodos/>
        <MarkOrUnmark/>
        <hr />
        <SortTodo/>
      </AltContainer>
      
      </div>
    );
  }
};

module.exports = TodoComponent;