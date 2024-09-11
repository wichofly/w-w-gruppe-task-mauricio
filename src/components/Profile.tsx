import { Box, Heading } from '@chakra-ui/react';

const Profile = ({ user }: any) => {
  if (!user) return <div>You are not logged in...</div>;

  return (
    <Box>
      <Heading>{user}</Heading>
    </Box>
  );
};

export default Profile;
