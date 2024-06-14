import './App.css';
import Header from './components/Header/Header.jsx';
import Header1 from './components/Header1/Header1.jsx';
import Programs from './components/Programs/Programs';
import Plans from './components/Plans/Plans';
import View from './components/View/View';
import Infrastructure from './components/Infrastructure/Infrastructure';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Transformations from './components/Transformations/Transformations';
import background13 from "./assets/background13.jpeg";


function App() {
  return (
    <div className="App"> 
          <div className="background_image set_margin" >
            <img className='back_img' src={background13} alt="" />
          </div>
          <Header1/>
          <Header/>  
          <Programs/> 
          <Transformations/> 
          <Plans/> 
          <Infrastructure/> 
          <View/> 
          <Join/> 
          <Footer/>

       
      </div>


  );

}

export default App;












