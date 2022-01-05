import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Loading({disabled}) {
  return (
    <>
      <Loader
        type="Rings"
        color="#FFFFFF"
        height={40}
        width={40}
        visible={disabled}
      />
      <Loader
        type="Rings"
        color="#FFFFFF"
        height={40}
        width={40}
        visible={disabled}
      />
      <Loader
        type="Rings"
        color="#FFFFFF"
        height={40}
        width={40}
        visible={disabled}
      />
    </>
  );
}
