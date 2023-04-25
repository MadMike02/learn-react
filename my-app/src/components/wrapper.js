import './wrapper.css';


const Wrapper = (props) => {
    return <div className="expense-wrapper">{props.children}</div>;
}

export default Wrapper;