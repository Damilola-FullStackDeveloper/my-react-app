import "./App.css";
import image from "./assets/download (2).jpeg"
import Child from "./components/Child";
import Greeting from "./components/Greeting";
import NavBar from "./components/NavBar";
import State from "./components/State";
function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
  const handleClick = () => {
    console.log("heyyy")
    

};


  const firstName = "Damilola Emmanuel"
  const lastName = "Bakare"


  const popUp = (firstname, middlename, lastname) => {
      alert(`my name is ${firstname} ${middlename} ${lastname}`)
  }

  return (
  <div>
      <NavBar/>
      <State/>
     <Greeting firstname={"Damilola"} middlename={"Emmanuel"} lastname={"Bakare"} occupation={"Full-stack developer"} alert={popUp}/>
       <Child>GMC</Child>
          {arr.map((items, index) => (
       <div key={index}>{items} 
  </div>
    ))}

    <img src={image} alt=""/>
    <h1 style={{fontSize:"90px", textTransform:"uppercase", color:"red"}}>{firstName + " " + lastName}</h1>
    <button onClick={handleClick} className="">click me</button>
    <button onClick={()=>console.log(firstName)}>hey</button>

  </div> 
  );
  
  }
export default App;
