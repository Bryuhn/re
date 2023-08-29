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
                sitekey={process.env.REACT_APP_SITE_KEY}
                />
               </div>
          <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
