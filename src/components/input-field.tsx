import * as React from 'react';
import { Input } from 'antd';
// Types
import { WrappedFieldProps } from 'redux-form';
import { InputProps } from 'antd/lib/input';

export type InputFieldProps = InputProps & WrappedFieldProps;

export class InputField extends React.PureComponent<InputFieldProps> {
  render() {
    const {
      input,
      meta,
      ...rest
    } = this.props;

    return(
      <Input
        {...input}
        {...meta}
        {...rest}
      />
    );
  }
}
