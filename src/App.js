import React from "react";
import TopicPicker from "./components/TopicPicker";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="my-5 col-xl-8 col-lg-8 col-md-8 col-sm-10 col-12">
      <TopicPicker />
    </Container>
  );
}

export default App;
