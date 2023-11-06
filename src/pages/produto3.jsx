import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto3(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://guararapesonline.com.br/shoppingguararapes/2021/03/combo_frango_crocante1.png"/>
                <Card.Body>
                <Card.Title>Combo Beirute</Card.Title>
                <Card.Text>
                <h2>R$ 39,90</h2>
                </Card.Text>
                <Card.Text>
                Beirute Fíle Mignon+coca cola 350ml + fritas
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto3