import React from 'react';
import Input from './Input';


export default class extends Input {
    static defaultProps = {
        label: 'Password',
        placeholder: 'Enter password',
        type: 'password'
    };
}