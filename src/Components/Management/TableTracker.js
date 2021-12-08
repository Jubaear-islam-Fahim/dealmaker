import React from "react";
import './management.scss';

import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
 
import search from '../../images/sesr.png';
import key from '../../images/key.png';
import aUp from '../../images/aup.png';

const Users = [
  {
    id: 1,
    selected: false,
    date: "2021 - 10 - 26",
    time: "07:58:30", 
    activity: "Pinned Tasks", 
    Description: "pinned 7 tasks", 
    environment: "Dr. Eckermann & Bauer", 
  },
  {
    id: 2,
    selected: false,
    date: "2021 - 10 - 26",
    time: "07:58:30", 
    activity: "Pinned Tasks", 
    Description: "pinned 7 tasks", 
    environment: "Dr. Eckermann & Bauer", 
  },
  {
    id: 3,
    selected: false,
    date: "2021 - 10 - 26",
    time: "07:58:30", 
    activity: "Pinned Tasks", 
    Description: "pinned 7 tasks", 
    environment: "Dr. Eckermann & Bauer", 
  },
  {
    id: 4,
    selected: false,
    date: "2021 - 10 - 26",
    time: "07:58:30", 
    activity: "Pinned Tasks", 
    Description: "pinned 7 tasks", 
    environment: "Dr. Eckermann & Bauer", 
  },
  {
    id: 5,
    selected: false,
    date: "2021 - 10 - 26",
    time: "07:58:30", 
    activity: "Pinned Tasks", 
    Description: "pinned 7 tasks", 
    environment: "Dr. Eckermann & Bauer", 
  },
];

class TableTracker extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      List: Users,
      MasterChecked: false,
      SelectedList: [],
      show: false
    };
  }

  handleModal() {
    this.setState({show:!this.state.show})
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Event to get selected rows(Optional)
  getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  render() {
    return (
      <>
      <div className="table-componet">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.MasterChecked}
                      id="mastercheck"
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                  </th>
                  <th scope="col" className="id">ID <img src={aUp}/></th>
                  <th scope="col" className="name">Timestamp</th>
                  <th scope="col" className="desc">Activity</th>
                  <th scope="col" className="descrp">Description</th>
                  <th scope="col" className="name">Environment / App</th> 
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.List.map((user) => (
                  <tr key={user.id} className={user.selected ? "selected" : ""}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={user.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, user)}
                      />
                    </th>
                    <td><span>{user.id}</span></td>
                    <td className="date-time"><span>{user.date}</span><span>{user.time}</span></td>
                    <td><span>{user.activity}</span></td> 
                    <td><span><text>Julian Leudesdorff </text> {user.Description}</span></td>
                    <td><span>{user.environment}</span></td>
                    <td><a href=""><img src={search}/></a></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <button
              className="btn btn-primary"
              onClick={() => this.getSelectedRows()}
            >
              Get Selected Items {this.state.SelectedList.length} 
            </button> */}
            
          </div>
        </div>
      </div>

        <Modal className="rpass-modal" show={this.state.show} onHide={()=>{this.handleModal()}} animation={false}>
            <Modal.Header closeButton>
              Reset Password
            </Modal.Header>
            <Modal.Body > 
                <p>
                    Do you wish to reset the Password of <Link to="/">Julian Leudesdorff</Link> ? 
                </p>
                <p>
                    The reset password link will be sent to  <Link to="/">julian.leudesdorff@susiandjames.com</Link>
                </p>
                <div className="modal-btn" ><Link to="/">Reset Password</Link></div>
            </Modal.Body> 
        </Modal>

      </>
    );
  }
}

export default TableTracker;