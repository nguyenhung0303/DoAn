import React from 'react';
import bgr from '../../image/bgr.png';
import { connect } from 'react-redux';

class Home extends React.Component {
    handleOnClickDeleteUs = (user) => {
        this.props.deleteUserRedux(user)
    }
    render() {
        console.log('>>check:', this.props)
        let { dataRedux } = this.props
        return (
            <>
                <div class="home">
                    <img src={bgr} alt=""></img>
                </div>
                <div>
                    {dataRedux && dataRedux.length > 0 &&
                        dataRedux.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1}-{item.name}<button onClick={() => { this.handleOnClickDeleteUs(item) }}>x</button>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
const mapStateToPorps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),

    }
}
export default connect(mapStateToPorps, mapDispatchToProps)(Home)