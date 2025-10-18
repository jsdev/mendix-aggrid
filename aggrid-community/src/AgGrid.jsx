import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/AgGrid.css";

export class AgGrid extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
