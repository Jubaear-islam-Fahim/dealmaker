import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import nabdd from '../../images/nabdd.png';
import messageIcon from '../../images/user1.png';
import './Companies.scss';

const Users = [
  {
    id: '1',
    selected: false,
    name: 'Schneider Software GmbH',
    industry: 'Software',
    employees: '1 - 10',
    last_annu: '8.5M €',
    status: 'New Lead',
    images: [messageIcon, messageIcon, messageIcon],
    classesT1: nabdd,
    classesT2: nabdd,
  },
  {
    id: '2',
    selected: false,
    name: 'Online Store GmbH ',
    industry: 'E-Commerce',
    employees: '11 - 50',
    last_annu: '3.8M €',
    status: 'Interested',
    images: [
      messageIcon,
      messageIcon,
      messageIcon,
      messageIcon,
      messageIcon,
      messageIcon,
      messageIcon,
    ],
    classesT: '17 classesTs',
  },
  {
    id: '3',
    selected: false,
    name: 'Richter Elektronik',
    industry: 'Electronics',
    employees: '1 - 1-',
    last_annu: '5.2M €',
    status: 'Matched',
    images: [messageIcon],
    classesT: 'Dr. Eckermann & Bauer',
  },
  {
    id: '4',
    selected: false,
    name: 'Robert Bau GmbH',
    industry: 'Construction',
    employees: '51 - 150',
    last_annu: '5.0M €',
    status: 'Closed',
    images: [messageIcon, messageIcon],
    classesT: 'Dr. Eckermann & Bauer',
  },
  {
    id: '5',
    selected: false,
    name: 'Unisell GmbH',
    industry: 'Trade',
    employees: '51 - 150',
    last_annu: '12.8M €',
    status: 'Bought',
    images: [messageIcon, messageIcon, messageIcon, messageIcon, messageIcon],
    classesT: 'Dr. Eckermann & Bauer',
  },
  {
    id: '6',
    selected: false,
    name: 'Koch Metallverarbeitung GmbH',
    industry: 'Metal Processing',
    employees: '1 -10',
    last_annu: '0.85M €',
    status: 'Exit done',
    images: [messageIcon, messageIcon, messageIcon, messageIcon],
    classesT: 'Dr. Eckermann & Bauer',
  },
  {
    id: '7',
    selected: false,
    name: 'Agricult GmbH',
    industry: 'Agriculture',
    employees: '11 - 50',
    last_annu: '1.5M €',
    status: 'Exit done',
    images: [messageIcon, messageIcon, messageIcon, messageIcon, messageIcon],
    classesT: 'Dr. Eckermann & Bauer',
  },
  {
    id: '8',
    selected: false,
    name: 'Trans Kopp GmH',
    industry: 'Logistics',
    employees: '11 - 50',
    last_annu: '6.3M €',
    status: 'New Lead',
    images: [messageIcon, messageIcon, messageIcon, messageIcon, messageIcon],
    classesT: 'Dr. Eckermann & Bauer',
  },
  {
    id: '9',
    selected: false,
    name: 'Shirtify GmbH',
    industry: 'E-Commerce',
    employees: '11 - 50',
    last_annu: '7.3M €',
    status: 'Matched',
    images: [messageIcon, messageIcon, messageIcon, messageIcon, messageIcon],
    classesT1: nabdd,
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

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Users,
      MasterChecked: false,
      show: false,
      currentSort: 'up',
    };
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
    console.log(this.state.List);

    return (
      <>
        <div className='table-componet'>
          <div className='row'>
            <div className='col-md-12'>
              <table className='table'>
                <thead>
                  <tr>
                    <th onClick={this.onSortChange} scope='col' className='id'>
                      Name <BsArrowDown /> {''}
                    </th>
                    <th scope='col' className='industry'>
                      Industry
                    </th>
                    <th scope='col' className='password'>
                      Employees
                    </th>
                    <th scope='col' className='status'>
                      Last annu. T/O
                    </th>
                    <th scope='col' className='last_annu'>
                      Deal-Status
                    </th>
                    <th scope='col' className='enviro'>
                      Classes
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
                      <td className='name'>
                        <span>{user.name}</span>
                      </td>
                      <td>
                        <span>{user.industry}</span>
                      </td>
                      <td>
                        <span>{user.employees}</span>
                      </td>
                      <td>
                        <span>{user.last_annu}</span>
                      </td>
                      <td className={user.status}>
                        <a className='status-btn' href='#'>
                          {user.status}
                        </a>
                      </td>
                      <td className={user.classesT}>
                        <span>
                          {/* {user.images.map((src) => (
                            <img src={src} alt='img' />
                          ))} */}

                          {user.images.slice(0, 3).map((src) => (
                            <img src={src} alt='img' />
                          ))}
                          {user.images.length > 3 && (
                            <span
                              style={{
                                height: 40,
                                marginLeft: 20,
                                fontWeight: 700,
                                borderRadius: '50%',
                                textAlign: 'center',
                                lineHeight: '40px',
                              }}
                            >
                              {' '}
                              {user.images.length - 3}+
                            </span>
                          )}
                          {/* <img src={user.classesT}></img> */}
                        </span>
                      </td>
                      <td>
                        <a href=''>
                          <img src={nabdd} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className='table-footer'>{/* .pe             */}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TableComponent;
