import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

import AppFooter from './components/common/AppFooter';
import AppHeader from './components/common/AppHeader';
import HomePage from './pages/HomePage';
import PropertyListPage from './pages/PropertyListPage';
import './App.css';


const {Header, Content, Footer } = Layout


// Bring all templates defined in components and pages dir
function App() {
  return (
    <Router>
      <Layout className="main-layout">

        <Header>
          <AppHeader />
        </Header>

        <Content>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/properties" component={PropertyListPage} />
        </Content>

        <Footer>
          <AppFooter />
        </Footer>

      </Layout>
    </Router>
  );
}

export default App;
