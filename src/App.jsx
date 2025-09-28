import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import PriceingOption from "./Components/PriceingOption";



const pricePromise = fetch('priceingData.json').then(res => res.json())

function App() {
  return (
    <>
      <header><Navbar></Navbar></header>
      <Suspense>
        <PriceingOption pricePromise={pricePromise}></PriceingOption>
      </Suspense>
    </>
  );
}

export default App;
