import Arrow from "@components/Archi/Arrow";
import BigPicture from "@components/Archi/BigPicture";
import BigTitle from "@components/Archi/BigTitle";
import Title from "@components/Archi/Title";
import StaffList from "@components/StaffList";
import SCoachs from "./style";

export default function Coachs() {
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="Bergers Des Louveteaux" />
      <SCoachs>
        <Title title="FILIERE PRO" />
        <Arrow />
        <Title title="FILIERE FILLES" />
        <Arrow />
        <Title title="FILIERE GARCONS" />
        <Arrow />
        <Title title="FILIERE ENFANTS" />
        <StaffList />
      </SCoachs>
    </>
  );
}
