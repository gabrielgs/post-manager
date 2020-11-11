import "./MainSocialItem.css";

function MainSocialItem(props) {
  return (
    <>
      <li className="social-item">
        <input
          id={`checkbox__${props.item.name}`}
          type="checkbox"
          className="social-item__checkbox"
        />
        <label htmlFor={`checkbox__${props.item.name}`}>
          <img src={props.item.logo} alt={`logo ${props.item.name}`}/>
          Publish on {props.item.name}
          <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </label>
      </li>
    </>
  )
}

export default MainSocialItem;