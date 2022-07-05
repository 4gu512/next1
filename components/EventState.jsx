import { useState } from "react";

const EventState = () => {
  const [nama, setnama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tipe, setTipe] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [aksesoris, setAksesoris] = useState(false);
  return (
    <>
      <div className="container m-4">
        <div className="row">
          <div className="col-5">
            <h3>Form Pemesanan</h3>
            <hr />
            <div className="mb-2">
              <label htmlfor="nama">Nama</label>
              <input className="form-control" type="text" name="nama" id="nama" value={nama} onChange={(e) => setnama(e.target.value)} />
            </div>
            <div className="mb-2">
              <label htmlfor="alamat">Alamat</label>
              <input className="form-control" type="text" name="alamat" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="tipe" className="fs-5">
                Tipe
              </label>
              <br />
              <div className="form-check-inline">
                <input type="radio" className="from-check-input" name="tipe" id="tipePria" checked={() => setTipe("Pria")} value="Pria" onChange={(e) => setTipe(e.target.value)} />

                <label className="form-check-label" htmlFor="tipePria">
                  Pria
                </label>
              </div>
              <div className="form-check-inline">
                <input type="radio" className="from-check-input" name="tipe" id="tipeWanita" checked={() => setTipe("Wanita")} value="Wanita" onChange={(e) => setTipe(e.target.value)} />

                <label className="form-check-label" htmlFor="tipeWanita">
                  Wanita
                </label>
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="" className="fs-5">
                Pilih Aksesoris
              </label>
              <select name="aksesoris" id="" className="form-select" value={aksesoris} onChange={(e) => setAksesoris(e.target.value)}>
                <option value="Strap Kulit">Strap Kulit</option>
                <option value="Pelindung Kaca">Pelindung Kaca</option>
                <option value="Baterai">Baterai</option>
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="" className="fs-5">
                Aksesoris
              </label>
              <br />
              <div className="form-check-inline">
                <input type="checkbox" className="form-check-input" name="chkUkuran" id="chkUkuran" checked={ukuran} onChange={(e) => setUkuran(e.target.checked)} />
                <label htmlFor="chkUkuran" className="form-check-label">
                  Ukuran
                </label>
              </div>
            </div>
          </div>

          <div className="col-7">
            <h3>Resume</h3>
            <hr />
            <div>
              <h5 className="mb-2">Nama : {nama}</h5>
            </div>
            <div>
              <h5 className="mb-2">Alamat : {alamat}</h5>
            </div>
            <div>
              <h5 className="mb-2">Tipe :{tipe}</h5>
            </div>
            <div>
              <h5 className="mb-2">Ukuran :{ukuran}</h5>
            </div>
            <div>
              <h5>Aksesoris : {aksesoris ? "Ada" : "-"}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventState;
