import { useLoaderData } from "react-router-dom";

const CollegePage = () => {
  const { _id, image, name, admission_date, events, research_history, sports } =
    useLoaderData();

  console.log(_id);

  return (
    <div className="fitting space-top-bottom flex gap-5">
      <img className="rounded-3xl w-1/2" src={image} alt="" />
      <div className="space-y-2">
        <h3 className="text-4xl font-semibold">{name}</h3>
        <h4 className="text-gray-700 text-lg">Admission Date: {admission_date}</h4>
        <div>
          <h3 className="font-bold text-xl">Events:</h3>
          <div className="grid grid-cols-2 gap-3">
            {events.map((oneEvent, index) => {
              return (
                <div
                  className="p-3 text-xl bg-gray-100 hover:bg-gray-200 border rounded-xl border-gray-300 duration-300 text-gray-800"
                  key={index}
                >
                  <h6 className="font-semibold">{oneEvent.event_name}</h6>
                  <h6>on {oneEvent.date}</h6>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-xl">Researches:</h3>
          <div className="grid grid-cols-2 gap-3">
            {research_history.map((research, index) => {
              return (
                <div
                  className="p-3 text-xl bg-gray-100 hover:bg-gray-200 border rounded-xl border-gray-300 duration-300 text-gray-800"
                  key={index}
                >
                  <h6 className="font-semibold">{research.title}</h6>
                  <h6>on {research.year}</h6>
                </div>
              );
            })}
          </div>
        </div>
        <h5 className="font-semibold text-xl">
          Sports:{" "}
          <span className="text-gray-500 font-normal">{sports.join(", ")}</span>
        </h5>
      </div>
    </div>
  );
};

export default CollegePage;
