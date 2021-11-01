import { useEffect, useState } from "react";
import { getSingleCandidates } from "../../../service/service";
import "./candidInfo.css";

export const Info = (props) => {
  const [info, setInfo] = useState({});
  let n = props.match.params.id;

  useEffect(() => {
    getSingleCandidates(n).then((data) => {
      setInfo(data);
    });
  }, [info]);

  return (
    <div className="container card">
      <div className="row">
        <div className="col-12">
          <p>
            <span>Name:</span>
          </p>
          <p>{info.name}</p>
          <p>
            <span>Email:</span>
          </p>
          <p>{info.email}</p>
          <p>
            <span>Phone:</span>
          </p>
          <p> {info.phone}</p>
          <p>
            <span>Location:</span>
          </p>
          <p>{info.location}</p>
          <p>
            <span>Picture:</span>
          </p>
          <img src={info.picture} alt="image" />

          <p>
            <span>Price:</span>
          </p>
          <p>{info.pricePerHour} $</p>
          <p>
            <span>Technology:</span>
          </p>
          <p>{info.technology}</p>
          <p>
            <span>Description:</span>
          </p>
          <p>{info.descrip}</p>
          <p>
            <span>Expirience:</span>
          </p>
          <p> {info.expirience} years</p>
          <p>
            <span>Language:</span>
          </p>
          <p>{info.nativeLanguage}</p>
          <p>
            <span>LinkedIn:</span>
          </p>
          <p>{info.linkedinProfile}</p>
          <p>
            <span>Status:</span>
          </p>
          <p>{info.status}</p>
        </div>
      </div>
    </div>
  );
};
