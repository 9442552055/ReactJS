import { findDOMNode } from 'react-dom'
import { Modal, Form, Button } from "react-bootstrap"
import BaseComponent from "../../core/components/BaseComponent"

export class LoginComponent extends BaseComponent {
    // static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = { userName: '', password: '', open: !this.props.session.userInfo }

        this.render = this.render.bind(this);
        this.onLoginBtnClick = this.onLoginBtnClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }


    handleClose() {
        if (this.props.session.userInfo) {
            this.setState({ open: false });
        }
    }

    componentDidMount() {
        findDOMNode(this.refs.usernameInput).focus();
    }

    render() {
        const { classes } = this.props;

        return <Modal show={this.state.open} onHide={this.handleClose}>
            <form className="form" name="loginForm">
                <Modal.Header style={{ background: '#0b79fa', color: 'white' }}>
                    <Modal.Title style={{ textAlign: 'center', width: '100%' }}> Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control ref="usernameInput" autoFocus type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref="passwordInput" type="password" placeholder="Password" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" size="md" name="LoginButton" onClick={this.onLoginBtnClick} type="submit" color="primary">Login</Button>
                </Modal.Footer>
            </form>
        </Modal >
    }

    onLoginBtnClick() {
        localStorage.setItem('userInfo', JSON.stringify({ userName: this.refs.usernameInput.value }));
        this.props.session.refreshAuth();
    }
}

export default LoginComponent