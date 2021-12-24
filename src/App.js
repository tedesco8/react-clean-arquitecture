import './assets/css/App.css';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span className="icon"><ion-icon name="logo-apple"></ion-icon></span>
                <span className="title">Business</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                <span className="title">Commerce</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                <span className="title">Service Provider</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
                <span className="title">Identity Provider</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><ion-icon name="help-outline"></ion-icon></span>
                <span className="title">Claims</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                <span className="title">Consents</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                <span className="title">Preferences</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                <span className="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
