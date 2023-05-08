import "./App.css";
import ironhackLogo from "./assets/ironhack-logo.png";
import burger from "./assets/burger.png";
import declarativeImg from "./assets/declarative-img.png";
import componentsImg from "./assets/components-img.png";
import singleWayImg from "./assets/single-way-img.png";
import jsxImg from "./assets/jsx-img.png";

function App() {
	return (
		<div className="App">
			<section className="section-1">
				<nav>
					<img className="logo" src={ironhackLogo} alt="ironhack logo" />
					<img className="logo" src={burger} alt="burger menu logo" />
				</nav>
				<h1>Say hello to ReactJS</h1>
				<p className="intro">
					You will learn how to use the most popular frontend library, and
					become a super Ninja developer.
				</p>
				<button>Awesome!</button>
			</section>
			<section className="section-2">
				<article>
					<img src={declarativeImg} alt="declarative image" />
					<h2>Declarative</h2>
					<p>React makes it painless to create interactive UIs.</p>
				</article>
				<article>
					<img src={componentsImg} alt="components image" />
					<h2>Components</h2>
					<p>Build encapsulated components that manage their state.</p>
				</article>
				<article>
					<img src={singleWayImg} alt="single way image" />
					<h2>Single Way</h2>
					<p>A set of immutable values are passed to component`s.</p>
				</article>
				<article>
					<img src={jsxImg} alt="JSX image" />
					<h2>JSX</h2>
					<p>Statically-typed, designed to run on modern browsers.</p>
				</article>
			</section>
		</div>
	);
}

export default App;
