import React from 'react';
import Input from './Input';


export default class Email extends Input {
    static defaultProps = {
        label: 'Email Address',
        placeholder: 'Enter email',
        type: 'email'
    };
}
