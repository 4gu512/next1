import { useRouter } from "next/dist/client/router";
const seri = () => {
  const seris = [
    { seri: "01", nama: "Fossil" },
    { seri: "02", nama: "G-Shock" },
    { seri: "03", nama: "Casio" },
  ];

  const router = useRouter();
  const { seri } = router.query;
  const data = seri.find((m) => m.seri == seri);
  return (
    <>
      <p>SERI : {seri}</p>
      <p>Nama:{data.nama}</p>
    </>
  );
};
export default seri;
