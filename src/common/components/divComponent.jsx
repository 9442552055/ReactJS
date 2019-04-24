import BaseComponent from "../../core/components/BaseComponent"
import react from 'react'

export class DivComponent extends BaseComponent {

    constructor(props) {
        super(props)
    }
    render() {
        return <div>{this.props.childComponents}</div>;
    }

}

export default DivComponent