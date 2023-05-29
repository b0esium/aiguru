import { useState } from "react";
import { Container } from "react-bootstrap";
// components
import MasterAvatars from "./components/MasterAvatars";
import Dialog from "./components/Dialog";
import Input from "./components/Input";
// API calls
import Answer from "./answer";

const App = () => {
  const [texts, setTexts] = useState([]);

  // promises for async calls

  function getAnswer(question) {
    return new Promise((resolve) => {
      Answer(question, resolve);
    });
  }

  // async calls to APIs

  let answer = undefined;

  // get openAI answer & d-id animation ID
  async function ask(question) {
    try {
      // openAI
      answer = await getAnswer(question);
    } catch (error) {
      console.log(error);
    }
  }

  async function main(question) {
    await ask(question);
    setTexts([...texts, [question, answer]]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const question = e.target.text.value;
    main(question);

    e.target.text.value = "";
  };

  return (
    <Container fluid className="page">
      <MasterAvatars></MasterAvatars>

      <Dialog texts={texts}></Dialog>

      <Input handleSubmit={handleSubmit}></Input>
    </Container>
  );
};

export default App;
