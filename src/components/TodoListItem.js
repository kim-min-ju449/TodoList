import {
    FaMinusCircle,
    FaRegCheckSquare,
    FaRegSquare
} from 'react-icons/fa'
import './TodoListItem.css';

const TodoListItem = () =>{
    return(
        <div className="TodoListItem">
            <div className="checkbox">
                <FaRegSquare/>
                <div className="text">할일</div>
            </div>
            <div className="remove">
                <FaMinusCircle/>
            </div>
        </div>
    );
};

export default TodoListItem;