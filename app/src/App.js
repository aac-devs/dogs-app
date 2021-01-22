// import Card from "./components/card/Card";
import { BreedsProvider } from "./components/context/BreedsContext";
import List from "./components/list/List";

function App() {
  return (
    <div>
      <BreedsProvider>
        {/* <Card breedId={2} /> */}
        <List />
      </BreedsProvider>
    </div>
  );
}

export default App;
