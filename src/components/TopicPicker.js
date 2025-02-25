import React, { useState } from "react";
import { Form, Button, ListGroup, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const TopicPicker = () => {
  const [topics, setTopics] = useState("");
  const [shuffledTopics, setShuffledTopics] = useState([]);
  const [error, setError] = useState("");

  const shuffleTopics = () => {
    if (!topics.trim()) {
      setError("Vui lòng nhập ít nhất một chủ đề.");
      return;
    }

    setError(""); // Clear error if input is valid

    let topicArray = topics
      .split("\n")
      .map((topic) => topic.trim())
      .filter((topic) => topic);

    for (let i = topicArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [topicArray[i], topicArray[j]] = [topicArray[j], topicArray[i]];
    }

    setShuffledTopics(topicArray);
  };

  return (
    <Card className="p-3 shadow-lg">
      <h1 className="h3">Bốc Thăm Nhóm Chủ Đề</h1>
      <Form className="d-flex flex-column">
        <Form.Group>
          <Form.Label>
            Nhập danh sách nhóm chủ đề (mỗi dòng một chủ đề)
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
            isInvalid={!!error}
          />
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Form.Group>
        <Button
          size="lg"
          variant="primary"
          className="mt-2"
          onClick={shuffleTopics}
        >
          <FontAwesomeIcon icon={faShuffle} className="me-2" />
          Bốc Thăm
        </Button>
      </Form>
      {shuffledTopics.length > 0 && (
        <ListGroup className="mt-3">
          {shuffledTopics.map((topic, index) => (
            <ListGroup.Item key={index}>
              {index + 1}. {topic}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <a
        href="https://github.com/tungpham42/boctham"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "1.1rem", width: "fit-content" }}
        className="text-dark text-decoration-none mt-3"
      >
        <FontAwesomeIcon icon={faGithub} className="me-1" />
        MIT License
      </a>
    </Card>
  );
};

export default TopicPicker;
