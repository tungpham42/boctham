import React, { useState } from "react";
import { Row, Col, Form, Button, ListGroup, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle, faCopy, faRedo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const TopicPicker = () => {
  const [topics, setTopics] = useState("");
  const [shuffledTopics, setShuffledTopics] = useState([]);
  const [error, setError] = useState("");
  const [copyMessage, setCopyMessage] = useState(""); // Copy notification

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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage("Đã sao chép!");
      setTimeout(() => setCopyMessage(""), 2000); // Hide message after 2s
    });
  };

  const copyAllTopics = () => {
    const allText = shuffledTopics
      .map((topic, index) => `${index + 1}. ${topic}`)
      .join("\n");
    copyToClipboard(allText);
  };

  const resetForm = () => {
    setTopics("");
    setShuffledTopics([]);
    setError("");
    setCopyMessage("");
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
        <Row>
          <Col xs={12} md={6} className="mt-2 mt-md-2">
            <Button
              className="w-100"
              size="lg"
              variant="primary"
              onClick={shuffleTopics}
            >
              <FontAwesomeIcon icon={faShuffle} className="me-2" />
              Bốc Thăm
            </Button>
          </Col>
          <Col xs={12} md={6} className="mt-2 mt-md-2">
            <Button
              className="w-100"
              size="lg"
              variant="secondary"
              onClick={resetForm}
            >
              <FontAwesomeIcon icon={faRedo} className="me-2" />
              Đặt Lại
            </Button>
          </Col>
        </Row>
      </Form>

      {shuffledTopics.length > 0 && (
        <>
          <ListGroup className="mt-3">
            {shuffledTopics.map((topic, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <span>
                  {index + 1}. {topic}
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="success" className="mt-2" onClick={copyAllTopics}>
            <FontAwesomeIcon icon={faCopy} className="me-2" />
            {copyMessage ? "Đã sao chép" : "Sao chép"}
          </Button>
        </>
      )}

      <a
        href="https://github.com/tungpham42/boctham"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark text-decoration-none mt-3"
      >
        <FontAwesomeIcon icon={faGithub} className="me-1" />
        MIT License
      </a>
    </Card>
  );
};

export default TopicPicker;
