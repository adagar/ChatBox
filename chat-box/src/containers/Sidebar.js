import { connect } from 'react-redux';
import SidebarComponent from '../components/Sidebar';

export const Sidebar = connect(state => ({
    messages: state.users
}), {})(SidebarComponent);