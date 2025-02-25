import React from "react";
import TopicPicker from "./components/TopicPicker";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="my-5 col-xl-6 col-lg-6 col-md-8 col-sm-10">
      <TopicPicker />
    </Container>
  );
}

export default App;
