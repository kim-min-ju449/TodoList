import {
    FaMinusCircle,
    FaRegCheckSquare,
    FaRegSquare
} from 'react-icons/fa'
import cn from 'classnames';
import './TodoListItem.css';

const TodoListItem = ({todo, onRemove, onToggle}) =>{
    const {id, text, checked} =todo;
    return(
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ?<FaRegSquare/> : <FaRegCheckSquare/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <FaMinusCircle/>
            </div>
        </div>
    );
};

export default TodoListItem;