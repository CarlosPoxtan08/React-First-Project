import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main className="main-content">
        <AppRouter />
      </main>
    </div>
  );
}

export default App;