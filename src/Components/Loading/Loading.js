import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Loading({disabled}) {
  return (
    <>
      <Loader
        type="ThreeDots"
        color="#FFFFFF"
        height={30}
        width={30}
        visible={disabled}
      />
    </>
  );
}
