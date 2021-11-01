import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Prime Hiring</h1>
          </div>
          <div className="col-6">
            <div className="row justify-content-end">
              <div className="col-3 my-2">
                <Link to="/main">
                  <button>Candidates List</button>
                </Link>
              </div>
              <div className="col-3 my-2">
                <Link to="/addCandidate">
                  <button>Add Candidate</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
