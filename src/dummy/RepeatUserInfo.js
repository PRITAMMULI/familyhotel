import React, { useState } from "react";
import { db } from "../firebaseFiles/Config";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

function RepeatUserInfo() {
  const [credentials1, setCredentials1] = useState({
    candidateemail: "",
  });

  const { candidateemail } = credentials1;
  const [credentials, setCredentials] = useState([]);

  console.log(credentials1);
  const onChange = (e) => {
    e.preventDefault();
    setCredentials1({ ...credentials1, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    // Add a new empty object to credentials array

    setCredentials([...credentials, { email: "", username: "" }]);
  };

  const handleChange = (e, i) => {
    const updatedCredentials = [...credentials];
    updatedCredentials[i][e.target.name] = e.target.value;
    setCredentials(updatedCredentials);
  };

  const handleDelete = (i) => {
    const updatedCredentials = [...credentials];
    updatedCredentials.splice(i, 1);
    setCredentials(updatedCredentials);
  };

  const handleSubmit = (e, i) => {
    e.preventDefault();
    // Handle submission logic if needed
    console.log("Submitted:", credentials);
  };
  console.log(credentials);

  //   const handleForm = (candidateemail, candidateCredentiials) => {
  //     console.log("candidateemail", candidateemail)
  //     console.log("candidatecredentials", candidateCredentiials)
  //   }

  const dummy_info_Addition = collection(db, "dummyInfo2");

  const addInfo_dummy = (addDummy_info) => {
    return addDoc(dummy_info_Addition, addDummy_info);
  };
  const handleForm = async (candidateemail, candidateCredentiials) => {
    console.log(candidateemail, candidateCredentiials);

    const add_dummy_info2 = {
      candidateemail,
      candidateCredentiials,
    };

    try {
      await addInfo_dummy(add_dummy_info2);
      alert("all right");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="container">
      <button onClick={handleClick}>Add new</button>

      <form action="">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Candidate Email address
          </label>
          <input
            type="email"
            className="form-control signup-style"
            id="candidateemail"
            name="candidateemail"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <small></small>
        </div>

        {credentials.map((data, i) => (
          <div key={i} className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              {/* <form onSubmit={(e) => handleSubmit(e, i)}> */}
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id={`email${i}`}
                    name="email"
                    value={credentials[i].email}
                    onChange={(e) => handleChange(e, i)}
                    aria-describedby={`emailHelp${i}`}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`username${i}`}
                    name="username"
                    value={credentials[i].username}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button type="button" onClick={() => handleDelete(i)}>
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}

        <button
          onClick={(e) => {
            e.preventDefault();
            handleForm(credentials1.candidateemail, credentials);
          }}
        >
          Confirm the form
        </button>
      </form>
    </div>
  );
}

export default RepeatUserInfo;
