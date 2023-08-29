import './App.css';
import reCAPTCHA from "react-google-recaptcha"

function App() {
  return (
    <div>
        <form>
          <label htmlFor="name">Name</label>
              <input type="text" id="name" className="input"/>
              <reCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
               />
          <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
