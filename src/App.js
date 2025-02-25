import React from "react";
import TopicPicker from "./components/TopicPicker";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="mt-4 col-md-6">
      <TopicPicker />
    </Container>
  );
}

export default App;
