import Photo from  '../assets/photo.png';
import '../styles/main.css'
function Main() {
    return <div className="main">
        <div className="con1">
            <h1>John</h1>
        </div>
        <div className="con2">
            <img
                src={Photo}
                alt="test"
                style={{ width: '200px', border: '1px solid red' }}
            />
        </div>
    </div>
}
export default Main;