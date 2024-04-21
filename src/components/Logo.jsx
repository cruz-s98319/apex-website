import Button from 'react-bootstrap/Button';

function Logo() {
    return (
        <>
        <div className="logo">
            <div>
                <h1>Apex Legends</h1>
                <h4>Drop Hotter in Apex Legends<sup>TM</sup>. Breakout!</h4>
            </div>
            <div>
                <Button variant="danger">PLAY FREE NOW<sup>*</sup></Button>
                <Button variant="danger">WATCH GAMEPLAY TRAILER</Button>
            </div>
        </div>
        </>
    )
}

export default Logo