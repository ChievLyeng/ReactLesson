import Button from "./Button";
import { GoEye } from "react-icons/go";
import { GoAlert } from "react-icons/go";
import { GoLaw } from "react-icons/go";
import "./App.css";

function App() {
  const handleClick = () => {
    console.log("click!!!");
  };

  const mouseEnter = () => {
    console.log("Mounse Enter !!");
  };

  const mouseLeave = () => {
    console.log("Mouse Leave !!");
  };

  return (
    <>
      <div className="bg-blue">
        <div>
          <Button
            className="mb-5"
            secondary
            outline
            rounded
            onClick={handleClick}
          >
            Click me!!
          </Button>
        </div>
        <div>
          <Button className="mb-5" secondary outline onMouseLeave={mouseLeave}>
            <GoAlert />
            Secondary
          </Button>
        </div>
        <div>
          <Button secondary onMouseEnter={mouseEnter}>
            Buy Now!
          </Button>
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
