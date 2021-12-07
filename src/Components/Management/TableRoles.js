import React from "react";
import './management.scss';

import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
 
import search from '../../images/sesr.png'; 
import dod from '../../images/3dod.png';
import aUp from '../../images/aup.png';

const Users = [
  {
    id: 1,
    selected: false,
    name: "Cloud Owner",
    permissions: "37 Permissions", 
    count: "1 Users", 
    apps: "SUSI Cloud", 
    modules: "Used in Modules", 
    environment: "Dr. Eckermann & Bauer", 
  },
  {
    id: 2,
    selected: false,
    name: "Cloud Owner",
    permissions: "37 Permissions", 
    count: "1 Users", 
    apps: "SUSI Cloud", 
    modules: "Used in Modules", 
    environment: "Dr. Eckermann & Bauer", 
  },
  {
    id: 3,
    selected: false,
    name: "Cloud Owner",
    permissions: "37 Permissions", 
    count: "1 Users", 
    apps: "SUSI Cloud", 
    modules: "Used in Modules", 
    environment: "Dr. Eckermann & Bauer", 
  },
  {
    id: 4,
    selected: false,
    name: "Cloud Owner",
    permissions: "37 Permissions", 
    count: "1 Users", 
    apps: "SUSI Cloud", 
    modules: "Used in Modules", 
    environment: "Dr. Eckermann & Bauer", 
  },
  {
    id: 5,
    selected: false,
    name: "Cloud Owner",
    permissions: "37 Permissions", 
    count: "1 Users", 
    apps: "SUSI Cloud", 
    modules: "Used in Modules", 
    environment: "Dr. Eckermann & Bauer", 
  },
];

class TableRoles extends React.Component {
  
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
                  <th scope="col">ID <img src={aUp}/></th>
                  <th scope="col">Role Name</th>
                  <th scope="col">Permissions</th>
                  <th scope="col">User Count</th>
                  <th scope="col">Used in Apps</th> 
                  <th scope="col">Used in Modules</th> 
                  <th scope="col">Environments</th> 
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
                    <td><span>{user.name}</span></td>
                    <td className="bts bts1"><span><img src={dod}/>{user.permissions}</span></td> 
                    <td className="bts bts2"><span><img src={dod}/>{user.count}</span></td>
                    <td><span>{user.apps}</span></td>
                    <td><span>{user.modules}</span></td>
                    <td><span>{user.environment}</span></td>
                    <td><a href=""><img src={search}/></a></td>
                  </tr>
                ))}
              </tbody> 
            </table>
             
            
          </div>
        </div>
      </div> 

      </>
    );
  }
}

export default TableRoles;