import '.././App.css';
import logo from'.././under-construction.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Construction = () =>{
    return (
        <div className="App">
          <h1>Welcome to Team Metatron</h1>
          <h2>This Site is under construction</h2>
    
          <img alt="under construction" src={logo}/>
        </div>
      );
}