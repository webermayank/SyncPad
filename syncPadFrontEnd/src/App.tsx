import conf from "../CONFIG/conf.ts";
import databaseServices from "./appwrite/service.ts";
import MainEditor from "./components/editor/MainEditor.tsx";
import "./App.css";

function App() {
  console.log(conf.appwriteCollectionID);
  return (
  
      <div>
        <h3>Syncpad</h3>
        <MainEditor />
      </div>
    
  );
}

export default App;
