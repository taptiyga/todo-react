import Router from "./Router";
import TaskPage from "./page/TaskPage";
// import NotFoundPage from "./page/NotFoundPage";
import TasksPage from "./page/TasksPage";

function App() {
  const routes = {
    "/": TasksPage,
    "/tasks/:id": TaskPage,
    "*": () => <div>404 Page not found</div>,
  };
  return <Router routes={routes} />;
}

export default App;
