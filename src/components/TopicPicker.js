import React, { useState } from "react";
import { Container, Form, Button, ListGroup, Card } from "react-bootstrap";

const TopicPicker = () => {
  const [topics, setTopics] = useState("");
  const [shuffledTopics, setShuffledTopics] = useState([]);

  const shuffleTopics = () => {
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
    <Container className="mt-4">
      <Card className="p-3">
        <h3>Bốc Thăm Nhóm Chủ Đề</h3>
        <Form>
          <Form.Group>
            <Form.Label>
              Nhập danh sách nhóm chủ đề (mỗi dòng một chủ đề)
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={topics}
              onChange={(e) => setTopics(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" className="mt-2" onClick={shuffleTopics}>
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
      </Card>
    </Container>
  );
};

export default TopicPicker;
