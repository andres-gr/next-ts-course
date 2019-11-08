import styled from 'Styles/theme'

const Title = styled.h3`
  margin-top: -3rem;
  margin: 0 1rem;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  transform: skew(-5deg) rotate(-1deg);
  a {
    background: ${props => props.theme.red};
    color: white;
    display: inline;
    font-size: 4rem;
    line-height: 1.3;
    padding: 0 1rem;
    text-align: center;
  }
`

export default Title
