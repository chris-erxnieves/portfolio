import React, { Component } from 'react';
import Menu from 'react-burger-menu/lib/menus/slide';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './sidebar.css';

const MenuItem = styled.a`
  color: ${({ theme }) => theme.light};
  transition: all 0.1s all;
  cursor: pointer;
  margin-bottom: 1.8rem;
  font-size: 1.8rem;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange({ isOpen }) {
    this.setState({ menuOpen: isOpen });
  }

  closeMenu(ref) {
    this.props.scrollFn(ref);
    this.setState({ menuOpen: false });
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <Menu right isOpen={menuOpen} onStateChange={state => this.handleStateChange(state)}>
        {this.props.headerItems.map(({ ref, label }, i) => (
          <MenuItem onClick={() => this.closeMenu(ref)} key={i}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    );
  }
}

Sidebar.propTypes = {
  scrollFn: PropTypes.func.isRequired,
  headerItems: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sidebar;
