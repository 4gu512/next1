import SideBars from "./SideBar";

const LayoutJam = ({ children }) => {
  return (
    <>
      <SideBars>{children}</SideBars>
    </>
  );
};

export default LayoutJam;
