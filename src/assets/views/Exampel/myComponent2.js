import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent2 extends React.Component {
    state = {
        arrjob: [
            { id: 'jb1', title: 'dev', salary: '300' },
            { id: 'jb2', title: 'tesst', salary: '330' },
            { id: 'jb3', title: 'ba', salary: '340' }
        ]
    }
    addNewJob = (job) => {
        console.log('>>>check:', job)
        // let currenjob = this.state.arrjob
        // currenjob.push(job)
        this.setState({
            arrjob: [...this.state.arrjob, job]
            // arrjob: currenjob
        })
    }
    deleteAJob = (job) => {
        let currenjob = this.state.arrjob
        currenjob = currenjob.filter(item => item.id !== job.id)
        this.setState({
            arrjob: currenjob
        })
    }
    render() {
        console.log('>>', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}

                />
                <ChildComponent
                    name={'hung'}
                    age={'23'}
                    arrjob={this.state.arrjob}
                    deleteAJob={this.deleteAJob}

                />

            </>
        )
    }
}
export default MyComponent2;