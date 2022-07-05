import { useRouter } from "next/dist/client/router";
import { useState } from "react";

const JamBySeri = () => {
  const [seri, setSeri] = useState("");
  const router = useRouter();
  const getJamBySeri = (e) => {
    e.preventDefault();
    router.push({
      pathname: "dataJam",
      query: { seri: seri },
    });
  };
  return (
    <div className="container">
      <form onSubmit={getJamBySeri}>
        <div className="row">
          <div className="col-8"></div>
          <div className="col d-flex flex-reverse">
            <input type="text" className="form-control" placeholder="Cari By nomer seri" value={seri} onChange={(e) => setSeri(e.target.value)}></input>
            <input type="submit" value="Cari" className="btn btn-success ms-2 fs-6"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JamBySeri;
