import CardStaff from "@components/CardStaff";
import SStaffList from "./style";

export default function StaffList() {
  const staff = [
    {
      name: "name-1",
      function: "function-1",
      img: "./src/assets/pictures/cards/staff/photo.png",
    },
    {
      name: "name-2",
      function: "function-2",
      img: "./src/assets/pictures/cards/staff/photo.png",
    },
    {
      name: "name-3",
      function: "function-3",
      img: "./src/assets/pictures/cards/staff/photo.png",
    },
    {
      name: "name-4",
      function: "function-4",
      img: "./src/assets/pictures/cards/staff/photo.png",
    },
    {
      name: "name-5",
      function: "function-5",
      img: "./src/assets/pictures/cards/staff/photo.png",
    },
    {
      name: "name-6",
      function: "function-6",
      img: "./src/assets/pictures/cards/staff/photo.png",
    },
    {
      name: "name-7",
      function: "function-7",
      img: "./src/assets/pictures/cards/staff/photo.png",
    },
    {
      name: "name-8",
      function: "function-8",
      img: "./src/assets/pictures/cards/staff/photo.png",
    },
  ];

  return (
    <SStaffList>
      {staff.map((member) => {
        return (
          <CardStaff
            key={member.name}
            name={member.name}
            img={member.img}
            function={member.function}
          />
        );
      })}
    </SStaffList>
  );
}
