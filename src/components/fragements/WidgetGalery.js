import React from "react";

class WidgetGalery extends React.Component {
  render() {
    return (
      <div className="aside-widget">
        <div className="section-title">
          <h2 className="title">Instagram</h2>
        </div>
        <div className="galery-widget">
          <ul>
            <li>
              <a href="#">
                <img src="/img/galery-1.jpg" alt />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/galery-2.jpg" alt />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/galery-3.jpg" alt />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/galery-4.jpg" alt />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/galery-5.jpg" alt />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/galery-6.jpg" alt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default WidgetGalery;
