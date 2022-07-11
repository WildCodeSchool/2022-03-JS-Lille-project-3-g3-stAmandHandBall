import { Admin, Resource } from "react-admin";
import UserIcon from "@mui/icons-material/Group";
import { PlayerList, PostEdit, PostCreate } from "./player";
import dataProvider from "./dataProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="players"
        list={PlayerList}
        edit={PostEdit}
        create={PostCreate}
        icon={UserIcon}
      />
    </Admin>
  );
}

export default App;
