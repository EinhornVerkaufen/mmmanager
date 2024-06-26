import { type FC } from "react";
import { Flex } from "@chakra-ui/react";
import { GreeterText} from "~/features";

const MainHeader: FC = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}mb={4}>
      <Flex flexDirection={"column"}>
        <GreeterText />
      </Flex>
      {/* <NotificationBadge /> */}
    </Flex>
  );
};

export default MainHeader;
