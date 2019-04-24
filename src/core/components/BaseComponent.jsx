import React from "react";

window.React = React

export class BaseComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    setState(...args) {
        super.setState.apply(this, args);
    }
}

export default BaseComponent;
