import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuizPage from "./components/quiz/QuizPage";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/quiz">
          <QuizPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
