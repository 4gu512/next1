import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const DataJam = ({ data }) => {
  const [message, setMessage] = useState(false);
  const router = useRouter();

  async function hapusKue(seri) {
    try {
      const response = await axios.delete(`http://localhost:5000/seri/${seri}`);
      if (response.data.message) {
        setMessage(response.data.message);
      }
      alert(`Jam dengan nomer seri ${seri} telah dihapus`);
    } catch (error) {
      console.log({ message: error.message });
    }
    router.push(`/admin/datajam`);
  }

  return (
    <div className="container">
      <h3>Data Jam</h3>
      <table className="table table-dark table-stiped table-hover">
        <thead>
          <tr>
            <th>Seri</th>
            <th>Nama</th>
            <th>Warna</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {data.map((jam, idx) => (
            <tr key={idx}>
              <td>{jam.seri}</td>
              <td>{jam.nama}</td>
              <td>{jam.warna}</td>
              <td>{jam.harga}</td>
              <td>
                <div className="d-flex justify-content-between">
                  <Link
                    href={`/admin/updatejamtangan?seri=${jam.seri}
                              &nama=${kue.nama}&warna=${jam.warna}
                              &harga=${mhs.harga}`}
                  >
                    <a>Edit</a>
                  </Link>

                  <button className="btn btn-danger btn-sm" value={jam.seri} onClick={(e) => hapusJam(e.target.value)}>
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DataJam;
