import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import PriceingOption from "./Components/PriceingOption";
import ResultChart from "./Components/ResultCharts/ResultChart";
import axios from "axios";
import MarksChart from "./Components/MarksChart/MarksChart";



const pricePromise = fetch('priceingData.json').then(res => res.json())
const marksPromise = axios.get("marksData.json")
function App() {
  return (
    <>
      <header><Navbar></Navbar></header>
      <Suspense fallback={"Data Loading"}>
        <PriceingOption pricePromise={pricePromise}></PriceingOption>
      </Suspense>

      <Suspense fallback={"Data Loading"}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>
      <ResultChart></ResultChart>
    </>
  );
}

export default App;
