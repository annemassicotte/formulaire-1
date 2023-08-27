import Container from "react-bootstrap/Container";
import Form from "./components/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function App() {
	return (
		<Container className="min-vh-100 d-flex align-items-center">
			<Row className="container-fluid gap-5">
				<Col className="text-white d-flex flex-column justify-content-center">
					<h1>Learn to code by watching Others</h1>
					<p>
						See how experienced developers solve problems in real-time. Watching
						scripted tutorials is great, but understanding how developers think
						is invaluable.
					</p>
				</Col>
				<Col className="p-5 bg-white rounded">
					<Button
						type="button"
						className="mb-3 container-fluid">
						Try it free 7 days then $20/mo. thereafter
					</Button>
					<Form />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
