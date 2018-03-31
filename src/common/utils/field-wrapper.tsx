import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

/**
 * Wrap the given component, maps 'input' and 'meta' props in order
 * to be used in <Field> component provided by Redux-form library
 */
export function wrapForReduxField<P>(Component: new(...args: any[]) => React.Component<P, any>) {

  type AllProps = P & WrappedFieldProps;

  return (props: AllProps) => {
    return (
      <Component
        {...props.input}
        {...props}
      />
    );
  };
}
