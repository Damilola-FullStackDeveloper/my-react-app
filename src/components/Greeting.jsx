import PropTypes from 'prop-types'; // ES6
const Greeting = ({firstname,middlename, lastname, occupation,alert}) => {
    
  console.log(firstname)
    return (
        <div>
           My name is {firstname} {middlename} {lastname}, i am a {occupation}
        <button className="bg-blue-500 text-white px-3" onClick={() => alert(firstname, middlename, lastname)}>Click me</button>
        </div>
    
    )
}

Greeting.propTypes = { 
  firstname : PropTypes.string,
  middlename : PropTypes.string,
  lastname : PropTypes. string,
  occupation: PropTypes.string,
  alert: PropTypes.func,
}
export default Greeting;

