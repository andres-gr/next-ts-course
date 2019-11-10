import { keyframes } from '@emotion/core'
import styled from 'Styles/theme'

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }
  
  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`

const Form = styled.form`
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  padding: 20px;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    border: 1px solid black;
    font-size: 1rem;
    padding: 0.5rem;
    width: 100%;
    &:focus {
      border-color: ${props => props.theme.red};
      outline: 0;
    }
  }
  button,
  input[type='submit'] {
    background: red;
    border: 0;
    color: white;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    width: auto;
  }
  fieldset {
    border: 0;
    padding: 0;
    
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%);
      content: '';
      display: block;
      height: 10px;
    }
    &[aria-busy='true']::before {
      animation: ${loading} 0.5s linear infinite;
      background-size: 50% auto;
    }
  }
`

export default Form
