import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHeader from './component/common/header';
import AppFooter from './component/common/footer';
import Home from './view/Home';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
          <Home/>
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>      
    </Layout>
  );
}

export default App;
