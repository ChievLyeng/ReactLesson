import Button from "./Button";
import { GoEye } from "react-icons/go";
import { GoAlert } from "react-icons/go";
import { GoLaw } from "react-icons/go";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div>
          <Button>Click me!!</Button>
        </div>
        <div>
          <Button secondary outline>
            <GoAlert />
            Secondary
          </Button>
        </div>
        <div>
          <Button secondary>Buy Now!</Button>
        </div>
        <div>
          <Button success>
            <GoEye />
            See Deal!
          </Button>
        </div>
        <div>
          <Button warning>Hide Ads!</Button>
        </div>
        <div>
          <Button danger>
            <GoLaw />
            Something!
          </Button>
        </div>
        <div>
          <Button primary rounded>
            Rounded!
          </Button>
        </div>
        <div>
          <Button outline primary>
            Something!
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
