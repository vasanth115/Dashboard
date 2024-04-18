import { Layout , Button , Flex} from "antd"
import { MenuUnfoldOutlined , MenuFoldOutlined } from '@ant-design/icons'
import { useState } from "react"
import SiderBar from "./Components/Sider"
import './App.css'
import HeaderElement from "./Components/HeaderElement"
import MainContent from "./Components/MainContent"
import SideContent from "./Components/SideContent"

const {Header,Sider,Content}=Layout

const App = () => {

  const [collapsed , setcollapsed] = useState(false)
  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}  className="sider">
        <SiderBar />
        <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={()=>setcollapsed(!collapsed)} className="trigger-btn"/>
      </Sider>
      <Layout>
        <Header className="header" >
          <HeaderElement />
        </Header>
        <Content className="content">
          <Flex gap="large">
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
