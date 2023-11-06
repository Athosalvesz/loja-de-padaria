import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2() {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/a879f9e3-fb0a-4f63-818b-cb90463b1cf5/202103281918_R2Mj_f.png" />
      <Card.Body>
        <Card.Title> Combo americano</Card.Title>
        <Card.Text>
        Lanche americano+coca cola 350 ml+fritas
        </Card.Text>
        <Button variant="success" href='/produto2'>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2;