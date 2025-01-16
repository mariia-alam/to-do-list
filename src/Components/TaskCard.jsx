import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from '../Components/TaskCard.module.css'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'; // استيراد الأيقونة
import { useDispatch } from 'react-redux';
import { taskActions } from '../Redux/taskSlice';

// eslint-disable-next-line react/prop-types
export default function TaskCard({title , id , completed}) {

    const dispatch = useDispatch();


    function handleDelete(){
        dispatch(taskActions.deleteTask(id));
    }
    function handleComplete(){
        dispatch(taskActions.toggleTask(id));
    }
    return (
    <div className={classes.task}>
        {/* <p className={classes.id}>{id}</p> */}
        <div className={classes.card}>
            <label htmlFor="taskCheckbox" className={classes.title}>{title}</label>
            <input
            type="checkbox"
            id="taskCheckbox"
            onChange={handleComplete}
            checked={completed}
            disabled={completed}
            className={classes.checkbox}></input>
            <FontAwesomeIcon icon={faTrashCan} onClick={handleDelete} className={classes.icon} />
        </div>
    </div>
    )
}
