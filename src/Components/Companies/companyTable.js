import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import nabdd from '../../images/nabdd.png';
import messageIcon from '../../images/user1.png';

import Code from '../../images/icons/coding.png';
import lightBulb from '../../images/icons/light-bulb.png';
import shoppingCart from '../../images/icons/e-commerce-shopping-cart.png';
import bulbGreen from '../../images/icons/bulb-green.png';
import construction from '../../images/icons/construction.png';
import worker from '../../images/icons/construction-worker.png';
import diamond from '../../images/icons/diamond.png';
import thumbUp from '../../images/icons/thumb_up.png';
import greeneryNature from '../../images/icons/greenery-nature.png';
import logisticsTruck from '../../images/icons/logistics-truck.png';
import global from '../../images/icons/global.png';
import verifiedUser from '../../images/icons/verified_user.png';

import { BsChevronDoubleLeft, BsChevronLeft, BsChevronDoubleRight, BsChevronRight } from "react-icons/bs";


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
        images: [Code, lightBulb],

    },
    {
        id: '2',
        selected: false,
        name: 'Online Store GmbH ',
        industry: 'E-Commerce',
        employees: '11 - 50',
        last_annu: '3.8M €',
        status: 'Interested',
        images: [shoppingCart],
    },
    {
        id: '3',
        selected: false,
        name: 'Richter Elektronik',
        industry: 'Electronics',
        employees: '1 - 1-',
        last_annu: '5.2M €',
        status: 'Matched',
        images: [bulbGreen, construction],
    },
    {
        id: '4',
        selected: false,
        name: 'Robert Bau GmbH',
        industry: 'Construction',
        employees: '51 - 150',
        last_annu: '5.0M €',
        status: 'Closed',
        images: [construction, worker],
    },
    {
        id: '5',
        selected: false,
        name: 'Unisell GmbH',
        industry: 'Trade',
        employees: '51 - 150',
        last_annu: '12.8M €',
        status: 'Bought',
        images: [diamond, shoppingCart, thumbUp, lightBulb, lightBulb],

    },
    {
        id: '6',
        selected: false,
        name: 'Koch Metallverarbeitung GmbH',
        industry: 'Metal Processing',
        employees: '1 -10',
        last_annu: '0.85M €',
        status: 'Exit done',
        images: [construction],
    },
    {
        id: '7',
        selected: false,
        name: 'Agricult GmbH',
        industry: 'Agriculture',
        employees: '11 - 50',
        last_annu: '1.5M €',
        status: 'Exit done',
        images: [greeneryNature],

    },
    {
        id: '8',
        selected: false,
        name: 'Trans Kopp GmH',
        industry: 'Logistics',
        employees: '11 - 50',
        last_annu: '6.3M €',
        status: 'New Lead',
        images: [logisticsTruck, global],

    },
    {
        id: '9',
        selected: false,
        name: 'Shirtify GmbH',
        industry: 'E-Commerce',
        employees: '11 - 50',
        last_annu: '7.3M €',
        status: 'Matched',
        images: [shoppingCart, thumbUp, verifiedUser, lightBulb],

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
                                                                marginLeft: 8,
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

                            <div className="pagination-content">
                                <ul>
                                    <li><BsChevronDoubleLeft/></li>
                                    <li><BsChevronLeft/></li>
                                    <li>1</li>
                                    <li className="active">2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li><BsChevronDoubleRight/></li>
                                    <li><BsChevronRight/></li>
                                </ul>
                                <div className="pageRight">
                                    <span>1 of 2 pages (16 items)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default TableComponent;
