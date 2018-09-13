import styled from 'styled-components'

const Card = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 500px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);

  &:hover:not(:active) {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
`

Card.displayName = 'Card'

export default Card
