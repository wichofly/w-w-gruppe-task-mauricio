import { Box, Heading, Text } from '@chakra-ui/react';

const Profile = ({ user }: any) => {
  if (!user) return <Text p={5}>You are not logged in...</Text>;

  return (
    <Box mt={2} p={5}>
      <Heading>{user}</Heading>
    </Box>
  );
};

export default Profile;
