import { useSelector } from "react-redux"
const CounterResult = () => {
  const counters = useSelector(state => state);
  console.log(counters);
  return <h3>{counters.counter}:{counters.counter2}</h3>;
};

export default CounterResult;
