import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';



const NavBar = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={NavLink} to='/' header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}}/>
            Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to='/activities' name='Activities' />       
        <Menu.Item>
            <Button as={NavLink} to='/createActivity' positive content='Create Activity' />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;