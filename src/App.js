import { Layout, Menu, Breadcrumb ,Pagination ,Card  } from 'antd';
import { useState,useEffect } from 'react';
import 'antd/dist/antd.css';
import './App.css';
const { Meta } = Card;

const { Header, Content, Footer } = Layout;
function App() {
  const [data, setData] = useState([])

  const [current, setCurrent] = useState(1)

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/collections?page=${current}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`)
    .then(res => res.json())
    .then(result => setData([...result.results]))
  }, [current])


  const onChange = page => {
    setCurrent(page);
  };

  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {new Array(3).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        {console.log(data)}
        {data? data.map((obj)=> {

          return( 
          
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={obj.preview_photos[1].urls.regular} />}
          >
            <Meta title="Europe Street beat" description={obj.title} />
          </Card>

          )




        }):null}

      <Pagination current={current} onChange={onChange} total={300} />

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>

  );
}

export default App;
