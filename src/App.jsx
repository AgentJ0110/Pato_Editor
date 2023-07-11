import "./styles.css";

export const App = () => {
  const onClickButton = () => {
    alert("こんにちは");
  };
  return (
    <>
      <button onClick={onClickButton}>WTF</button>
      <p>What The Fuck</p>
    </>
  );
};
