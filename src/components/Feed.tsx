import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import { Box, Text } from '@chakra-ui/react';

const Feed = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const { data } = await fetchPosts();
      setPosts(data);
    };
    loadPosts();
  }, []);

  return (
    <Box>
      {posts.map((post) => (
        <Box key={post.id} p={5} shadow="md" borderWidth="1px">
          <Text mt={4}>{post.title}</Text>
          <Text mt={4}>{post.body}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Feed;
