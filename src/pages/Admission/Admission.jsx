import AdmissionImg from "../../assets/AdmissionImg.avif";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://collegium-server.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, [colleges]);

  const handleAdmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.college.value === "") {
      setError("Please Select a College");
      return;
    }
    const selectedCollege = JSON.parse(form.college.value);
    const collegeId = selectedCollege.collegeId;
    const collegeName = selectedCollege.collegeName;
    const candidateName = form.name.value;
    const subject = form.subject.value;
    const candidateEmail = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const date = form.date.value;
    setError("");

    const admissionData = {
      collegeId,
      candidateId: user?.uid,
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
  
      if (response.status === 409) {
        const result = await response.json();
        setError(result.message);
        toast(result.message, {
          style: {
            borderRadius: "10px",
            background: "#dc2626",
            color: "#fff",
          },
        });
        return;
      }
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const result = await response.json();
      if (result) {
        toast("Admission Successful", {
          style: {
            borderRadius: "10px",
            background: "#3b82f6",
            color: "#fff",
          },
        });
        navigate("/");
      }
    } catch (error) {
      setError("Admission Failed");
      toast("Admission Failed", {
        style: {
          borderRadius: "10px",
          background: "#dc2626",
          color: "#fff",
        },
      });
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
            defaultValue=""
          >
            <option value="" disabled>
              Please Select Your College
            </option>
            {colleges.map((college) => (
              <option
                key={college._id}
                value={JSON.stringify({
                  collegeId: college._id,
                  collegeName: college.name,
                })}
              >
                {college.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="name"
            required
            className="input w-full"
            defaultValue={user?.displayName}
            readOnly
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
            defaultValue={user?.email}
            readOnly
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
