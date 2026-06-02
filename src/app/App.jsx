import Router from "./routing/Router";
import TaskPage from "@/pages/TaskPage/TaskPage";
import TasksPage from "@/pages/TasksPage";
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
