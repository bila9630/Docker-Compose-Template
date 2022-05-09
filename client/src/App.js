function App() {
  let flask_url = "http://localhost:5001/"
  let express_url = "http://localhost:5002/"

  const response_flask = async () => {
    let response = await fetch(flask_url, {
      method: "GET",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data)
  }

  const response_express = async () => {
    let response = await fetch(express_url, {
      method: "GET",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data)
  }

  return (
    <div className="App">
      <p>Hello World! 2</p>
      <button onClick={() => response_flask()}>Get request to flask</button>
      <button onClick={() => response_express()} >Get request to express</button>
    </div>
  );
}

export default App;
