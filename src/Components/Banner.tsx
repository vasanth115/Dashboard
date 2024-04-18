import { Button, Card, Flex, Typography } from "antd"

const Banner = () => {
  return (
    <Card style={{padding:'20px', height:260}}>
      <Flex vertical gap='30px'>
        <Flex vertical align="flex-start">
            <Typography.Title level={2} style={{fontWeight:"bold"}}>
                Create And Sell Products
            </Typography.Title>
            <Typography.Text type="secondary" style={{fontWeight:"bold"}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis harum alias eum similique error pariatur a nostrum, ducimus voluptates quod dignissimos omnis laboriosam aliquam quaerat nihil! Enim corporis dolorem placeat?
            </Typography.Text>
        </Flex>

        <Flex gap="large">
            <Button type="primary" size="large">Explore More</Button>
            <Button size="large">Top Sellers</Button>
        </Flex>
      </Flex>
    </Card>
  )
}

export default Banner
