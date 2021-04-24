const Home = (props) => {

  const handleClick = () => {
    console.log(`Hello, ${props.name}!`, props);
  }

  const handleClickAgain = (name, e) => {
    console.log(`Hello, ${name}!`, e.target);
  }

  return (
    <div className="home">
      <h1>Homepage</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("Miebi", e)}>Click me</button>
    </div>
  );
}

export default Home;
