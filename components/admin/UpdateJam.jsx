import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UpdateJam = () => {
  const [_seri, setSeri] = useState("");
  const [_nama, setNama] = useState("");
  const [_warna, setWarna] = useState("");
  const [_harga, setHarga] = useState("");

  const router = useRouter();
  const { seri, nama, warna, harga } = router.query;

  useEffect(() => {
    if (typeof seri == "string") {
      setSeri(seri);
    }
    if (typeof nama == "string") {
      setNama(nama);
    }
    if (typeof warna == "string") {
      setWarna(warna);
    }
    if (typeof harga == "string") {
      setHarga(harga);
    }
  }, [seri, nama, warna, harga]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      axios
        .put(`http://localhost:5000/jam/${_seri}`, {
          seri: _seri,
          nama: _nama,
          warna: _warna,
          harga: _harga,
        })
        .then((response) => {
          console.log(response);
        });

      alert("Update Data Sukses");
      Router.push(`/admin/datajam`);
    } catch (e) {
      console.log({ message: e.message });
    }
  };
  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 font-bold text-center mb-3">Edit data Jam</h1>
          <div className="w-75">
            <div className="form-floating">
              <input className="form-control mb-2" id="seri" type="text" placeholder="SERI" value={_seri} onChange={(e) => setSeri(e.target.value)} />
              <label htmlFor="seri">SERI</label>
            </div>

            <div className="form-floating">
              <input className="form-control mb-2" id="nama" type="text" placeholder="nama" value={_nama} onChange={(e) => setNama(e.target.value)} />
              <label htmlFor="nama">Nama</label>
            </div>

            <div className="form-floating">
              <input className="form-control mb-2" id="warna" type="text" placeholder="warna" value={_warna} onChange={(e) => setWarna(e.target.value)} />
              <label htmlFor="warna">Warna</label>
            </div>

            <div className="form-floating">
              <input className="form-control mb-2" id="harga" type="text" placeholder="HARGA" value={_harga} onChange={(e) => setHarga(e.target.value)} />
              <label htmlFor="harga">Harga</label>
            </div>

            <div className="d-flex flex-row-reverse">
              <button className="btn btn-primary" type="submit">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateJam;
