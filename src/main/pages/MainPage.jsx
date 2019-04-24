import BaseComponent from "../../core/components/BaseComponent"
import CounterComponent from "../../app/components/CounterComponent"
import DivComponent from "../../common/components/divComponent"
import HeadingComponent from "../../common/components/headingComponent"


export class MainPage extends BaseComponent {
    constructor(props) {
        super(props)
        this.no = 1;
    }
    onStateChange() {
        const me = this;
        return (no) => {
            //this.setState({ no: no });
            me.refs.heading.setText(me.getText(no))
        }
    }
    getText(no) {
        return `Hello World from React. No: ${no} `
    }

    getChildren() {
        return [<CounterComponent key="CounterComponent0" dataNumber={this.no} onChange={this.onStateChange()} ></CounterComponent>,
        <HeadingComponent ref="heading" key="HeadingComponent1" text={this.getText(this.no)}> </HeadingComponent>]
    }

    render() {
        return <DivComponent childComponents={this.getChildren()}></DivComponent>;
    }
}

export default MainPage