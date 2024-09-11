import { Box, Flex, Link, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link
            as={RouterLink}
            to="/"
            color="white"
            fontSize="lg"
            fontWeight="bold"
          >
            W&W Gruppe
          </Link>
        </Box>

        
        <HStack spacing={8} alignItems="center">
          <Link as={RouterLink} to="/feed" color="white">
            Feed
          </Link>
          <Link as={RouterLink} to="/profile" color="white">
            Profile
          </Link>
          <Link as={RouterLink} to="/" color="white">
            Login
          </Link>
          <Link as={RouterLink} to="/posts" color="white">
            Posts
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
