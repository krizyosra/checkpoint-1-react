import logo from "./logo.svg";
import "./App.css";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Image from "./components/Image";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const firstname="yosra"
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>
            {" "}
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
            <Price />
            {firstname ?<Image />: null}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      {firstname ? <p>{firstname}</p>: <p>hello</p>}
    </div>
  );
}

export default App;
