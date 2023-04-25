import PropTypes from 'prop-types';

const Button = ({color, text, onclick}) => {
  return (
    <button className="btn"
        style={{backgroundColor:color}} 
        onClick={onclick}>
        {text}
    </button>
  )
}

Button.defaultProps = {
    color:'steelblue',
    text:'Button',
}

Button.propTypes = {
    onclick: PropTypes.func.isRequired
}

export default Button