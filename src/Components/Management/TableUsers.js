import React from 'react';
import './management.scss';

import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import search from '../../images/sesr.png';
import key from '../../images/key.png';
import aUp from '../../images/aup.png';
import { ModalReset } from "./ModalReset";
 

const Users = [
  {
    id: '1',
    selected: false,
    name: "Julian Leudesdorff",
    email: "julian.leudesdorff@susiandjames.com", 
    status: "Active",
    roles: "Admin, Editor, Viewer",
    environment: "3 Environments", 
  },
  {
    id: '2',
    selected: false,
    name: "Julian Leudesdorff",
    email: "julian.leudesdorff@susiandjames.com", 
    status: "Active",
    roles: "Admin, Editor, Viewer",
    environment: "17 Environments", 
  },
  {
    id: '3',
    selected: false,
    name: "Julian Leudesdorff",
    email: "julian.leudesdorff@susiandjames.com", 
    status: "Inactive",
    roles: "Admin, Editor, Viewer",
    environment: "Dr. Eckermann & Bauer", 
  },
  {
    id: '4',
    selected: false,
    name: "Julian Leudesdorff",
    email: "julian.leudesdorff@susiandjames.com", 
    status: "Active",
    roles: "Admin, Editor, Viewer",
    environment: "Dr. Eckermann & Bauer", 
  },
  {
    id: '5',
    selected: false,
    name: 'Eulian Leudesdorffc',
    email: 'julian.leudesdorff@susiandjames.com',
    status: 'Active',
    roles: 'Admin, Editor, Viewer',
    environment: 'Dr. Eckermann & Bauer',
  },
];

// Sorting function
const sortedList = (data, order, item) => {
  if (order === 'up') {
    return data.sort((a, b) => (a[item] > b[item] ? 1 : -1));
  }
  if (order === 'down') {
    return data.sort((a, b) => (a[item] > b[item] ? -1 : 1));
  }
};

class SelectTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Users,
      MasterChecked: false,
      SelectedList: [],
      show: false,
      currentSort: 'up',
    }; 
  }

  handleModal() {
    this.setState({ show: !this.state.show });
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

  onSortChange = () => {
    const { currentSort } = this.state;
    let nextSort;

    if (currentSort === 'down') nextSort = 'up';
    else if (currentSort === 'up') nextSort = 'down';

    this.setState({
      currentSort: nextSort,
    });
  };

  
  render() { 
    
    return  (
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
                  <th onClick={this.onSortChange} scope="col" className="id">ID <img src={aUp}/>{' '}</th>
                  <th scope="col" className="name">Name</th>
                  <th scope="col" className="email">E-Mail</th>
                  <th scope="col" className="password">Password</th>
                  <th scope="col" className="status">Status</th>
                  <th scope="col" className="roles">Roles</th>
                  <th scope="col" className="enviro">Environment</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {sortedList( this.state.List, this.state.currentSort, 'id' ).map((user) => (
                  <tr key={user.id} className={user.selected ? "selected" : ""}>
                    <th scope="row">
                      <input
                        type='checkbox'
                        className='form-check-input'
                        checked={this.state.MasterChecked}
                        id='mastercheck'
                        onChange={(e) => this.onMasterCheck(e)}
                      />
                    </th>
                    <td><span>{user.id}</span></td>
                    <td><span><Link to="/single-users">{user.name}</Link></span></td>
                    <td><span>{user.email}</span></td>
                    <td className="pass-r" onClick={()=>{this.handleModal()}}><span><img src={key} /> Reset Password</span></td>
                    <td className={user.status}><span>{user.status}</span></td>
                    <td><span>{user.roles}</span></td>
                    <td className={user.environment}><span>{user.environment}</span></td>
                    <td><a href=""><img src={search}/></a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          
            
          </div>
        </div>
      </div>

      <Modal className="rpass-modal" show={this.state.show} onHide={()=>{this.handleModal()}} animation={false}>
        <ModalReset/>
      </Modal>
 
      </>
    );
  }
}

export default SelectTableComponent;
