import BaseComponent from "../../core/components/BaseComponent"

export class CounterComponent extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = { no: props.dataNumber }
    }
    render() {
        return <button type="button" onClick={this.onAddBtnClick()}>Add</button>;
    }
    onAddBtnClick() {
        return () => {
            this.setState({ no: this.state.no + 1 });
            this.props.onChange(this.state.no + 1);
        }
    }
}

export default CounterComponent