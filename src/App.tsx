
import './App.css';
//./components/login.tsxを使うために追加
import AppBar from './components/AppBar';
import ImageListWithTitleBars from './components/ImageListWithTitleBars';


function App() {
  return (
    <div className="App">
      <AppBar />
      <ImageListWithTitleBars/>
    </div>
  );
}

export default App;
