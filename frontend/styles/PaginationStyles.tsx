import styled from 'Styles/theme'

const PaginationStyles = styled.div`
  align-content: center;
  align-items: stretch;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.lightGrey};
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  margin: 2rem 0;
  text-align: center;
  & > * {
    border-right: 1px solid ${props => props.theme.lightGrey};
    margin: 0;
    padding: 15px 30px;
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`

export default PaginationStyles
