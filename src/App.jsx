import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">¡Hola, Portafolio!</h1>
    </div>
  );
}

export default App;
