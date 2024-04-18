import { Flex } from "antd"
import ContentSideBar from "./ContentSideBar"
import Activities from "./Activities"

const SideContent = () => {
  return (
    <Flex vertical gap="2.3rem" style={{width:300 }}>
       <ContentSideBar />
       <Activities />
    </Flex>
  )
}

export default SideContent
