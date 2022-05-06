import {useState, useCallback} from 'react';
import { FaPlus } from 'react-icons/fa';
import './TodoInsert.css';

const TodoInsert = ({onInsert}) =>{
    const [value, setValue] = useState('');

    const onChange = useCallback(e =>{
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e =>{
            onInsert(value);
            setValue('');

            e.preventDefault();
        },
        [onInsert, value],
    );


    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요"
            value={value}
            onChange={onChange}/>
            <button type="submit">
                {<FaPlus/>}
            </button>
        </form>
    );
};

export default TodoInsert;