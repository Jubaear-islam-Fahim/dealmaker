import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { BsArrowDown } from 'react-icons/bs';
import nabdd from '../../images/nabdd.png';
import messageIcon from '../../images/user1.png';


import { BsChevronDoubleLeft, BsChevronLeft, BsChevronDoubleRight, BsChevronRight } from "react-icons/bs";


import './Matches.scss';

const Users = [
    {
        id: '1',
        selected: false,
        name: 'Rechtsanwalt Dr. Eiblich',
        country: 'Germany',
        ct: '100',
        atv: '1 - 10M €',  
        ms: 50,
    },
    {
        id: '2',
        selected: false,
        name: 'Meyers Consulting',
        country: 'Germany',
        ct: '25',
        atv: '10 - 50M €', 
        ms: 85,
    },
    {
        id: '3',
        selected: false,
        name: 'BHG Steuerberatungsgesellschaft mbH',
        country: 'Switzerland',
        ct: '65',
        atv: '1 - 10M €', 
        ms: 19,
    },
    {
        id: '4',
        selected: false,
        name: 'Capital Management GmbH',
        country: 'Liechtenstein',
        ct: '350',
        atv: '10 - 50M €', 
        ms: 74,
    },
    {
        id: '5',
        selected: false,
        name: 'GBC Consulting GmhH',
        country: 'Switzerland',
        ct: '500',
        atv: '10 - 50M €', 
        ms: 98,
    },
    {
        id: '6',
        selected: false,
        name: 'TTC Transactions Ltd.',
        country: 'United Kingdom',
        ct: '240',
        atv: '10 - 50M €', 
        ms: 65,
    },
    {
        id: '7',
        selected: false,
        name: 'Hofstadt Richter & Partners',
        country: 'Austria',
        ct: '100',
        atv: '1 - 10M €', 
        ms: 78,

    },
    {
        id: '8',
        selected: false,
        name: 'Rechtsanwalt Gold ',
        country: 'Switzerland',
        ct: '33',
        atv: '1 - 10M €', 
        ms: 71,

    },
    {
        id: '9',
        selected: false,
        name: 'Hessen Financials GmbH',
        country: 'Germany',
        ct: '73',
        atv: '10 - 50M €', 
        ms: 94,
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
                                            Company Name <BsArrowDown /> {''}
                                        </th>
                                        <th scope='col' className='country'>
                                            Country
                                        </th>
                                        <th scope='col' className='password'>
                                            Completed Transactions
                                        </th>
                                        <th scope='col' className='status'>
                                            Average Transaction Volume
                                        </th>
                                        <th scope='col' className='status'>
                                            Matching Score
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
                                                <span>{user.country}</span>
                                            </td>
                                            <td>
                                                <span>{user.ct}</span>
                                            </td>
                                            <td>
                                                <span>{user.atv}</span>
                                            </td>
                                            <td>
                                                {/* <span>{user.ms} </span> */}
                                                <ProgressBar className={user.ms} now={user.ms} label={`${user.ms}`} />
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
                                    <li><BsChevronDoubleLeft /></li>
                                    <li><BsChevronLeft /></li>
                                    <li>1</li>
                                    <li className="active">2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li><BsChevronDoubleRight /></li>
                                    <li><BsChevronRight /></li>
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
