import { Link } from "react-router-dom";
import "./singleCandidate.css";

export const SingleCandidate = ({ data, num }) => {
  const handleClick = () => {
    num(data.id);
  };

  return (
    <div className="row list text-center ">
      <div className="col-3 bor">
        <p>{data.name}</p> <p className="descrip">name</p>
      </div>
      <div className="col-2 bor">
        <p>{data.location}</p>
        <p className="descrip">location</p>
      </div>
      <div className="col-3">
        <p>{data.status}</p> <p className="descrip">status</p>
      </div>
      <div className="col-2">
        <p> {data.nativeLanguage}</p>
        <p className="descrip">language</p>
      </div>
      <Link className="col-1" to={`/info/${data.id}`}>
        <div className="verti">show info</div>
      </Link>
      <div className="col-1 verti">
        <button onClick={handleClick}>X</button>
      </div>
    </div>
  );
};
