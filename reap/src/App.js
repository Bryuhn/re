import './App.css';
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  return (
    <div>
        <form>
          <label htmlFor="name">Name</label>
              <input type="text" id="name" className="input"/>
              <div>
                <ReCAPTCHA
                sitekey={"6LfQ1N8nAAAAAAjSnZz6mLgQdwV8soApVI5EujaP"}
                />
               </div>
          <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
