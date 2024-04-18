import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from "antd"

const SellerList = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex vertical gap='small' className="top-sellers">
        <Flex align="center" justify="space-between">
            <Typography.Title level={5} className="primary--color">Top Sellers</Typography.Title>
          <Button type="link" className="grey--color">View All</Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group maxCount={5} maxPopoverTrigger="click" size='large' maxStyle={{
              color:'#f56a00',
              backgroundColor:"#fde3cf",
              cursor:"progress"
            }}>
              <Tooltip title="user 1" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 2" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 3" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 4" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 5" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 6" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 7" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
            </Avatar.Group>

            <Divider  type="vertical" className="divider"/>

            <Flex vertical >
                  <Typography.Text type="secondary">
                    999 Plantsold
                  </Typography.Text>
                  <Typography.Text type="secondary">
                   100 Sellers
                  </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>

       <Flex vertical gap='small' className="Featured-sellers">
        <Flex align="center" justify="space-between">
            <Typography.Title level={5} className="primary--color">Featured Sellers</Typography.Title>
          <Button type="link" className="grey--color">View All</Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group maxCount={5} maxPopoverTrigger="click" size='large' maxStyle={{
              color:'#f56a00',
              backgroundColor:"#fde3cf",
              cursor:"progress"
            }}>
              <Tooltip title="user 1" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 2" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 3" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 4" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 5" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 6" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 7" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
            </Avatar.Group>

            <Divider  type="vertical" className="divider"/>

            <Flex vertical >
                  <Typography.Text type="secondary">
                    398 Plantsold
                  </Typography.Text>
                  <Typography.Text type="secondary">
                   200 Sellers
                  </Typography.Text>
            </Flex>
          </Flex>
        </Card>
        </Flex>
    </Flex>
  )
}

export default SellerList
