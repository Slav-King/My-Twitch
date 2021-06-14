import React, { Component , Fragment} from 'react'
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component { 
    
    renderError ({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {   
        // console.log(formProps);
        const classname = `field ${formProps.meta.error && formProps.meta.touched ? "error" : ""}`
        // console.log(formProps.meta); 
        return (
            // <input onChange={formProps.input.onChange} value={formProps.input.value} />
            <div className={classname}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div>
        )
    }
    
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render () {
        return (
            <Fragment>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui error form">
                    <Field name="title" component={this.renderInput} label="Enter title"/>
                    <Field name="description" component={this.renderInput} label="Enter Description" />
                    <button className="ui button primary"> Submit </button>
                </form>
            </Fragment>
        )
    }
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = "You must enter a title";
    }

    if(!formValues.description) {
        errors.description = "You must enter a description";
    }

    return errors;
}


export default reduxForm({
    form: "streamForm",
    validate
})(StreamForm);
