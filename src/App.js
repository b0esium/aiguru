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
  const [selected, setSelected] = useState([]);

  function handleClick(e) {
    const selectedMaster = e.target.closest(".master-card").children[0]; // Get the img element
    const selectedMasterName = selectedMaster.alt;
    const selectedMasterParent = selectedMaster.parentElement;

    if (!selected.includes(selectedMasterName)) {
      setSelected([...selected, selectedMasterName]);
      selectedMasterParent.classList.add("selected");
    } else {
      setSelected(selected.filter((master) => master !== selectedMasterName));
      selectedMasterParent.classList.remove("selected");
    }
  }

  function buildQuestion(q) {
    let mastersList = selected.toString();
    let question = `I want you to act as a great spiritual master from now on, a combination of ${mastersList}. You will provide the same wisdom, knowledge and guidance that is found in their teachings and writings. When I ask you a question you will reply as if you are this spiritual master, comparing and contrasting the points of view of ${mastersList}. I am a layperson with a lot to learn. I will ask you questions to improve my understanding of God, reality, the world and myself. Fully immerse yourself into the role of this spiritual master. Keep up the act of being this spiritual master as well as you can. Do not break character. Let’s begin: At this time you (this spiritual master) are teaching under a tree. I came to you, and exchanged greetings with you. When the greetings and polite conversation were over, I sat down to one side and asked you my first question: ${q}`;
    return question;
  }

  // promise for async calls
  function getAnswer(question) {
    return new Promise((resolve) => {
      Answer(question, resolve);
    });
  }

  let answer = undefined;

  // get openAI answer
  async function ask(question) {
    try {
      // openAI
      answer = await getAnswer(question);
    } catch (error) {
      console.log(error);
    }
  }

  async function main(q, question, spinner) {
    await ask(question);
    spinner.remove();
    setTexts([...texts, [q, answer]]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const instructions = document.getElementById("instructions");
    instructions.remove();

    // loading...
    const loader = document.getElementById("loader");
    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border");
    spinner.style.margin = "auto";
    loader.appendChild(spinner);
    loader.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });

    const q = e.target.text.value;
    const question = buildQuestion(q);
    main(q, question, spinner);

    e.target.text.value = "";
  };

  return (
    <Container fluid className="page">
      <MasterAvatars handleClick={handleClick}></MasterAvatars>
      <div id="instructions" className="instructions">
        <h3>Choose one or several masters</h3>
        <h5>(You can change each time)</h5>
        <h3 className="ask">Then ask your first question!</h3>
        <h5>(And follow-ups to engage in conversation)</h5>
        <h6 className="ask">
          Made by{" "}
          <a href="http://twitter.com/b0esium" target="_blank" rel="noreferrer">
            b0esium
          </a>
        </h6>
      </div>
      <Dialog texts={texts}></Dialog>
      <Input handleSubmit={handleSubmit}></Input>
    </Container>
  );
};

export default App;
