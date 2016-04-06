import React, { Component } from 'react';

export class Alert extends Component {
    static defaultProps = {
        type: 'danger'
    };

    getInterjection() {
        switch (this.props.type) {
            case 'success':
                return 'Well Done!';
            case 'info':
                return 'Heads Up!';
            case 'warning':
                return 'Warning!';
            case 'danger':
                return 'Oh Snap!';
        }
    }

    render() {
        const className = 'alert alert-' + this.props.type;

        return (
            <div className={className} role="alert">
                <strong>{this.getInterjection()}</strong> { this.props.children }
            </div>
        );
    }
}

export class AlertList extends Component {
    static defaultProps = {
        type: 'danger',
        errors: []
    };

    render() {
        return (
            <div>
                {this.props.errors.map((error, index) =>
                    <Alert key={index} type={this.props.type}>{ error }</Alert>
                )}
            </div>
        );
    }
}
