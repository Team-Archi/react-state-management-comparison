import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";
import CoffeeList from "./components/CoffeeList";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import CartoonList from "./components/CartoonList";

function App() {
  return (
    <div className="App">
      <Sections>
        <MiniSection>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {/* Redux +  Local State Management */}
            <Counter />
          </header>
        </MiniSection>

        {/* Redux +  RestAPI State Management */}
        <MiniSection>
          <CoffeeList />
        </MiniSection>

        {/* Zustand + RestAPI State Management*/}
        <MiniSection>
          <CartoonList />
        </MiniSection>

        {/* Jotai + Local State Management */}
        <MiniSection>
          <TodoList />
        </MiniSection>
      </Sections>
    </div>
  );
}

export default App;

const Sections = styled.div`
  display: flex;
  flex-direction: row;
`;

const MiniSection = styled.div`
  flex: 1;
`;
