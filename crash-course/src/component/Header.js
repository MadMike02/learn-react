import React from 'react'
import PropTypes from 'prop-types';

import Button from './Button';

const Header = ({ title, onAdd, openForm }) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={openForm ? 'red' : 'green'} text={openForm ? 'Close' : 'Add'} onclick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title:'TASK MANAGER'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header