import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AllTasks from "./Pages/AllTasks"
import IncompleteTasks from "./Pages/IncompleteTasks"
import CompletedTasks from "./Pages/CompletedTasks"
import Root from "./Pages/Root"
import Error from "./Pages/Error"
import { Provider } from "react-redux"
import store from "./Redux/store"

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
export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <div>hi</div>
      </RouterProvider>
    </Provider>

  )
}