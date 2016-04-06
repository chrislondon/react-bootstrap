import React, { Component } from 'react';

// TODO REFACTOR this, text, and password components.
export default class extends Component {
    static defaultProps = {
        type: 'text'
    };

    getKey() {
        return this.props.key || this.props.label.toLowerCase().replace(/\W+/g, '-');
    }

    getClassName() {
        let className = "form-group";

        if (this.props.errors) {
            className += ' has-danger';
        }

        return className;
    }

    getInputClassName() {
        let className = "form-control";

        if (this.props.errors) {
            className += ' form-control-danger';
        }

        return className;
    }

    getErrors() {
        return (
            <div>
                {this.props.errors.map((error, index) =>
                    <small key={index} className="text-muted text-help">
                        {error}
                    </small>
                )}
            </div>

        )
    }

    render() {
        return (
            <fieldset className={this.getClassName()}>
                <label className="form-control-label" htmlFor={this.getKey()}>{this.props.label}</label>
                <input type={this.props.type} className={this.getInputClassName()} id={this.getKey()} ref={ this.props.refLink } placeholder={this.props.placeholder}/>
                { this.props.errors ? this.getErrors() : null}
            </fieldset>
        );
    }
}
