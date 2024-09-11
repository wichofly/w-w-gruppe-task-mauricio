import {
  Box,
  Heading,
  Text,
  VStack,
  StackDivider,
  Input,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';

const Posts = ({ users, addPost }) => {
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const setTitle = (e) => setNewPost({ ...newPost, title: e.target.value });
  const setContent = (e) => setNewPost({ ...newPost, content: e.target.value });
  return (
    <Box mt={2} p={5}>
      <Box>
        <Input
          placeholder="Title"
          value={newPost.title}
          fontSize="2xl"
          fontWeight="bold"
          mb={4}
          onChange={setTitle}
        />
        <Input
          placeholder="Content"
          value={newPost.content}
          fontSize="2xl"
          fontWeight="bold"
          mb={4}
          onChange={setContent}
        />
      </Box>
      <Button colorScheme="teal" mb={8} onClick={() => addPost(newPost)}>
        Add Post
      </Button>

      <VStack
        spacing={8}
        align="stretch"
        divider={<StackDivider borderColor="gray.200" />}
      >
        {users.map((user) => {
          return user.posts.map((post) => {
            return (
              <Box
                key={post.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={6}
              >
                <Heading size="md" mb={2}>
                  {post.title}
                </Heading>
                <Text mb={4}>{post.content}</Text>
                <Text fontWeight="bold" color="teal.600">
                  Author: {user.username}
                </Text>
              </Box>
            );
          });
        })}
      </VStack>
    </Box>
  );
};

export default Posts;
