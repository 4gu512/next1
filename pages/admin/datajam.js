import LayoutJam from "../../components/admin/LayoutJam";
import DataJam from "../../components/admin/DataJam";
import JamBySeri from "../../components/admin/JamBySeri";

const datajam = ({ data }) => {
  {
    Array.isArray(data) ? (data = data) : (data = [data]);
  }
  return (
    <LayoutJam>
      <JamBySeri />
      <DataJam data={data} />
    </LayoutJam>
  );
};
export async function getServerSideProps({ query }) {
  const seri = query.seri;
  let url = `http://localhost:5000/jam`;
  if (typeof seri === "string") {
    url = `http://localhost:5000/seri/${seri}`;
  }
  //fetch data
  const res = await fetch(url);
  const data = await res.json();

  return { props: { data } };
}

export default datajam;
