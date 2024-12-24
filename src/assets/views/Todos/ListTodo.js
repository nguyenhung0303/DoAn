import React from 'react';
import AddTodo from './AddTodo';
class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'watching TV' },
            { id: 'todo2', title: 'watching girl' },
            { id: 'todo3', title: 'play game' }
        ],
        editTodo: {}
    }
    addTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
    }
    deleteTodo = (todo) => {
        let currenTodo = this.state.listTodo
        currenTodo = currenTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodo: currenTodo
        })
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo]
            let objIndex = listTodoCopy.findIndex(item => item.id === todo.id);
            listTodoCopy[objIndex].title = editTodo.title
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodo, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        return (
            <div className='todo-container'>
                <AddTodo addTodo={this.addTodo} />
                {listTodo && listTodo.length > 0 &&
                    listTodo.map((item, index) => {
                        return (
                            <div className='todo-child' key={item.id}>
                                {isEmptyObj === true ?
                                    <span>{index + 1}-{item.title}</span>
                                    :
                                    <>
                                        {editTodo.id === item.id ?
                                            <span><input onChange={(event) => { this.handleOnChangeEditTodo(event) }} value={editTodo.title} /></span>
                                            :
                                            <span>{index + 1}-{item.title}</span>
                                        }
                                    </>

                                }
                                <button onClick={() => { this.handleEditTodo(item) }}>
                                    {isEmptyObj === false && editTodo.id === item.id ? 'save' : 'edit'}
                                </button>
                                <button onClick={() => this.deleteTodo(item)}>delete</button>
                            </div>
                        )
                    })

                }
            </div>
        )
    }
}
export default ListTodo