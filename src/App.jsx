
import './App.css'



export default function App() {
  return (
    <div className="App">
      <Price/>
    </div>
  )
}

export function Price() {
  return (

    <div className='parrent'>
      <div className='child'>
        <div className='head'>
          <div>
            <h2 className='mute'>Free</h2>
          </div>
          <div>
            <h1 className='merge'>$0</h1><span>/month</span>
          </div>
        </div>
        <hr />
        <ul className='list'>
          <li className='unmute'><b>&#x2713;</b>Single User</li>
          <li className='unmute'><b>&#x2713;</b>5GB Storage</li>
          <li className='unmute'><b>&#x2713;</b>Unlimited Public Projects</li>
          <li className='unmute'><b>&#x2713;</b>Community Access</li>
          <li className='mute'><b>&#x2717;</b>Unlimited Private Projects</li>
          <li className='mute'><b>&#x2717;</b>DedicatedPhone Support</li>
          <li className='mute'><b>&#x2717;</b>Free Subdomain</li>
          <li className='mute'><b>&#x2717;</b>Monthly Status Reports</li>
        </ul>
        <div className='button'>
          <button variant="contained">Button</button>
        </div>
      </div>


      <div className='child'>
        <div className='head'>
          <div>
            <h2 className='mute'>PLUS</h2>
          </div>
          <div>
            <h1 className='merge'>$9</h1><span>/month</span>
          </div>
        </div>
        <hr />
        <ul className='list'>
          <li className='unmute'><b>&#x2713;</b>5 Users</li>
          <li className='unmute'><b>&#x2713;</b>50GB Storage</li>
          <li className='unmute'><b>&#x2713;</b>Unlimited Public Project</li>
          <li className='unmute'><b>&#x2713;</b>Community Access</li>
          <li className='unmute'><b>&#x2717;</b>Unlimited Public Project</li>
          <li className='unmute'><b>&#x2717;</b>DedicatedPhone Support</li>
          <li className='unmute'><b>&#x2717;</b>Free Subdomain</li>
          <li className='mute'><b>&#x2717;</b>Monthly Status Reports</li>
        </ul>
        <div className='button'>
          <button variant="contained">Button</button>
        </div>
      </div>


      <div className='child'>
        <div className='head'>
          <div>
            <h2 className='mute'>PRO</h2>
          </div>
          <div>
            <h1 className='merge'>$49</h1><span>/month</span>
          </div>
        </div>
        <hr />
        <ul className='list'>
          <li className='unmute'><b>&#x2713;</b>Unlimited Users</li>
          <li className='unmute'><b>&#x2713;</b>150GB Storage</li>
          <li className='unmute'><b>&#x2713;</b>Unlimited Public Projects</li>
          <li className='unmute'><b>&#x2713;</b>Community Access</li>
          <li className='unmute'><b>&#x2717;</b>Unlimited Public Projects</li>
          <li className='unmute'><b>&#x2717;</b>DedicatedPhone Support</li>
          <li className='unmute'><b>&#x2717;</b>Free Subdomain</li>
          <li className='unmute'><b>&#x2717;</b>Monthly Status Reports</li>
        </ul>
        <div className='button'>
          <button variant="contained">Button</button>
        </div>
      </div>
    </div>
  );
}
