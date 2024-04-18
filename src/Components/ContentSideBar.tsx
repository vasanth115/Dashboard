import { Card, Flex , Typography , Image } from 'antd'
import plant from '../assets/image2.png'

const ContentSideBar = () => {
  return (
    <div>
      <Card className='card'>
        <Flex vertical gap="large">
            <Typography.Title level={4}>
                Today <br /> 5 Orders
            </Typography.Title>
            <Typography.Title level={4}>
                This Month <br /> 325 Orders
            </Typography.Title>
        </Flex>
        <Image src={plant} alt='Plant' style={{
            position:"absolute",
            bottom:-50,
            left:120,
            height:'300px',
            width:'175px'
        }}/>
      </Card>
    </div>
  )
}

export default ContentSideBar
