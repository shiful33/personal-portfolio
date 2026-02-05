import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import './i18n.jsx';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2/3 second after loader stope
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <main>
          {/* Main portfolio content */}
          <App />
        </main>
      )}
    </div>
  );
}

export default App;