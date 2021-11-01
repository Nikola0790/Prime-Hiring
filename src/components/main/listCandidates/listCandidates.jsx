import { useState, useEffect } from "react";
import { getCandidates } from "../../../service/service";
import { SingleCandidate } from "../singleCandidate/singleCandidate";
import { deleteCandidate } from "../../../service/service";
import "./listCandidates.css";

export const ListOfCandidates = () => {
  const [candidatesData, setCandidatesData] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    getCandidates().then((data) => {
      setCandidatesData(data);
    });
    deleteCandidate(id);
  }, [candidatesData, id]);

  if (candidatesData.length === 0) {
    return <p>LOADING</p>;
  } else {
    return candidatesData.map((item, index) => {
      return (
        <div className="container">
          <SingleCandidate data={item} num={setId} key={index} />
        </div>
      );
    });
  }
};
