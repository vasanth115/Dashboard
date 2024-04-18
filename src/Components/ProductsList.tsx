import { Button, Card, Flex, Typography , Image } from 'antd'
import { PlantData } from '../PlantData'


const { Meta} = Card
const ProductsList = () => {
  return (
    <div>
      <Flex align='center' justify='space-between'>
        <Typography.Title level={3} className='primary--color'>
            My Listing
        </Typography.Title>
        <Button type='link' className='grey--color'>View All</Button>
      </Flex>

      <Flex gap="large" align='center'>
        {PlantData.map((plant) => <Card key={plant.id} hoverable className='plant-card'>
            <Image src={plant.picture} style={{width : '130px'}} />
            <Meta title={plant.name} style={{marginTop:"1rem"}}/>
        </Card>)}
      </Flex>
    </div>
  )
}

export default ProductsList
