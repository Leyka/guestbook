import * as React from 'react';
import { Form, Button, Icon } from 'antd';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { InputField, TextAreaField } from '../../../common/fields/'; // <== TODO: Fix path
import '../styles/form.scss';

export type GuestBookFormProps = InjectedFormProps<{}, {}>;

export class GuestBookFormBase extends React.PureComponent<GuestBookFormProps> {
  render() {
    return (
      <Form>
        <h2>Leave us a feedback <Icon type="heart-o"/></h2>
        <Field
          name="name"
          component={InputField}
          placeholder="Your Name"
        />
        <Field
          name="last_name"
          component={TextAreaField}
          placeholder="Type your comment here"
          className="comment"
        />
        <Button size="large" type="primary">
          Send
        </Button>
      </Form>
    );
  }
}

export const GuestBookForm = reduxForm<{}, {}>({
  form: 'GuestBookForm'
})(GuestBookFormBase);
