import { Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";

const AuthForm = ({ authFunction, btnText }) => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState({ message: "" });
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { error } = await authFunction(email, password);
    if (error) {
      setError(error);
      setLoading(false);
    } else {
      navigate("/");
    }
  };

  const handleChange = (value, setState) => {
    setError("");
    setState(value);
  };

  return (
    <Flex
      onSubmit={handleSubmit}
      as="form"
      direction="column"
      p={4}
      gap={4}
      maxW="xl"
      w="full">
      <Input
        onChange={(event) => handleChange(event.target.value, setEmail)}
        type="email"
        placeholder="E-mail Address"
        variant="flushed"
        isRequired
      />
      <Input
        onChange={(event) => handleChange(event.target.value, setPassword)}
        type="password"
        placeholder="Password"
        variant="flushed"
        isRequired
      />
      {error && <p>{error.message}</p>}
      <Button type="submit">{loading ? "Loading..." : btnText}</Button>
    </Flex>
  );
};

export default AuthForm;
