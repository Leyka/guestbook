import * as React from 'react';
import { Card } from 'antd';
import { Message, GuestBookProps } from '../types';

import '../styles/messages.scss';

export class GuestBookMessages extends React.PureComponent<GuestBookProps> {
  render() {
    const {
      messages
    } = this.props;

    return (
      <section className="messages">
        <h2>Our Guest Book</h2>
        {messages && messages.map(toCard)}
      </section>
    );
  }
}

function toCard (message: Message) {
  return (
    <Card title={message.name}>
      {message.content}
    </Card>
  );
}
