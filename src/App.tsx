import { NavigationMenuDemo } from "./components/MainNav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavigationMenuDemo isLoggedIn={true} />
      {/* this is the herosection */}
      <Home/>
    </>
  );
}

export default App;
