import { useState } from 'react';

function Add() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the post data to the backend here
    console.log({ title, body });
  };

  return (
    <div style={styles.container}>
      <h1>Add a New Post</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={styles.input}
        />
        
        <label style={styles.label}>Body</label>
        <textarea 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '18px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    height: '150px',
  },
  button: {
    backgroundColor: '#0073e6',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default Add;
