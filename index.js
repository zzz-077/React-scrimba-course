//////////////////////////////
/*
ReactDOM.render(<h1>hello from react</h1>, document.querySelector("#root"));
*/
//////////////////////////////
/*
ReactDOM.render(
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Courses</li>
  </ul>,
  document.querySelector("#root")
);
*/
//////////////////////////////
/*
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

function MainContent() {
  return <h1>I'm learning React!</h1>;
}

ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
  </div>,
  document.querySelector("#root")
);
*/
//////////////////////////////
/*
//this in reacts vs
ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))
//this in vanila js
var text = document.createElement("h1");
text.textContent = "hello from react again";
text.className = "header";
document.querySelector("#root").append(text);
*/
//////////////////////////////
/*
const navbar = (
  <nav>
    <h1>Brand</h1>
    <ul>
      <li>
        <a href="">Main</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">SignIn</a>
      </li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.querySelector("#root"));
*/
//////////////////////////////
/*
const navbar = (
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Courses</li>
  </ul>
);
//1 way
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(navbar);
//2 way
ReactDOM.createRoot(document.querySelector("#root")).render(navbar);
*/
//////////////////////////////
/*
const navbar = (
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Courses</li>
  </ul>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(navbar);
*/
//////////////////////////////
/*
function Page() {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Courses</li>
      </ul>
      <p>this is main content</p>
      <footer>"© 20xx development. All rights reserved."</footer>
    </div>
  );
}
ReactDOM.render(<Page />, document.querySelector("#root"));
*/
//////////////////////////////
/*
function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="40px" />
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  );
}
function Main() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />

      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
*/
//////////////////////////////
import Header from "./Header";

function Footer() {
  return (
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  );
}
function Main() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));
