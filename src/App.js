import React from "react";
import TopicPicker from "./components/TopicPicker";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="my-5 col-md-6 col-sm-8">
      <TopicPicker />
    </Container>
  );
}

export default App;
