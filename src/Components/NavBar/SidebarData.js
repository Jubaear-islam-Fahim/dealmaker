
import Home from '../../images/nav/home.png';
import Companies from '../../images/nav/companies.png';
import AccountBalance from '../../images/nav/account_balance.png';
import CheckCircleOutline from '../../images/nav/check_circle_outline.png';
import AccountBox from '../../images/nav/account_box.png'; 
import Add_ins from '../../images/nav/more_horiz.png';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: Home,
    cName: 'nav-text'
  },
  {
    title: 'Companies',
    path: '/companies',
    icon: Companies,
    cName: 'nav-text'
  },
  {
    title: 'M&A Advisors',
    path: '/advisors',
    icon: AccountBalance,
    cName: 'nav-text'
  },
  {
    title: 'Matched M&A advisors',
    path: '/matches',
    icon: CheckCircleOutline,
    cName: 'nav-text check-cc'
  },
  {
    title: 'Account Box',
    path: '/account',
    icon: AccountBox,
    cName: 'nav-text'
  }, 
  {
    title: 'Add ins',
    path: '/addIns',
    icon: Add_ins,
    cName: 'nav-text'
  }
];