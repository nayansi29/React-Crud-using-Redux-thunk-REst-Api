import React, { Component } from 'react';
import { signIn, signOut } from '../actions';
import { connect } from 'react-redux';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '350965982634-o0n2mb5n6vra16u752q6hj6n91oe8p2r.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: "streamy",
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  };
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    }
    else {
      this.props.signOut();
    }
  };
  onSignInClick = () => {
    this.auth.signIn();
  }
  onSignOutClick = () => {
    this.auth.signOut();
  }
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }
    else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          <i className='google icon' />Sign Out
        </button>
      )
    }
    else {
      return (
        <button onClick={this.onSignInClick} className='ui red google button'>
          <i className='google icon' />Sign in
        </button>
      )
    }
  }
  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);