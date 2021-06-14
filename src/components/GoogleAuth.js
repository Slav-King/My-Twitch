import React, {Component} from 'react'
import { signIn , signOut } from "../actions";
import { connect } from "react-redux";

class GoogleAuth extends Component {
    
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "996022732690-25mk892bs9haur8i1uo9494o720ig9c7.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }   else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton () {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return <button onClick={this.onSignOutClick} className="ui red google button"> 
                <i className="google icon" />
                Sign out
            </button>
        } else {
            return <button onClick={this.onSignInClick} className="ui red google button">
                <i className="google icon" />
                Sign in with google
            </button> 
        }
    };

    render () {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
};


export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
