import "./styles.css";

export const App = () => {
  const onClickButton = () => {
    alert("い");
  };
  return (
    <>
      <button onClick={onClickButton}>WTF</button>
      <p>What The Fuck</p>
    </>
  );
};
