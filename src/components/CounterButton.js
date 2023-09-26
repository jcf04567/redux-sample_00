import { useDispatch } from "react-redux";
import { add, minus, add2, minus2 } from "../store/modules/counter"

const CounterButton = ({calcType, step}) => {

    const dispatch = useDispatch();

    const clickHandler = () => {
        const action = calcType === '+' ? add(step) : minus(step);
        const action2 = calcType === '+' ? add2(step) : minus2(step);
        dispatch(action);
        dispatch(action2);
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;
