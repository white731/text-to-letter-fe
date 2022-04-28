import './App.css';

function App() {

  const handleSubmit = (e) =>{
    e.preventDefault()
    alert(e.target.value)
  }
  return (
    <div className="App">
      <img src="/ttl_logo2.PNG" alt="logo"/> 
      <h1>Send a Letter Now</h1>
      <form>
        <label onSubmit={(e)=>handleSubmit(e)}>Phone Number</label>
        <input type="text"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
