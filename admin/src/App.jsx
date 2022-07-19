import { Admin, Resource, EditGuesser } from "react-admin";
import UserIcon from "@mui/icons-material/Group";
import FeedIcon from "@mui/icons-material/Feed";
import { PlayerList, PostEdit, PostCreate } from "./player";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import { NewList, NewEdit, NewCreate } from "./new";
import { NewListAdmin, NewCreateAdmin } from "./admin";
import {
  NewListCalendar,
  NewEditCalendar,
  NewCreateCalendar,
} from "./calendar";
import { NewListStaff, NewEditStaff, NewCreateStaff } from "./staff";
import { NewListRole, NewEditRole, NewCreateRole } from "./role";
import { NewListReferee, NewEditReferee, NewCreateReferee } from "./referee";

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
        edit={EditGuesser}
        create={NewCreateAdmin}
        icon={FeedIcon}
      />
      <Resource
        name="calendar"
        list={NewListCalendar}
        edit={NewEditCalendar}
        create={NewCreateCalendar}
        icon={FeedIcon}
      />
      <Resource
        name="staff"
        list={NewListStaff}
        edit={NewEditStaff}
        create={NewCreateStaff}
        icon={FeedIcon}
      />
      <Resource
        name="role"
        list={NewListRole}
        edit={NewEditRole}
        create={NewCreateRole}
        icon={FeedIcon}
      />
      <Resource
        name="referee"
        list={NewListReferee}
        edit={NewEditReferee}
        create={NewCreateReferee}
        icon={FeedIcon}
      />
    </Admin>
  );
}

export default App;
