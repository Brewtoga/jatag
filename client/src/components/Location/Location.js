import React from "react";
import Logo from "../Logo";
import SimpleMap from "../SimpleMap";
import Marker from "../Marker";
import "./style.css";

function Location() {
  return (
    <div>
      <Logo />
      <div className="container-location">
        <p className="location-description">
          For the health and safety of our customers and staff, our patio and
          dining room are currently closed. However, we are offering a small but
          mighty menu available for curbside pick-up daily from 3:30-7:30pm so
          that you can enjoy HOBNOB AT HOME. Click our MENU tab to learn more.
        </p>
        <map className="map">
          <SimpleMap />
        </map>
        <Marker />
        <br></br>
        <div className="location">
          <div className="row">
            <div className="col m3">
              <p className="location-description">
                <strong>Location</strong>
              </p>
              <p className="location-description">
                6010 Hermitage Rd. Richmond, VA 23228
              </p>
            </div>
            <div className="col m3">
              <p className="location-description">
                <strong>Hours</strong>
              </p>
              <p className="location-description">
                Tue–Fri: 11am–11pm Saturday: 5pm-11pm Sunday: 9am-3pm Monday:
                Closed
              </p>
            </div>
            <div className="col m3">
              <p className="location-description">
                <strong>Parking</strong>
              </p>
              <p className="location-description">
                Ample parking is available in our lot (including near the
                dumpsters and on either side of the building) and along Kenwood
                Avenue.
                <strong>
                  Parking across the street at Hermitage Grocery is prohibited -
                  cars will be towed at owner’s expense.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
