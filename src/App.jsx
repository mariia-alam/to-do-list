import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AllTasks from "./Pages/AllTasks"
import IncompleteTasks from "./Pages/IncompleteTasks"
import CompletedTasks from "./Pages/CompletedTasks"
import Root from "./Pages/Root"
import Error from "./Pages/Error"
import {useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchTasks, sendTasks } from "./Redux/taskActions"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <Error/>,
    children:[
        {
          path: '/incompletetasks',
          element: <IncompleteTasks/>
        },
        {
          path: '/completedtasks',
          element: <CompletedTasks/>
        },
        {
          path: '/',
          element: <AllTasks/>
        },
    ]
  },
])
  let isInitial=true;

export default function App() {
  const tasks = useSelector((state)=> state.todos);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(isInitial){
      isInitial=false;
      return;
    }
    if(tasks.changed){
    dispatch(sendTasks(tasks));
    }
  },[tasks, dispatch]);


useEffect(()=>{
  dispatch(fetchTasks())
  },[dispatch]);

  return (
      <RouterProvider router={router}>
      </RouterProvider>
  )
}