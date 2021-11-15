import Start from './components/Start'

function App() {
  const title = "Netflix Original Series"
  const contentsList = ["Stranger Things","My Name", "Squid Game", "House Of Cards", "You", "Sex Education"]
  return (
    <div className="App">
      <Start contents={contentsList} title={title}/>
    </div>
  );
}

export default App;
