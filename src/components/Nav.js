import { Link } from "react-router-dom";


function Nav(props){
    return(
        <nav>
            <div className="nav">
                <div className="img-div">
                <Link to="/">
                    <img src={props.src} alt=""></img>
                </Link>
                </div>
                <div>
                <Link to="/contact"><button className="btn">{props.title}</button></Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;