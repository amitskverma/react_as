import logo from './logo.svg';
import './App.css';
import DefectTracker from './d';
function App() {
  var employees = [
    { empId: 1234, name: "John", designation: "SE" , exp: 2.5},
    { empId: 4567, name: "Tom", designation: "SSE" , exp: 5.5},
    { empId: 8910, name: "Kevin", designation: "TA", exp: 1.5 },
  ];
  return (
    <>
     <DefectTracker />
    </>
  );
}
export default App;
