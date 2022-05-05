import { FaPlus } from 'react-icons/fa';
import './TodoInsert.css';

const TodoInsert = () =>{
    return(
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요"/>
            <button type="submit">
                {<FaPlus/>}
            </button>
        </form>
    );
};

export default TodoInsert;