import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import Title from "@components/Archi/Title";
import StaffList from "@components/StaffList";
import Arrow from "@components/Archi/Arrow";
import SStaff from "./style";

export default function Staff() {
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="LES CHEFS DE MEUTE" />
      <SStaff>
        <Title title="BUREAU DIRECTEUR" />
        <Arrow />
        <Title title="CONSEIL D’ADMINISTRATION" />
        <Arrow />
        <Title title="LE SPORTIF" />
        <Arrow />
        <Title title="ADMINISTRATIF" />
        <StaffList />
      </SStaff>
    </>
  );
}
