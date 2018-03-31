import * as React from 'react';
import { Row, Col } from 'antd';
import { GuestBookForm } from './form';
import { GuestBookComments } from './comments';
import './view.css';

export interface GuestBokViewProps {}

export class GuestBookView extends React.PureComponent<GuestBokViewProps> {
  render() {
    return (
      <Row className="root">
        <Col span={16}>
          <GuestBookComments />
        </Col>
        <Col span={8}>
          <GuestBookForm />
        </Col>
      </Row>
    );
  }
}
