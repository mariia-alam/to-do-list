import taskSlice from "./taskSlice";

export const fetchTasks = () => {
    return async (dispatch) => {
        async function fetchRequest(){
            const response  = await fetch('https://to-do-list-92845-default-rtdb.firebaseio.com/todos.json',{
                method: 'GET',
            });
            if(!response.ok){
                throw new Error("Fetching todos failed..!")
            }
            const data = await response.json();
            return data;
        };

        try{
            const allTask = await fetchRequest();
            dispatch(taskSlice.actions.replaceCart({
                todos: allTask.todos || [],
            }));

        }catch(err){
            console.log(err)
        }
}
}

export const sendTasks = (tasks)=>{
    return async ()=> {
        const sendRequest = async ( ) => {
            const response = await fetch('https://to-do-list-92845-default-rtdb.firebaseio.com/todos.json',{
                method:'PUT',
                body: JSON.stringify(tasks)
            });
            if(!response.ok){
                throw new Error("sending todo failed..!")
            }
        };

        try{
            await sendRequest();

        }catch(err){
            console.log(err)
        }
    };
}