import BaseComponent from "../../core/components/BaseComponent";
import LoginComponent from "../../auth/components/LoginComponent";
import '../css/home.css'
import homeimg from '../assets/background_home.png'
import AuthContext from "../../auth/contexts/AuthContext";


export class HomePage extends BaseComponent {
    constructor(props) {
        super(props);
        this.getContent = this.getContent.bind(this);
    }

    getContent(session) {
        console.log(session);
        return session.userInfo ? (
            <div>
                Hi {session.userInfo.userName}!
            </div>
        ) : (<LoginComponent session={session}></LoginComponent>);
    }

    getHeaderStyle() {
        return {
            background: '#0b79fa',
            color: 'white',
            fontFamily: 'monospace'
        }

    }

    render() {
        return <div className="home"><img src={homeimg}></img>
            <div style={this.getHeaderStyle()}><h1>Workflow Tool</h1></div>
            <AuthContext.SessionConsumer>
                {this.getContent}
            </AuthContext.SessionConsumer>
        </div>;
    }
}

export default HomePage