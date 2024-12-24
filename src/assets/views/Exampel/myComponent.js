import React from 'react';
class MyComponent extends React.Component {

    /* JSX
     return-> block  
     state thay thay đổi dữ liệu mà không cần phải load lại cả trang
    */
    state = {
        name1: 'hunghahahah',
    }
    handleOnChangeName = (event) => {
        this.setState({
            name1: event.target.value
        })
    }
    handleOnClick = () => {
        console.log("click")
        alert("click")
    }
    render() {

        let name = "hunghhhhh"
        return (
            <>
                <div className="firts">
                    <input value={this.state.name1} type="text" onChange={(event => this.handleOnChangeName(event))}></input>
                    Name:{this.state.name1}</div>
                <div className="second">Name1:{name}</div>
                <div className="third">
                    <button onClick={() => this.handleOnClick()}>click me</button>
                </div>
            </>
        )
    }
}
export default MyComponent;