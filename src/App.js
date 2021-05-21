import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div>
        <img src="/images/gopass2-300x50.png"/>
      </div>

      <section className="stat">
        <table  align="center" cellspacing="2" style={{"width": "320px"}}> 		
          <tbody>
            <tr>			
              <td>
                <a href="featuredRiderAlerts.asp">
                  <img src="images/riderAlert.gif" align="left" border="0" hspace="2"/>Click here
                </a> for TRE Rider Alert 5/17 7:48p. <font size="1">(Posted  today at 7:48 PM)</font>
                  <br/>			
              </td>		
            </tr>
          </tbody>
        </table>
      </section>
      
      
      <div className="titleDiv">
        <img src="/images/dartChevronLogo.gif" alt="DART logo" />   
          
        <span>Where's my...</span>
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

          <tr id="rideralert-section">
            <td  colspan="3">
              <div className="grey-btn">
                <span className="buttonheader">Rider Alerts</span>
                <div className="rideralerts">
                  <a href="featuredRiderAlerts.asp">
                    <img src="/images/riderAlert.gif" align="left" border="0" hspace="2" />
                    Click Here
                  </a>
                  " for TRE Rider Alert 5/17 7:48p. "
                  <font size="1">(Posted today at 7:48 PM)</font>
                  <br/>
                  <ul>
                    <li>
                      <a href="/rideralerts.asp">All Routes</a>
                    </li>
                    <li>
                      <a  href="/riderAlertDetails.asp?id=4817"> Always Be Alert: A message from DART Police</a>
                    </li>
                    <li>
                      <a  href="/riderAlertDetails.asp?id=826"> Current Route Detours  (Routes 11, 12, 19, 21, 24, 26, 29,  35, 36, 52, 59, 60, 81/82, 84, 110, 111, 161, 164, 206, 208, 278, 283, 347, 372, 374, 409, 415, 467, 486, 501, 547, 582, 595, 597, 706)</a>
                    </li>
                    <li>
                      <a  href="/riderAlertDetails.asp?id=5209"> DART Routes to Detour Due to Construction at Elm and Houston, Effective Monday, March 22, 2021</a>
                    </li>
                    <li>
                      <a  href="/riderAlertDetails.asp?id=5245"> May Service Change Makes Three Bus Detours Permanent (Routes 35, 374 and 501), Effective May 17, 2021</a>
                    </li>
                    <li>
                      <a  href="/riderAlertDetails.asp?id=5257"> Memorial Day 2021 Schedule for DART and TRE, Effective Monday, May 31, 2021</a>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>


        </tbody>
      </table>

      
    </div>
  );
}

export default App;
