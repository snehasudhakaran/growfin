import logo from './logo.svg';
import './App.css';
import ContentSection from './components/content';
import HeaderComponent from './components/header';
import BannerComponent from './components/banner';
import EarlyCustomersComponent from './components/earlycustomer';
import ExperienceSection from './components/experiencesection';
import SecureSection from './components/secureSection';
import CardSection from './components/cardSection';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <BannerComponent/>
      <EarlyCustomersComponent/>
      <ExperienceSection/>
       <ContentSection/>
       <SecureSection/>
       <CardSection/>
       <Footer/>
    </div>
  );
}

export default App;
