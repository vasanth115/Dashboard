import { Flex, Typography , Avatar } from 'antd'
import Search from "antd/es/input/Search"
import { MessageOutlined , NotificationOutlined , UserOutlined } from '@ant-design/icons'


const HeaderElement = () => {
  return (
    <Flex align='center' justify='space-between'>
      <Typography.Title level={3} type="secondary">
        Welcome Back , Vasanth 
      </Typography.Title>

      <Flex align="center" gap='3rem'>
        <Search placeholder="Search Here..." allowClear/>

        <Flex align="center" gap='10px'>
            <MessageOutlined className='header-icons'/>
            <NotificationOutlined className='header-icons' />
            <Avatar icon={<UserOutlined />} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HeaderElement
