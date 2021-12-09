import React from 'react';
import './management.scss';

import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import search from '../../images/sesr.png';
import key from '../../images/key.png';
import aUp from '../../images/aup.png';
<<<<<<< HEAD
import { ModalReset } from "./ModalReset";
 
=======
>>>>>>> 1835a9287e575777a9960e5f7597c05c5c32f9c3

const Users = [
  {
    id: '1',
    selected: false,
<<<<<<< HEAD
    name: "Julian Leudesdorff",
    email: "julian.leudesdorff@susiandjames.com", 
    status: "Active",
    roles: "Admin, Editor, Viewer",
    environment: "3 Environments", 
=======
    name: 'Aulian Leudesdorf',
    email: 'julian.leudesdorff@susiandjames.com',

    status: 'Active',
    roles: 'Admin, Editor, Viewer',
    environment: 'Dr. Eckermann & Bauer',
>>>>>>> 1835a9287e575777a9960e5f7597c05c5c32f9c3
  },
  {
    id: '2',
    selected: false,
<<<<<<< HEAD
    name: "Julian Leudesdorff",
    email: "julian.leudesdorff@susiandjames.com", 
    status: "Active",
    roles: "Admin, Editor, Viewer",
    environment: "17 Environments", 
=======
    name: 'Bulian Leudesdorff',
    email: 'julian.leudesdorff@susiandjames.com',

    status: 'Active',
    roles: 'Admin, Editor, Viewer',
    environment: 'Dr. Eckermann & Bauer',
>>>>>>> 1835a9287e575777a9960e5f7597c05c5c32f9c3
  },
  {
    id: '3',
    selected: false,
<<<<<<< HEAD
    name: "Julian Leudesdorff",
    email: "julian.leudesdorff@susiandjames.com", 
    status: "Inactive",
    roles: "Admin, Editor, Viewer",
    environment: "Dr. Eckermann & Bauer", 
=======
    name: 'Culian Leudesdorff3',
    email: 'julian.leudesdorff@susiandjames.com',

    status: 'Active',
    roles: 'Admin, Editor, Viewer',
    environment: 'Dr. Eckermann & Bauer',
>>>>>>> 1835a9287e575777a9960e5f7597c05c5c32f9c3
  },
  {
    id: '4',
    selected: false,
<<<<<<< HEAD
    name: "Julian Leudesdorff",
    email: "julian.leudesdorff@susiandjames.com", 
    status: "Active",
    roles: "Admin, Editor, Viewer",
    environment: "Dr. Eckermann & Bauer", 
=======
    name: 'Dulian Leudesdorffd',
    email: 'julian.leudesdorff@susiandjames.com',

    status: 'Active',
    roles: 'Admin, Editor, Viewer',
    environment: 'Dr. Eckermann & Bauer',
>>>>>>> 1835a9287e575777a9960e5f7597c05c5c32f9c3
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

<<<<<<< HEAD

=======
>>>>>>> 1835a9287e575777a9960e5f7597c05c5c32f9c3
// Sorting function
const sortedList = (data, order, item) => {
  if (order === 'up') {
    return data.sort((a, b) => (a[item] > b[item] ? 1 : -1));
  }
  if (order === 'down') {
    return data.sort((a, b) => (a[item] > b[item] ? -1 : 1));
  }
};

<<<<<<< HEAD

=======
>>>>>>> 1835a9287e575777a9960e5f7597c05c5c32f9c3
class SelectTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Users,
      MasterChecked: false,
      SelectedList: [],
      show: false,
      currentSort: 'up',
<<<<<<< HEAD
    }; 
=======
    };
>>>>>>> 1835a9287e575777a9960e5f7597c05c5c32f9c3
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

<<<<<<< HEAD
  
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
=======
  render() {
    return (
      <>
        <div className='table-componet'>
          <div className='row'>
            <div className='col-md-12'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>
>>>>>>> 1835a9287e575777a9960e5f7597c05c5c32f9c3
                      <input
                        type='checkbox'
                        className='form-check-input'
                        checked={this.state.MasterChecked}
                        id='mastercheck'
                        onChange={(e) => this.onMasterCheck(e)}
                      />
                    </th>
<<<<<<< HEAD
                    <td><span>{user.id}</span></td>
                    <td><span>{user.name}</span></td>
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

       
=======
                    <th onClick={this.onSortChange} scope='col' className='id'>
                      ID <img src={aUp} />{' '}
                    </th>
                    <th scope='col' className='name'>
                      Name
                    </th>
                    <th scope='col' className='email'>
                      E-Mail
                    </th>
                    <th scope='col' className='password'>
                      Password
                    </th>
                    <th scope='col' className='status'>
                      Status
                    </th>
                    <th scope='col' className='roles'>
                      Roles
                    </th>
                    <th scope='col' className='enviro'>
                      Environment
                    </th>
                    <th scope='col'></th>
                  </tr>
                </thead>

                <tbody>
                  {sortedList(
                    this.state.List,
                    this.state.currentSort,
                    'id'
                  ).map((user) => (
                    <tr
                      key={user.id}
                      className={user.selected ? 'selected' : ''}
                    >
                      <th scope='row'>
                        <input
                          type='checkbox'
                          checked={user.selected}
                          className='form-check-input'
                          id='rowcheck{user.id}'
                          onChange={(e) => this.onItemCheck(e, user)}
                        />
                      </th>
                      <td>
                        <span>{user.id}</span>
                      </td>
                      <td>
                        <span>{user.name}</span>
                      </td>
                      <td>
                        <span>{user.email}</span>
                      </td>
                      <td
                        className='pass-r'
                        onClick={() => {
                          this.handleModal();
                        }}
                      >
                        <span>
                          <img src={key} alt='' /> Reset Password
                        </span>
                      </td>
                      <td className='active'>
                        <span>{user.status}</span>
                      </td>
                      <td>
                        <span>{user.roles}</span>
                      </td>
                      <td>
                        <span>{user.environment}</span>
                      </td>
                      <td>
                        <a href=''>
                          <img src={search} alt='' />
                        </a>
                      </td>
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
>>>>>>> 1835a9287e575777a9960e5f7597c05c5c32f9c3

        <Modal
          className='rpass-modal'
          show={this.state.show}
          onHide={() => {
            this.handleModal();
          }}
          animation={false}
        >
          <Modal.Header closeButton>Reset Password</Modal.Header>
          <Modal.Body>
            <p>
              Do you wish to reset the Password of{' '}
              <Link to='/'>Julian Leudesdorff</Link> ?
            </p>
            <p>
              The reset password link will be sent to{' '}
              <Link to='/'>julian.leudesdorff@susiandjames.com</Link>
            </p>
            <div className='modal-btn'>
              <Link to='/single-users'>Reset Password</Link>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectTableComponent;
