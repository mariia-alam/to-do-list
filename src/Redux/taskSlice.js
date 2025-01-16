import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: 'todos',
    initialState:{
        todos:[],
        counter: 1, // العداد يبدأ من 1
    },
    reducers:{
        addTask(state, action){
            if (!state.todos) state.todos = []; // التأكد من وجود المصفوفة
            state.todos.push({
                id:state.counter, 
                title: action.payload,
                completed:false,
            });
            state.counter++;
        },
        deleteTask(state, action){
            const deletedTaskId = action.payload;
            state.todos = state.todos.filter(task => task.id !== deletedTaskId);
            state.todos.forEach((task, index) => {
                task.id = index + 1;
            });
            if (state.todos.length > 0) {
                state.counter = Math.max(...state.todos.map(task => task.id)) + 1;
            } else {
                state.counter = 1;
            }
        },
        toggleTask(state, action){
            const task = state.todos.find((t) => t.id === action.payload);
            if (task) task.completed = !task.completed;
        },
    }
})
export const  taskActions = taskSlice.actions;
export default taskSlice.reducer;
