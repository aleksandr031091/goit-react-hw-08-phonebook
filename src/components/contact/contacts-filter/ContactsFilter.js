import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { filterContacts } from "../../redux/contact/contactActions";

import { filterSelector } from "../../../redux/pfonebook/contactsSelectors";
import { filterContact } from "../../../redux/pfonebook/contactsActions";

const FilterContact = ({ value, setNewFilterContacts }) => {
  const onHandleChange = (e) => {
    setNewFilterContacts(e.target.value);
  };

  return (
    <>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onHandleChange} />
      </label>
    </>
  );
};

const mstp = (state) => {
  return {
    value: filterSelector(state),
  };
};

export default connect(mstp, { setNewFilterContacts: filterContact })(
  FilterContact
);
