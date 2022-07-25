import { Admin, Resource, EditGuesser } from "react-admin";
import UserIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import AdjustIcon from "@mui/icons-material/Adjust";
import HistoryIcon from "@mui/icons-material/History";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsIcon from "@mui/icons-material/Sports";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FeedIcon from "@mui/icons-material/Feed";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
import { NewListTeam, NewEditTeam, NewCreateTeam } from "./team";
import {
  NewListOpponent,
  NewEditOpponent,
  NewCreateOpponent,
} from "./opponent";
import { NewListHistory, NewEditHistory, NewCreateHistory } from "./history";

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
        icon={AdminPanelSettingsIcon}
      />
      <Resource
        name="calendar"
        list={NewListCalendar}
        edit={NewEditCalendar}
        create={NewCreateCalendar}
        icon={CalendarMonthIcon}
      />
      <Resource
        name="staff"
        list={NewListStaff}
        edit={NewEditStaff}
        create={NewCreateStaff}
        icon={ManageAccountsIcon}
      />
      <Resource
        name="role"
        list={NewListRole}
        edit={NewEditRole}
        create={NewCreateRole}
        icon={WorkIcon}
      />
      <Resource
        name="referee"
        list={NewListReferee}
        edit={NewEditReferee}
        create={NewCreateReferee}
        icon={SportsIcon}
      />
      <Resource
        name="team"
        list={NewListTeam}
        edit={NewEditTeam}
        create={NewCreateTeam}
        icon={GroupsIcon}
      />
      <Resource
        name="opponent"
        list={NewListOpponent}
        edit={NewEditOpponent}
        create={NewCreateOpponent}
        icon={AdjustIcon}
      />
      <Resource
        name="history"
        list={NewListHistory}
        edit={NewEditHistory}
        create={NewCreateHistory}
        icon={HistoryIcon}
      />
    </Admin>
  );
}

export default App;
