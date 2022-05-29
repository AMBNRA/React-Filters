import ExpeneseItem from './components/ExpeneseItem';
import './App.css';

function App() {
  const expenese = [{
    id: 1,
    title: "Haval",
    amount: 25.2,
    date: new Date(2021, 8, 26)
  },
  {
    id: 2,
    title: "BMW",
    amount: 70.2,
    date: new Date(2019, 3, 210)
  }
]
  return (
    <div className="App">
      <p>Areej</p>
      <ExpeneseItem date={expenese[0].date} title={expenese[0].title} amount={expenese[0].amount}/>
    </div>
  );
}

export default App;
