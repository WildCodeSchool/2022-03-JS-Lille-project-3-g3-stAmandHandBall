import TableAmateurTeam from "@components/Archi/TableAmateurTeam";
import BigPicture from "@components/Archi/BigPicture";
import BigTitle from "@components/Archi/BigTitle";
import SNonProfessional from "./style";

export default function nonProfessional() {
  return (
    <SNonProfessional>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="Amateur" />
      <TableAmateurTeam />
    </SNonProfessional>
  );
}
