import BaseComponent from "../../core/components/BaseComponent"
import react from 'react'

export class HeadingComponent extends BaseComponent {
    constructor(props) {
        super(props)
        this.state = { text: props.text }
    }

    render() {
        return <h1 >{this.state.text}</h1>;
    }

    setText(text) {
        this.setState({ text: text });
    }
}

export default HeadingComponent