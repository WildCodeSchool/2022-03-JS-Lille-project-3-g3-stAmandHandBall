import CardCalendar from "@components/CardCalendar";
import Title from "@components/Archi/Title";
import SCalendar from "./style";

export default function Calendar() {
  const dates = [
    {
      id: 1,
      month: "SEPTEMBRE 2022",
      day: 1,
      hit: "ligue-butagaz",
      date: "3 SEPT",
      hour: "19H30",
      place: "domicile",
      club1: "SAH-PH",
      club2: "TOULON",
      result: "-",
    },
    {
      id: 2,
      month: "SEPTEMBRE 2022",
      day: 2,
      hit: "ligue-butagaz",
      date: "7 SEPT",
      hour: "20H30",
      place: "exterieur",
      club1: "TOULON",
      club2: "SAH-PH",
      result: "20 - 29",
    },
    {
      id: 3,
      month: "OCTOBRE 2022",
      day: 3,
      hit: "ligue-butagaz",
      date: "10 OCT",
      hour: "12H30",
      place: "domicile",
      club1: "SAH-PH",
      club2: "TOULON",
      result: "10 - 12",
    },
  ];

  let uniqueMonth = [];
  function unique() {
    for (let i = 0; i < dates.length; i += 1) {
      uniqueMonth.push(dates[i].month);
    }
  }
  unique();
  uniqueMonth = [...new Set(uniqueMonth)];

  return (
    <SCalendar>
      {uniqueMonth.map((month) => {
        return (
          <div>
            <Title title={month} />
            {dates
              .filter((date) => date.month === month)
              .map((date) => {
                return (
                  <div>
                    <CardCalendar
                      key={date.id}
                      month={date.month}
                      day={date.day}
                      hit={date.hit}
                      date={date.date}
                      hour={date.hour}
                      place={date.place}
                      club1={date.club1}
                      club2={date.club2}
                      result={date.result}
                    />
                  </div>
                );
              })}
          </div>
        );
      })}
    </SCalendar>
  );
}
