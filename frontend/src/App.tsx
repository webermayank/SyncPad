
import databaseServices from "../../backend/init/appwrite/service.ts";
import conf from "../../backend/init/CONFIG/conf.ts";
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
