import { useState } from "react";
import axios from "axios";

const CreateJam = () => {
  const [seri, setSeri] = useState("");
  const [nama, setNama] = useState("");
  const [warna, setWarna] = useState("");
  const [harga, setHarga] = useState("");

  async function submitHandler(e) {
    try {
      axios
        .post("http://localhost:5000/jam", {
          seri,
          nama,
          warna,
          harga,
        })
        .then((response) => {
          console.log(response);
        });
      alert("penambahan data sukses");
      //clearInput()
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 text-center">Input Jam</h1>
          <div className="w-75">
            <div className="form-floating">
              <input className="form-control mb-2" id="seri" type="text" placeholder="Seri" value={seri} onChange={(e) => setSeri(e.target.value)}></input>
              <label htmlFor="seri">SERI</label>
            </div>
            <div className="form-floating">
              <input className="form-control mb-2" id="nama" type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)}></input>
              <label htmlFor="nama">NAMA</label>
            </div>
            <div className="form-floating">
              <input className="form-control mb-2" id="warna" type="text" placeholder="Warna" value={warna} onChange={(e) => setWarna(e.target.value)}></input>
              <label htmlFor="warna">WARNA</label>
            </div>
            <div className="form-floating">
              <input className="form-control mb-2" id="harga" type="text" placeholder="Harga" value={harga} onChange={(e) => setHarga(e.target.value)}></input>
              <label htmlFor="harga">HARGA</label>
            </div>
          </div>
          <div className="w-75 d-flex flex-row-reverse">
            <button className="btn btn-primary" type="submit">
              SIMPAN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJam;
