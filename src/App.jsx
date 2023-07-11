import "./styles.css";

export const App = () => {
  const onClickButton = () => {
    alert("こんいちじゃ");
  };
  return (
    <>
      <button onClick={onClickButton}>WTF</button>
      <p>What The Fuck</p>
    </>
  );
};
