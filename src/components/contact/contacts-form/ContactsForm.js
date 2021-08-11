import React, { Component } from "react";
import { connect } from "react-redux";
import {
  alertContacts,
  resetAlert,
} from "../../../redux/pfonebook/contactsActions";
import { addContact } from "../../../redux/pfonebook/contactsOperations";
import {
  alertSelector,
  contactsSelector,
  errorSelector,
} from "../../../redux/pfonebook/contactsSelectors";

const initialState = { name: "", number: "" };

class ContactForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;

    if (this.props.alert) {
      this.props.resetAlert();
    }
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    if (
      this.props.contacts.some(({ name, number }) =>
        [name, number].some(
          (item) =>
            item.toUpperCase() === this.state.name.toUpperCase() ||
            item.toUpperCase() === this.state.number.toUpperCase()
        )
      )
    ) {
      this.props.alertContacts(
        `Contact ${this.state.name} is already in contacts`
      );
    } else {
      this.props.addContact({
        ...this.state,
      });
      this.setState({ ...initialState });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <p>{this.props.alert}</p>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.onHandleChange}
              placeholder="Jacob Mercer"
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="number"
              value={number}
              //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.onHandleChange}
              placeholder="+380993333333"
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

const mstp = (state) => ({
  contacts: contactsSelector(state),
  error: errorSelector(state),
  alert: alertSelector(state),
});

export default connect(mstp, { addContact, alertContacts, resetAlert })(
  ContactForm
);
