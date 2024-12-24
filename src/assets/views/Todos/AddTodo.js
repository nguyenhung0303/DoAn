import React from 'react';
import { toast } from 'react-toastify';
class AddTodo extends React.Component {

    state = {
        title: '',
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        }
        )
    }
    handleOnClickAdd = () => {
        if (!this.state.title) {
            alert("missting")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 101),
            title: this.state.title
        }
        this.props.addTodo(todo)
        this.setState({
            title: '',
        })
        toast.success("Wow so easy!")

    }
    render() {
        return (
            <div className='todo-content'>
                <input value={this.state.title} onChange={(event) => this.handleOnChangeTitle(event)}></input>
                <button onClick={() => this.handleOnClickAdd()}>add</button>
            </div>
        )
    }
}
export default AddTodo