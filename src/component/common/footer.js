import React from 'react';

import { BackTop } from 'antd';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <ul className="socials">
          <li><a href="https://github.com/irfanHendianto"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/irfan-hendianto-wijaya-3503b9181/"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2021</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;