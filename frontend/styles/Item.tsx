import styled from 'Styles/theme'

const Item = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    height: 400px;
    object-fit: cover;
    width: 100%;
  }
  p {
    flex-grow: 1;
    font-size: 1.5rem;
    font-size: 12px;
    font-weight: 300;
    line-height: 2;
    padding: 0 3rem;
  }
  .buttonList {
    background: ${props => props.theme.lightGrey};
    border-top: 1px solid ${props => props.theme.lightGrey};
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    width: 100%;
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`

export default Item
