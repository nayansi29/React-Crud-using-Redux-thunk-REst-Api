import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>
            {error}
          </div>
        </div>
      )
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return <div className={className}>
      <label>{label}</label>
      <input {...input} />
      {this.renderError(meta)}
    </div>;
  }
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }
  render() {
    return (
      <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' label="Enter Title" component={this.renderInput} />
        <Field name='description' label="Enter Descripton" component={this.renderInput} />
        <br />
        <button className='ui button primary'>Submit</button>
      </form>
    )
  }
};
const validate = formValues => {
  const errrors = {};
  if (!formValues.title) {
    errrors.title = 'Please Enter a Title';
  }
  if (!formValues.description) {
    errrors.description = "Please Enter description";
  }
  return errrors;
}
export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);