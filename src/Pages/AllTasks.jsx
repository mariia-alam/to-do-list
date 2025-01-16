import { useSelector } from "react-redux";
import TaskCard from "../Components/TaskCard";

export default function AllTasks() {
    const tasks = useSelector((state)=> state.todos.todos);
    console.log(tasks)

    if(tasks && tasks.length > 0){
        return (
            tasks.map((t)=>(
                <TaskCard completed={t.completed} key={t.id} id={t.id} title={t.title}></TaskCard>
            ))
        );
    }else {
        return  <p>No Todos</p>;
    }
}
