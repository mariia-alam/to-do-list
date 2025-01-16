import TaskCard from "../Components/TaskCard";
import { useSelector } from "react-redux";
export default function CompletedTasks() {
    const tasks = useSelector((state)=>state.todos.todos);
    const completedTasks = tasks.filter((t)=> t.completed === true);

        if(completedTasks && completedTasks.length > 0){
        return (
            completedTasks.map((t)=>(
                <TaskCard completed={t.completed} key={t.id} id={t.id} title={t.title}></TaskCard>
            ))
        );
    }else {
        return  <p>No Completed Todos</p>;
    }
}
