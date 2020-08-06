import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuizPage from "./components/quiz/QuizPage";
import HomePage from "./components/home/HomePage";
import firebase from "./firebase";

function App() {
  if (firebase.messaging.isSupported()) {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        console.log("token: ", token);
        prompt("Firebase Token", token);
      });
  }

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
