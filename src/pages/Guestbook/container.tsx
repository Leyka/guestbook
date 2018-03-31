import * as React from 'react';
import { connect } from 'react-redux';
import { GuestBookView } from './components/view';
import { GuestBookState, GuestBookProps } from './types';

export class GuestBook extends React.PureComponent<GuestBookProps> {
  render() {
    return (
      <GuestBookView {...this.props} />
    );
  }
}

function mapStateToProps(state: GuestBookState): Partial<GuestBookProps> {
  return {
    messages: state.messages
  };
}

export const GuestBookContainer = connect(mapStateToProps)(GuestBook);
