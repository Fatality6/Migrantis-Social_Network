import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToPropsForRedirect = (state) => ({
    auth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth) { return <Navigate to='/login' /> };

            return <Component {...this.props} />
        }
    }

    return compose(connect(mapStateToPropsForRedirect))(RedirectComponent)
}