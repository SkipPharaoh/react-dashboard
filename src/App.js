import './App.css';
import Sidebar from './components/Sidebar';
import Rating from "./components/Rating"
import Reviews from "./components/Reviews"
import Sentiment from "./components/Sentiment"
import Visitors from "./components/Visitors"

function App() {
  return (
    <>
    <h1> React Dashboard</h1>
    <div className="App">
      <section className="Sidebar">
        <Sidebar />
      </section>
      <section className="Reviews">
        <Reviews />
      </section>
      <section className="Rating">
        <Rating />
      </section>
      <section className="Sentiment">
        <Sentiment />
      </section>
        <section className="Visitors">
          <Visitors />
        </section>
    </div>
    </>
  );
}

export default App;
