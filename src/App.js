import Header from "./components/header/header";
import { AddCandidate } from "./components/main/addCandidates/addCandidates";
import { ListOfCandidates } from "./components/main/listCandidates/listCandidates";
import { Info } from "./components/main/candidateDetails/candidDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/main" component={ListOfCandidates} />
          <Route path="/addCandidate" component={AddCandidate} />
          <Route path="/info/:id" component={Info} />
          <Redirect from="/" to="/main" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
