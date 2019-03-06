import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";


class Login extends Component {
    render() {
        if(!this.props.ifLogin)
        return (
            <button onClick={this.props.handleLogin}>登录</button>
        )
        else
            return (
                <Redirect to='/'/>
            )
    }
}

const mapStateToProps = (state) => ({
    ifLogin: state.getIn(['login', 'ifLogin'])
});
const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin(){
            const action ={
                type:'login',
                value:true
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

