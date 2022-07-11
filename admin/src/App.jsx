import { Admin, Resource } from "react-admin";
import UserIcon from "@mui/icons-material/Group";
import FeedIcon from "@mui/icons-material/Feed";
import { PlayerList, PostEdit, PostCreate } from "./player";
import dataProvider from "./dataProvider";
import { NewList, NewEdit, NewCreate } from "./new";

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
      <Resource
        name="news"
        list={NewList}
        edit={NewEdit}
        create={NewCreate}
        icon={FeedIcon}
      />
    </Admin>
  );
}

export default App;
