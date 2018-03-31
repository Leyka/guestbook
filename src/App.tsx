import * as React from 'react';
import { GuestBookContainer } from './components/guestbook';
import { Layout } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="logo">
            GuestBook
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
