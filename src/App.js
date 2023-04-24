import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Download from './components/Download';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';
function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
	  const timer = setTimeout(() => {
		setIsLoading(false);
	  }, 2000);
  
	  return () => clearTimeout(timer);
	}, []);
	if(isLoading){
		return(
			<div className='loading'>
				<svg viewBox="25 25 50 50">
				  <circle r="20" cy="50" cx="50"></circle>
				</svg>
			</div>
		)
	}
	return (
		<div className="App">
			<Home />
			<Features />
			<Screenshots />
			<Download />
			<Contact />
			<Header />
		</div>
	);
}

export default App;
