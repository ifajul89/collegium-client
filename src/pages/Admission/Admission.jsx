import AdmissionImg from "../../assets/AdmissionImg.avif";
import { useEffect, useState } from "react";

const Admission = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const handleAdmission = () => {
    console.log("Nothing")
  }

  return (
    <div className="fitting space-top-bottom">
      <div className="bg-gray-100 mx-3 md:mx-0 flex flex-col md:flex-row gap-5 rounded-3xl">
        <div
          style={{
            backgroundImage: `url(${AdmissionImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="py-14 md:w-1/2 rounded-3xl justify-center text-white flex items-center"
        >
          <h4 className="font-semibold text-3xl md:text-5xl">Admission!</h4>
        </div>
        <form
          onSubmit={handleAdmission}
          className="md:w-1/2 p-3 md:p-5 space-y-3"
        >
          <select className="select w-full outline-none focus:outline-none border-none">
            <option disabled selected>
              Please Select Your College
            </option>
            {colleges.map((college) => (
              <option key={college._id}>{college.name}</option>
            ))}
          </select>
          <input
            type="text"
            name="name"
            placeholder="Candidate Name"
            required
            className="input w-full"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="input w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Candidate Email"
            required
            className="input w-full"
          />
          {/* Candidate Phone number, address, date of birth, and image field. */}
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            required
            className="input w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Adress"
            required
            className="input w-full"
          />
          <input
            type="date"
            name="address"
            placeholder="Date of Birth"
            required
            className="input w-full"
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
            className="input w-full"
          />
          {/* {error ? (
            <div className="font-semibold text-red-600 mt-5">{error}</div>
          ) : (
            <div className="font-semibold text-green-600 mt-5">{success}</div>
          )} */}
          <button className="btn rounded-xl w-full mt-5 bg-blue-500 hover:bg-blue-500 text-white font-semibold border-none">
            Admit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admission;
