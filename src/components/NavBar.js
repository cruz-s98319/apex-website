import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function NavBar() {
    return (
        <>
            <div className="navbar">
                <div>
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
                        <Nav.Item>
                            <Nav.Link eventKey="/community">COMMUNITY</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/compete">COMPETE</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div>
                    <Button variant="danger">DOWNLOAD FOR FREE<sup>*</sup></Button>
                </div>
            </div>
        </>
    )
}

export default NavBar