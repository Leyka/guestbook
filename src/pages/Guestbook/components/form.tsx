import * as React from 'react';
import { Button, Icon } from 'antd';
import { Form, Field, reduxForm, InjectedFormProps } from 'redux-form';
import { InputField, TextAreaField } from '../../../common/fields/'; // <== TODO: Fix path
import { GuestBookProps } from '../types';
import '../styles/form.scss';

export type GuestBookFormProps = GuestBookProps & InjectedFormProps<{}, GuestBookProps>;

export class GuestBookFormBase extends React.PureComponent<GuestBookFormProps> {
  render() {
    const {
      sendMessage
    } = this.props;

    return (
      <Form onSubmit={sendMessage}>
        <h2>Leave us a feedback <Icon type="heart-o"/></h2>
        <Field
          name="name"
          component={InputField}
          placeholder="Your Name"
        />
        <Field
          name="content"
          component={TextAreaField}
          placeholder="Type your comment here"
          className="comment"
        />
        <Button size="large" type="primary" htmlType="submit">
          Send
        </Button>
      </Form>
    );
  }
}

export const GuestBookForm = reduxForm<{}, {}>({
  form: 'GuestBookForm'
})(GuestBookFormBase);
