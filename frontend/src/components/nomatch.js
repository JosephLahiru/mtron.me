import './nomatch.css';
import image from '.././notfound.jpg';

export const NoMatch = () => {
    return <center><h1>404 Page Not Found</h1>
    <p>Sorry, the page you are looking for could not be found.</p>
    <img alt="not found" src={image}/>
    </center>
}