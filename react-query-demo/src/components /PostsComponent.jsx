// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

// Fetch function to get posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Use the useQuery hook to fetch posts
  const { data: posts, error, isLoading, refetch } = useQuery('posts', fetchPosts);

  // Display loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Display error state
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
