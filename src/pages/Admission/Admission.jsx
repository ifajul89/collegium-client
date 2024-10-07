import AdmissionImg from "../../assets/AdmissionImg.avif";
import { useEffect, useState } from "react";

const Admission = () => {
  const [colleges, setColleges] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://collegium-server.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const handleAdmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const collegeName = form.college.value;
    const candidateName = form.name.value;
    const subject = form.subject.value;
    const candidateEmail = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const date = form.date.value;
    setError("");

    if (collegeName === "") {
      setError("Please Select a College");
      return;
    }

    if (candidateName.length < 3) {
      setError("Please Enter a Valid Name");
      return;
    }

    if (subject.length < 3) {
      setError("Please Enter a Valid Number");
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegex.test(candidateEmail) === false) {
      setError("Please Enter a Valid Email Address");
    }

    if (phone.length >= 11) {
      setError("Please Enter a valid Phone Number");
    }

    const admissionData = {
      collegeName,
      candidateName,
      subject,
      candidateEmail,
      phone,
      address,
      date,
    };

    try {
      const response = await fetch("https://collegium-server.vercel.app/admissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admissionData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      // Optionally, you can reset the form or show a success message here
    } catch (error) {
      console.error("Error sending admission data:", error);
      setError("Failed to submit admission data");
    }
  };

  return (
    <div className="fitting space-top-bottom">
      <div className="bg-gray-100 md:mx-0 flex flex-col md:flex-row gap-5 rounded-3xl">
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
          <select
            name="college"
            className="select w-full outline-none focus:outline-none border-none"
          >
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
            name="date"
            placeholder="Date of Birth"
            required
            className="input w-full"
          />
          {error && (
            <div className="font-semibold text-red-600 mt-5">{error}</div>
          )}
          <button className="btn rounded-xl w-full mt-5 bg-blue-500 hover:bg-blue-500 text-white font-semibold border-none">
            Admit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admission;
