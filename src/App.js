import SplitPane from "react-split-pane";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SplitPane split="horizontal" minSize={50} defaultSize="50%">
        <SplitPane split="vertical" minSize={100} defaultSize="50%">
          <div className="pane-content">
            <h1>Window-1</h1>
            <p>Component-1 (some HTML content)</p>
          </div>
          <div className="pane-content">
            <h1>Window-2</h1>
            <p>Component-2 (some HTML content)</p>
          </div>
        </SplitPane>
        <div className="pane-content">
          <h1>Window-3</h1>
          <p>Component-3 (some HTML content)</p>
        </div>
      </SplitPane>
    </div>
  );
}

export default App;
