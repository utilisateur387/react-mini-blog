import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
      <div className="create">
        <h2>Add a New Blog</h2>

        <form>
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
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>

          <button>Add blog</button>
        </form>

        <p>{ title }</p>
        <p>{ body }</p>
        <p>{ author }</p>
      </div>
    )
}

export default Create;
