import styled from 'styled-components'
const color = '#363535'

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  display: grid;
  padding: 4rem 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: ${color};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export default Container
