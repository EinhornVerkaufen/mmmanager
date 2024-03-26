import { type FC } from "react";
import { Flex } from "@chakra-ui/react";
import { GreeterText, NotificationBadge } from "~/features";

const MainHeader: FC = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Flex flexDirection={"column"}>
        <GreeterText />
      </Flex>
      <NotificationBadge />
    </Flex>
  );
};

export default MainHeader;