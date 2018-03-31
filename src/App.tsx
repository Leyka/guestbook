import * as React from 'react';
import { GuestBookContainer } from './components/guestbook';
import { Layout, Icon } from 'antd';
import './App.scss';

const { Header, Content, Footer } = Layout;

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="logo">
            <Icon type="book"  />
            <span>GuestBook</span>
          </Header>
          <Content className="content">
            <GuestBookContainer />
          </Content>
          <Footer className="footer">
            GuestBook is using React/Redux with TypeScript
          </Footer>
        </Layout>
      </div>
    );
  }
}
