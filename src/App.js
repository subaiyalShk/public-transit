import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <img src="/images/gopass2-300x50.png"/>
      </div>
      <div className="stat">
        Click here for TRE Rider Alert 5/17 7:48pm. (Posted today at 7:48PM)
      </div>
      <div className="heading">
        <img src="/images/dartChevronLogo.gif"/>
        <h2>Where's my...</h2>
      </div>

      {/* this routes to locator */}
      <table align="center" cellSpacing="7">
        <tbody>

          <tr id="locator-section">
            <td>
              <a className="blue-btn">
                <span className="buttonheader">Bus</span>
              </a>
            </td>
            <td>
              <a className="blue-btn">
                <span className="buttonheader">Train</span>
              </a>
            </td>
            <td>
              <a className="blue-btn">
                <span className="buttonheader">DART <br/> Stop</span>
              </a>
            </td>
          </tr>

          <tr id="tripplanner-section">
            <td  colspan="3">
              <a className="yellow-btn">
                <span className="buttonheader">Trip Planner</span>
              </a>
            </td>
          </tr>

          <tr id="p2pschedules-section">
            <td  colspan="3">
              <a className="yellow-btn">
                <span className="buttonheader">Point-to-point Schedules</span>
              </a>
            </td>
          </tr>

          <tr id="railmap-section">
            <td  colspan="3">
              <a className="yellow-btn">
                <span className="buttonheader">Rail System Map</span>
              </a>
            </td>
          </tr>


        </tbody>
      </table>

      
    </div>
  );
}

export default App;
