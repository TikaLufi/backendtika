import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [tipe_kamera, settipe_kamera] = useState("");
  const [waktu, setwaktu] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/sewa", {
        name,
        tipe_kamera,
        waktu,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">tipe_kamera</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tipe_kamera}
                onChange={(e) => settipe_kamera(e.target.value)}
                placeholder="tipe_kamera"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">waktu</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={waktu}
                onChange={(e) => setwaktu(e.target.value)}
                placeholder="waktu"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
