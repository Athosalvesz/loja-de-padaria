import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto1(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://fastly.4sqi.net/img/general/600x600/IVLoWhDr2JLpiusFKYebXN-DWUwAjdoMLf5uUmyGWSM.jpg"/>
                <Card.Body>
                <Card.Title>café da manhã</Card.Title>
                <Card.Text>
                <h2>R$25</h2>
                </Card.Text>
                <Card.Text>
                delicioso combo café da manhã servido em nossos estabelecimentos
      
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto1