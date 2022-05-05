import {
    FaMinusCircle,
    FaRegCheckSquare,
    FaRegSquare
} from 'react-icons/fa'
import cn from 'classnames';
import './TodoListItem.css';

const TodoListItem = ({todo}) =>{
    const {text, checked} =todo;
    return(
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})}>
                {checked ?<FaRegSquare/> : <FaRegCheckSquare/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <FaMinusCircle/>
            </div>
        </div>
    );
};

export default TodoListItem;