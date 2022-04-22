import styled from "styled-components";
import TitleImg from "./title.png";
import BackgroundImg from "./background.jpg";
import { useState } from "react";
import { dbService } from "./fBase";
import { collection, addDoc } from "firebase/firestore";
function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onTextChange = (e) => {
    setText(e.target.value);
  };
  const onClick = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, `survey`), {
      name,
      text,
    });
    // await dbService.doc(`survey/${name}`).update({
    //   text,
    // });
    setName("");
    setText("");
  };
  return (
    <div className="App">
      <Background>
        <a href="https://.pngtree.com/free-backgrounds"></a>
      </Background>
      <AppTitle>
        무엇이든 물어봐!
        <img src={TitleImg} />
      </AppTitle>
      <Form>
        <input value={name} onChange={onNameChange} placeholder="너의 이름" />
        <textarea
          value={text}
          onChange={onTextChange}
          placeholder="교생쌤에게 물어보고 싶은 것, 하고 싶은 말, 뭐든 자유롭게!"
        />
        <button onClick={onClick}>제출</button>
      </Form>
    </div>
  );
}

export default App;

const AppTitle = styled.div`
  top: 10%;
  text-align: center;
  font-size: 20pt;
  font-weight: 600;
  img {
    width: 50px;
    position: relative;
    top: 15px;
  }
  font-family: "Quicksand";
`;
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-size: cover;
  background-image: url(${BackgroundImg});
  opacity: 0.5;
  z-index: -10;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border-radius: 2em;
  margin: 5em auto;
  width: 50vw;
  height: 50vh;
  background-color: #ffc5c5;
  input {
    position: relative;
    width: 85%;
    border: none;
    border-bottom: solid #ff8f8f 2px;
    background-color: transparent;
    text-align: center;
    color: #ff5757;
    padding: 1em;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #ff5757;
      text-align: center;
      font-family: "Quicksand";
      font-weight: 500;
    }
  }
  textarea {
    padding: 2em;
    font-family: "Quicksand";

    background-color: transparent;
    resize: none;
    border: none;
    width: 50vw;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #ff5757;
      text-align: center;
      font-family: "Quicksand";
      font-weight: 500;
    }
  }
  button {
    border-radius: 1em;
    background-color: #ff5757;
    color: white;
    border: none;
    padding: 0.5em;
  }
`;
