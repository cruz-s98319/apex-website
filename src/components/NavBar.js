import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function NavBar() {
    return (
        <>
            <Nav activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">APEX</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/about">ABOUT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/modes">MODES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/seasons">SEASONS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/battlepass">BATTLE PASS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/news">NEWS & MEDIA</Nav.Link>
                </Nav.Item>
                <Button variant="danger">DOWNLOAD FOR FREE<sup>*</sup></Button>
            </Nav>
        </>
    )
}

export default NavBar