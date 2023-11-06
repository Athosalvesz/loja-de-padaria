import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto2(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/a879f9e3-fb0a-4f63-818b-cb90463b1cf5/202103281918_R2Mj_f.png"/>
                <Card.Body>
                <Card.Title>Combo americano</Card.Title>
                <Card.Text>
                <h2>R$30</h2>
                </Card.Text>
                <Card.Text>
                Lanche americano+coca cola 350 ml+fritas
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto2