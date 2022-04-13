import "./styles.css";

export default function App() {
  return (
    <div className="nav-bar">
      <div>
        <p>LOGOBAKERY</p>
      </div>
      <div className="mid-content">
        <p>Services</p>
        <p>Project</p>
        <p>About</p>
      </div>
      <div className="end-content">
        <button>Contact</button>
        {/* <p className='end-content'>Contact</p> */}
      </div>
    </div>
  );
}
