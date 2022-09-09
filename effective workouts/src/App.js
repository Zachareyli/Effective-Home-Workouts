import './App.css';
// import Navbar from './components/Navbar';
import  Routes  from './components/Routes/Routes';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Effective Home Workouts</title>
    <link rel="canonical" href="http://mysite.com/example" />
    <meta name="description" content="Effective Home Workouts, for the upper body, lower body with workout diet plans" />
    </Helmet>
    <Routes/>
     </>
  );
}

export default App;
