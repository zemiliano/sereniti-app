import { Flex } from "@chakra-ui/react";
import React from "react";
import { useSignUp } from "../commands/Authentication";
import AuthForm from "../components/common/auth-form";

const SignUp = () => {
  const signUp = useSignUp();
  return (
    <Flex grow={2} justify="center" align="center">
      <AuthForm authFunction={signUp} btnText="Get Started" />
    </Flex>
  );
};

export default SignUp;
