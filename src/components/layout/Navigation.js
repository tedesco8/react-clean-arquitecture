import React from "react";

function Navigation() {
    
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#">
            <span className="icon">
                <ion-icon name="logo-react"></ion-icon>
            </span>
            <span className="title">React Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
                <ion-icon name="storefront-outline"></ion-icon>
            </span>
            <span className="title">Commerce</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
            <ion-icon name="business-outline"></ion-icon>
            </span>
            <span className="title">Business</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
                <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="title">Customers</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
                <ion-icon name="card-outline"></ion-icon>
            </span>
            <span className="title">Sales</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
                <ion-icon name="reader-outline"></ion-icon>
            </span>
            <span className="title">Consents</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
                <ion-icon name="options-outline"></ion-icon>
            </span>
            <span className="title">Preferences</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="title">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
