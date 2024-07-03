import "./App.css";

import { Button } from "@/components/ui/button";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container w-screen bg-slate-600">
        <p className="text-white">home</p>

        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
