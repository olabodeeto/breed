import "./App.css";
import Header from "./components/Header";
import Index from "./pages/indexModule/Index";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Index />
      </main>
    </>
  );
}

export default App;
