import React from 'react';

import PropTypes from 'prop-types';

const authState = {
    isLoading: false,
    userInfo: null,
    error: null,
    refreshAuth: () => true
};

const { Provider, Consumer } = React.createContext(authState);

class AuthProvider extends React.Component {
    constructor() {
        super();
        this.toggleLoading = this.toggleLoading.bind(this);
        this.fetchSuccess = this.fetchSuccess.bind(this);
        this.fetchFail = this.fetchFail.bind(this);
        this.refreshAuth = this.refreshAuth.bind(this);
        this.state = { ...authState, refreshAuth: this.refreshAuth };
        setTimeout(() => this.refreshAuth(), 100);
    }
    componentDidMount() {
        if (this.props.authUrl) {
            return this.fetchInfo();
        }
        return Promise.reject();
    }
    toggleLoading() {
        this.setState({ ...this.state, isLoading: true, userInfo: null, error: null });
    }
    fetchSuccess(data) {
        this.setState({ ...this.state, userInfo: data, isLoading: false, error: null });
    }
    fetchFail(err) {
        this.setState({ ...this.state, userInfo: null, isLoading: false, error: err });
    }
    refreshAuth() {
        this.fetchInfo();
    }
    fetchInfo() {
        const userInfoString = localStorage.getItem('userInfo');
        try {
            this.setState({ ...this.state, userInfo: JSON.parse(userInfoString), isLoading: false, error: '' });
        }
        catch (e) {
            console.error(e);
        }
        //return Promise.resolve()
    }
    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        );
    }
}

AuthProvider.propTypes = {
    authUrl: PropTypes.string.isRequired,
    reqOptions: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ]),
    children: PropTypes.node
};

export default { AuthProvider, SessionConsumer: Consumer };