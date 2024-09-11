import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Login from './components/Login';
import Profile from './components/Profile';
import { useState } from 'react';
import Posts from './components/Posts';

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([
    {
      username: 'mauricio01',
      posts: [
        {
          id: 1,
          title: 'First Day Learning React',
          content: "Today I started learning React. It's quite interesting!",
          date: '2023-09-10',
        },
        {
          id: 2,
          title: 'Understanding State in React',
          content:
            'State management in React is powerful, but takes a bit to get used to.',
          date: '2023-09-11',
        },
      ],
    },
    {
      username: 'jane_doe',
      posts: [
        {
          id: 3,
          title: 'Exploring Vite and Chakra UI',
          content:
            'Vite makes development really fast, and Chakra UI is awesome for styling!',
          date: '2023-09-09',
        },
        {
          id: 4,
          title: 'Hooks in React',
          content: 'Hooks are so powerful, love useEffect and useState.',
          date: '2023-09-10',
        },
      ],
    },
    {
      username: 'john_smith',
      posts: [
        {
          id: 5,
          title: 'JavaScript Tips',
          content:
            'Learned some cool JavaScript tricks like destructuring and the spread operator.',
          date: '2023-09-08',
        },
        {
          id: 6,
          title: 'Backend vs Frontend',
          content:
            'Interesting how frontend development is so visual, while backend feels more logical.',
          date: '2023-09-09',
        },
      ],
    },
  ]);

  const addPost = (newPost) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      const userIndex = updatedUsers.findIndex(
        (u) => u.username === user
      );
      if (userIndex !== -1) {
        updatedUsers[userIndex].posts.push(newPost);
      }
      console.log(updatedUsers);
      return updatedUsers;
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route
          path="/posts"
          element={<Posts users={users} addPost={addPost} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
