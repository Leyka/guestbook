import * as React from 'react';
import { Form, Field, reduxForm, InjectedFormProps } from 'redux-form';
import { InputField } from '../../../components/input-field'; // <== TODO: Fix path

export type GuestBookFormProps = InjectedFormProps<{}, {}>;

export class GuestBookFormBase extends React.PureComponent<GuestBookFormProps> {
  render() {
    return (
      <Form>
          <Field
            name="first_name"
            component={InputField}
          />
          <Field
            name="last_name"
            component={InputField}
          />
      </Form>
    );
  }
}

export const GuestBookForm = reduxForm<{}, {}>({
  form: 'GuestBookForm'
})(GuestBookFormBase);
