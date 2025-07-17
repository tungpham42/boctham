import MainBrandLogo from "./components/MainBrandLogo";
import TopicPicker from "./components/TopicPicker";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container className="my-5 d-flex justify-content-center">
      <MainBrandLogo
        logoSrc="/soft-logo.webp"
        mainDomain="soft.io.vn"
        dismissible={false}
        altText="Logo Soft"
      />
      <div className="w-100" style={{ maxWidth: "700px" }}>
        <TopicPicker />
      </div>
    </Container>
  );
};

export default App;
