import Header from "../components/Header.component";
import SearchForm from "../components/SearchForm.component";
import NewCollection from "../components/NewCollection.component";

const App = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Header />
      <SearchForm />
      <NewCollection />
    </div>
  );
};

export default App;
