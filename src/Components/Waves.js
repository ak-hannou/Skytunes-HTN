import React, {Component} from 'react';

export class Waves extends Component {

    constructor() {
        super();
    }

    render() {
        return(
                <div style={{position: 'absolute', zIndex:0, width: 500}}>
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                <path
                    d="m2,21c-129,2 155,38 252,0c97,-38 247,8 247,8"
                    style={{ stroke: "#000" }}
                    fill="none"
                    strokeWidth='0.25'
                />
                <path
                    d="m0,67c-129,2 155,38 252,0c97,-38 247,8 247,8"
                    style={{ stroke: "#000" }}
                    fill="none"
                    strokeWidth='0.25'
                />
                <path
                    d="m2,44c-129,2 155,38 252,0c97,-38 247,8 247,8"
                    style={{ stroke: "#000" }}
                    fill="none"
                    strokeWidth='0.25'
                />
                </svg>
                </div>
        )
    }

}