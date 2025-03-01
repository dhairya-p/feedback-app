import './App.css';
import FeedbackItem from './components/FeedbackItem';
import Header from './components/Header';

function App() {
  const title = 'Feedback App'

  return (
    <>
      <Header text="Hello World" />
      <div className="App">
        <h1>{title}</h1>
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
