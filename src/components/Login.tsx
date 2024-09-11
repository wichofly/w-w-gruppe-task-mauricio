import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

const Login = ({ setUser }: any) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser(username);
    navigate('/profile');
  };

  return (
    <Box p={5}>
      <Input
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button colorScheme="blue" onClick={handleLogin} mt={4}>
        Log In
      </Button>
    </Box>
  );
};

export default Login;
