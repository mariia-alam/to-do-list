import { useSelector } from "react-redux"
import TaskCard from "../Components/TaskCard";

export default function IncompleteTasks(){
    const tasks = useSelector((state)=>state.todos.todos);
    const incompletedTasks = tasks.filter((t)=> t.completed !== true);

        if(incompletedTasks && incompletedTasks.length > 0){
        return (
            incompletedTasks.map((t)=>(
                <TaskCard key={t.id} id={t.id} title={t.title}></TaskCard>
            ))
        );
    }else {
        return  <p>No Incomplete Todos</p>;
    }
}
