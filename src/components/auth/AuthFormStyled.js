import styled from "styled-components";

const AuthFormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  width: 500px;

  border: 1px solid red;
  border-radius: 10px;

  .label {
    margin-bottom: 20px;
  }
  .input {
    width: 300px;
    padding: 5px;
    border-color: red;
    border-radius: 5px;
    outline: none;
  }
  .button {
  }
`;

export default AuthFormStyled;
