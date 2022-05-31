import React from 'react';
import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import List from '../../components/table/Table';
import './single.scss';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/9043366/pexels-photo-9043366.jpeg?cs=srgb&dl=pexels-anastasiya-vragova-9043366.jpg&fm=jpg" alt="" className="itemImg"/>
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">janedoe@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 253 6325</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Adress:</span>
                    <span className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>
                
              </div>
            </div>
            
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>

      </div>
    </div>
  );
};

export default Single;
