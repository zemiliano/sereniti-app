import { Flex } from "@chakra-ui/react";
import { useLogin } from "../commands/Authentication";
import AuthForm from "../components/common/auth-form";

const Login = () => {
  const login = useLogin();
  return (
    <Flex grow={2} justify="center" align="center">
      <AuthForm authFunction={login} btnText="Log In" />
    </Flex>
  );
};

export default Login;
