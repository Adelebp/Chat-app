import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';



function Contact(props) {
  return (
    <div className="Contact">

        <img className="avatar" alt={props.name} src={props.avatar}></img>

            <div>

                <div className="name" >{props.name}</div>

                <div className="status"> 
                  <div className={props.online ? "status-online" : "status-offline"}></div>
                    <div className="status-text">{props.online ? "Online" : "Offline"}</div>  
                </div>

            </div>

    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.string.isRequired
};
export default Contact; 