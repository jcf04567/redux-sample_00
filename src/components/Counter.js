import CounterResult from "./CounterResult";
import CounterButton from "./CounterButton";

const Counter = () => {
  return (
    <>
      <h2>カウントアップダウン</h2>
      <CounterResult />
      <CounterButton step={2} calcType="+" />
      <CounterButton step={2} calcType="-" />
      <CounterButton step={10} calcType="+" />
      <CounterButton step={10} calcType="-" />
    </>
  );
};
export default Counter;
