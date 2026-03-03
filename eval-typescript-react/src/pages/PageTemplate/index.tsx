import { Link, Outlet } from "react-router-dom";
import classes from "./index.module.css";

const PageTemplate = () => (
  <div className={classes.root}>
    <header className={classes.header}>
      <h1>Exam Typescript React</h1>
      <nav className={classes.nav}>
        <Link to="/">Home</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <p>
        Par <i>John Doe</i> le <time dateTime="2026-02-13">13/02/2026</time>
      </p>
    </footer>
  </div>
);

export default PageTemplate;
