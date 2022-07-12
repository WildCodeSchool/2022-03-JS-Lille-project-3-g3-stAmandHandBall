import { Admin, Resource } from "react-admin";
import UserIcon from "@mui/icons-material/Group";
import FeedIcon from "@mui/icons-material/Feed";
import { PlayerList, PostEdit, PostCreate } from "./player";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import { NewList, NewEdit, NewCreate } from "./new";
import { NewListAdmin, NewCreateAdmin } from "./admin";

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
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
      <Resource
        name="admin"
        list={NewListAdmin}
        create={NewCreateAdmin}
        icon={FeedIcon}
      />
    </Admin>
  );
}

export default App;
