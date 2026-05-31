import Router from "./routing/Router";
import TaskPage from "../page/TaskPage/TaskPage";
import TasksPage from "../page/TasksPage";
import "./styles";

function App() {
  const routes = {
    "/": TasksPage,
    "/tasks/:id": TaskPage,
    "*": () => <div>404 Page not found</div>,
  };
  return <Router routes={routes} />;
}

export default App;
