import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../../components/Card/Card';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default App;