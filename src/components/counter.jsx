import { useState } from "react";
import styles from "./counter.module.css";
import styled from "styled-components";

const Btn = styled.button`
  border: none;
  padding: 5px;
  background-color: royalblue;
  color: white;
  margin-left: 5px;
`;
export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncre = () => {
    setCount(count + 1);
  };
  const handleDecre = () => {
    count === 0 ? setCount(0) : setCount(count - 1);
  };
  const onDouble = () => {
    setCount(count * 2);
  };
  return (
    <div>
      <h1 className={count % 2 == 1 ? styles.odd : styles.even}>
        Counter: {count}
      </h1>
      <Btn onClick={handleIncre}>Increase</Btn>
      <Btn onClick={handleDecre}>Decrease</Btn>
      <Btn onClick={onDouble}>Double</Btn>
    </div>
  );
};
