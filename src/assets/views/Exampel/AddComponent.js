import React from 'react';
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleOnClick = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing')
            return;
        }

        console.log('data:', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 101),
            title: this.state.title,
            salary: this.state.salary,
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        console.log('>>', this.state)
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">Title:</label><br />
                    <input type="text" value={this.state.title} onChange={(event) => this.handleOnChangeTitle(event)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleOnChangeSalary(event)} /><br /><br />
                    <input type="submit" value="Submit" onClick={(event) => (this.handleOnClick(event))} />
                </form>
            </>
        )
    }
}
export default AddComponent;