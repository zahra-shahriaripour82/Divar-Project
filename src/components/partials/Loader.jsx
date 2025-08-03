import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        strokeWidth="5"
        strokeColor="grey"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}

export default Loader;
