import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

import classnames from 'classnames';
import {connect} from 'react-redux';
import {registeruser} from '../../actions/authAction';
import TextFieldGroup from '../common/TextFieldGroup'
class Register extends Component {
    constructor() {
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            password2:'',
            errors:{}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    componentDidMount(){
      if(this.props.auth.isAuthenticated)
      {
        this.props.history.push('/dashboard');
      }
    }
    
    componentWillReceiveProps(nextProps){
      if(nextProps.errors){
        this.setState({errors:nextProps.errors});
      }
    }



    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const newUser={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2
        };

        this.props.registeruser(newUser,this.props.history);

}
    render() {
      const {errors} = this.state; 
      

        return (
            
  <div className="register">
    
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your DevConnector account</p>
          <form onSubmit={this.onSubmit}>
          <TextFieldGroup
           placeholder="name"
           name="name"
           value={this.state.name}
           onChange={this.onChange}
           error={errors.name}
           />
            <TextFieldGroup
           placeholder="email"
           name="email"
           type="email"
           value={this.state.email}
           onChange={this.onChange}
           error={errors.email}
           info="this site uses gravatar"
           />
            <TextFieldGroup
           placeholder="password"
           name="password"
           type="passowrd"
           value={this.state.password}
           onChange={this.onChange}
           error={errors.password}
           />
           
           <TextFieldGroup
           placeholder="confirm password"
           name="password2"
           type="passowrd"
           value={this.state.password2}
           onChange={this.onChange}
           error={errors.password2}
           />
           
           
            <input formNoValidate type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
        )
    }
}

// Register.PropTypes = {
//   registeruser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

const mapStateToProps = (state)=>({
  auth:state.auth,
  errors:state.errors
});
export default connect(mapStateToProps,{registeruser})(withRouter(Register));