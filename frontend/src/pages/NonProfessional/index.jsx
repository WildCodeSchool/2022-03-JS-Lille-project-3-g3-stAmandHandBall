import TableAmateurTeam from "@components/Archi/TableAmateurTeam";
import BigPicture from "@components/Archi/BigPicture";
import BigTitle from "@components/Archi/BigTitle";
import SNonProfessional from "./style";

export default function nonProfessional() {
  return (
    <SNonProfessional>
      <BigPicture />
      <BigTitle />
      <TableAmateurTeam />
    </SNonProfessional>
  );
}
