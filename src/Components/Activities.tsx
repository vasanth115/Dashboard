import { Flex ,Typography , Button , List, Avatar } from "antd"


const data = [
    {
        name : "Vimal Raj",
        orderTime : 2
    },
    {
        name : "Sutharsan",
        orderTime : 3
    },
    {
        name : "Pradeep",
        orderTime : 6
    },
    {
        name : "Vasanth",
        orderTime : 1
    },
    {
        name : "SakthiVel",
        orderTime : 5
    },
    {
        name : "PrithivRaj",
        orderTime : 1
    },
    {
        name : "Prabakaran",
        orderTime : 2
    },
    {
        name : "Vimal",
        orderTime : 5
    },
    {
        name : "Praveen",
        orderTime : 9
    }
]
const Activities = () => {
  return (
    <Flex vertical gap='small'>
      <Flex align="center" justify="space-between" gap="large">
      <Typography.Title level={3} className='primary--color'>
            Recent Activites
        </Typography.Title>
        <Button type='link' className='grey--color'>View All</Button>
      </Flex>

      <List  pagination={{ pageSize: 5 }} dataSource={data} renderItem={(user,index)=>(
        <List.Item>
            <List.Item.Meta avatar={
                <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />
            } title={<a href="">{user.name}</a>} description="Ordered a new Plant"></List.Item.Meta>
            <span>{user.orderTime} {user.orderTime == 1 ? 'day ago' : 'days ago'}</span>
        </List.Item>
      )}/>
    </Flex>
  )
}

export default Activities
