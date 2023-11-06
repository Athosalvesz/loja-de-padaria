import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://fastly.4sqi.net/img/general/600x600/IVLoWhDr2JLpiusFKYebXN-DWUwAjdoMLf5uUmyGWSM.jpg" />
      <Card.Body>
        <Card.Title>café da manhã</Card.Title>
        <Card.Text>
            delicioso combo café da manhã servido em nossos estabelecimentos
        </Card.Text>
        <Button variant="success" href='/produto1'>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;