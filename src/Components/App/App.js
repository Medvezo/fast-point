import "./App.css";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Bonus from "../Bonus/Bonus";
import LogoCloud from "../LogoCloud/LogoCloud";
import Pricing from "../Pricing/Pricing";
import Stats from "../Stats/Stats";
import About from "../About/About";
import Support from "../Support/Support";
import Contact from "../Contact/Contact";
import FAQ from "../FAQ/FAQ";

function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Hero />
			<About />
			<Stats />
			<FAQ />
			<Pricing />
			<Bonus />
			<Support />
			<Contact />
			<LogoCloud />
			<Footer />
		</div>
	);
}

export default App;
