import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card3() {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/a879f9e3-fb0a-4f63-818b-cb90463b1cf5/202103281908_sadk_f.png" />
      <Card.Body>
        <Card.Title>Combo Beirute</Card.Title>
        <Card.Text>
        Beirute Fíle Mignon+coca cola 350ml + fritas
           </Card.Text>
        <Button variant="success" href='/produto3'>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Card3;