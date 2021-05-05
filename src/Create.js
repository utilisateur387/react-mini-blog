import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AUTHORS = ['mario', 'yoshi', 'miebi'];

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState(AUTHORS[0]);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("New blog added");
      setIsPending(false);
      // history.go(-1);
      history.push('/');
    })

  };

  return (
      <div className="create">
        <h2>Add a New Blog</h2>

        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={handleTitleChange}
          />

          <label>Blog body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          >
          </textarea>

          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            {AUTHORS.map((author, index) => (<option value={author} key={index} >{author}</option>) )}
          </select>

          { !isPending && <button>Add blog</button> }
          { isPending && <button disabled>Adding...</button> }
        </form>
      </div>
    )
}

export default Create;
