import React from 'react';
class ChildComponent extends React.Component {
    state = {
        showJob: false
    }
    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        }
        )
    }
    handleOnClickDelete = (job) => {
        console.log('check item:', job)
        this.props.deleteAJob(job);
    }
    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age, arrjob } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showJob=true' : 'showJob=false';
        // let a = '';
        console.log(check)
        return (
            <>
                <div>Component: {name}-{age}</div>
                {showJob === false ?
                    <div> <button onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        <div className='ListJob'>
                            {

                        /*a=*/  arrjob.map((item, index) => {

                                return (

                                    <div key={item.id}>
                                        {item.title}-{item.salary}<> </><span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                    </div>
                                )

                            })
                            }
                            {/* {console.log('check', a)} */}
                        </div>
                        <div> <button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}
// const ChildComponent = (props) => {
//     let { arrjob } = props
//     
//     return (
//         <>
//             <div className='ListJob'>
//                 {
//                 /*a=*/  arrjob.map((item, index) => {
//                     return (
//                         <>
//                             <div><button>Show</button></div>
//                             <div key={item.id}>
//                                 {item.title}-{item.salary}
//                             </div>
//                             <div><button>Hide</button></div>
//                         </>
//                     )
//                 })
//                 }
//                 {/* {console.log('check', a)} */}
//             </div>

//         </>
//     )
// }
export default ChildComponent;