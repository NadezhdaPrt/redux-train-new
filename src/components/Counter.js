import { useDispatch, useSelector } from 'react-redux';
import {inc, dec, rnd} from '../actions';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button className="btn btn-primary" onClick={() => dispatch(dec())}>DEC</button>
            <button className="btn btn-primary" onClick={() => dispatch(inc())}>INC</button>
            <button className="btn btn-primary" onClick={() => dispatch(rnd())}>RND</button>
        </div>
    )
}
/* const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
} */

/* export default connect(mapStateToProps, actions)(Counter); */
export default Counter;