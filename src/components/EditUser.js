import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [tipe_kamera, settipe_kamera] = useState("");
  const [waktu, setwaktu] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/sewa/${id}`, {
        name,
        tipe_kamera,
        waktu,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/sewa/${id}`);
    setName(response.data.name);
    settipe_kamera(response.data.tipe_kamera);
    setwaktu(response.data.waktu);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
