import { Flex } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children }) => {
  return <Flex minH="100vh">{children}</Flex>;
};

export default Layout;
