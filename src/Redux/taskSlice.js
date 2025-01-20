import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: 'todos',
    initialState:{
        todos:[],
        changed:false,

    },
    reducers:{
        replaceCart(state, action) {
        state.todos = action.payload.todos;
        },
        addTask(state, action){
            if (!state.todos) state.todos = [];
            state.changed=true;
            state.todos.push({
                id:action.payload.id,
                title: action.payload.title,
                completed:false,
            });
        },
        deleteTask(state, action){
            state.changed=true;
            const deletedTaskId = action.payload;
            state.todos = state.todos.filter(task => task.id !== deletedTaskId);
        },
        toggleTask(state, action){
            state.changed=true;
            const task = state.todos.find((t) => t.id === action.payload);
            if (task) task.completed = !task.completed;
        },
    }
})
export const  taskActions = taskSlice.actions;
export default taskSlice;
