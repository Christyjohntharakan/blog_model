import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/postService';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Blog Posts</h1>
      <div style={styles.postList}>
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map(post => (
            <div key={post.id} style={styles.postCard}>
              <h2><Link to={`/post/${post.id}`} style={styles.postTitle}>{post.title}</Link></h2>
              <p>{post.body.slice(0, 100)}...</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  postList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  postCard: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  postTitle: {
    color: '#0073e6',
    textDecoration: 'none',
  },
};

export default Home;
