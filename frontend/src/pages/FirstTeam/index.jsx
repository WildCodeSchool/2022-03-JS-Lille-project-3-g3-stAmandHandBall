import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import Title from "@components/Archi/Title";
import PlayerList from "@components/PlayerList";
import StaffList from "@components/StaffList";
import SFirstTeam from "./style";

export default function FirstTeam() {
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="LES LOUVES" />
      <SFirstTeam>
        <Title title="JOUEUSES" />
        <PlayerList />
        <Title title="STAFF" />
        <StaffList />
      </SFirstTeam>
    </>
  );
}
