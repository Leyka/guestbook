import * as React from 'react';
import { Row, Col } from 'antd';
import { GuestBookProps } from '../types';
import { GuestBookForm } from './form';
import { GuestBookMessages } from './messages';

import '../styles/view.scss';

export class GuestBookView extends React.PureComponent<GuestBookProps> {
  render() {
    return (
      <Row className="root">
        <Col span={10}>
          <GuestBookForm />
        </Col>
        <Col span={14}>
          <GuestBookMessages {...this.props}/>
        </Col>
      </Row>
    );
  }
}
