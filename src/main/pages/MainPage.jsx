
import "react-bootstrap"
import BaseComponent from "../../core/components/BaseComponent"
// import CounterPage from "../../app/pages/CounterPage"
import HomePage from "../../app/pages/HomePage"
import AuthContext from "../../auth/contexts/AuthContext"

export class MainPage extends BaseComponent {
    constructor(props) {
        super(props)
    }

    render() {
        // return <CounterPage></CounterPage>;
        return <AuthContext.AuthProvider authUrl="api/session-management/session-info"> <HomePage></HomePage></AuthContext.AuthProvider>;
    }
}

export default MainPage