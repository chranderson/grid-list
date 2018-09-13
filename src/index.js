import React, { Component } from 'react'
import styled from 'styled-components'
import { desaturate, lighten, radialGradient, transparentize } from 'polished'
import data from './data'
const color = '#363535'

const colors = {
  primary: '#2ade93',
  secondary: '#192138',
  silver: 'rgb(224,224,224)',
  white: '#ffffff'
}

const cubicBezier = `
  cubic-bezier(0.4, 0, 0.2, 1)
`

// base row style that will keep columns in sync
const rowGrid = `
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 3fr 2fr 1fr 1fr;
  grid-column-gap: 0.25rem;
  padding: 1rem 0.5rem;
  z-index: 0;
  `

/* loading skeleton ;) */
const emptyCell = `
  /* loading skeleton ;) */
  &:empty::after {
    position: absolute;
    content: '';
    top: 0.25rem;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
    height: calc(100% - 0.5rem);
    width: calc(100% - 0.5rem);
    border-radius: 3px;
    background-color: darkGray;
  }
`

const boxShadow = `
  // box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.3);
  &:hover:not(:active) {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
`

const oddWhiteRow = `
  &:nth-of-type(even) {
    // color: gray;
    background-color: rgba(0,0,0,0.05);
  }
`

const lilHoverBorder = `
  border: 1px solid transparent;
  transition: border-color 155ms ease-in-out;

  &:hover {
    border-color: ${colors.primary};
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: auto auto;
  height: 100%;
  box-sizing: border-box;
`

const Header = styled.div`
  ${boxShadow};
  ${rowGrid};
  border-bottom: 1px solid ${color};
  padding-bottom: 0.5rem;
  background-color: ${colors.silver};

  &:focus {
    background-color: ${colors.white};
    outline: none;
  }
`
const HeaderCell = styled.div`
  box-sizing: inherit;
  padding: 0.25rem 1rem;
  min-height: 1.4rem;
  font-weight: 600;
  ${emptyCell};

  &:focus {
    background-color: yellow;
  }
`

const ListCell = styled.div`
  position: relative;
  box-sizing: inherit;
  padding: 0.5rem 1rem;
  min-height: 1.7rem;
  ${emptyCell};
  ${lilHoverBorder};
`

const List = styled.ul`
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  background-color: rgb(230, 230, 230);

  background: linear-gradient(210deg, rgb(240, 240, 240), rgb(236, 236, 236));
  ${lilHoverBorder};

  /*box-shadow: none;*/
  ${'' /* box-shadow: inset 0 0 10px #000000;
  &:hover {
    box-shadow: inset 0 0 10px #ff0000;
  }

transition: box-shadow 255ms ease-in; */};

  &:focus {
    background-color: transparentize(0.1, ${colors.primary});
    outline: none;
  }
`

const ListItem = styled.li`
  ${rowGrid};
  ${oddWhiteRow};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: box-shadow 255ms ${cubicBezier};
`

const ListRow = ({ data, headers, onClick }) => (
  <ListItem onClick={onClick}>
    {headers.map(x => <ListCell key={x}>{data[x]}</ListCell>)}
  </ListItem>
)

const headers = Object.keys(data[0])

export default class extends Component {
  handleClick = i => () => {
    console.log('i clicked ', i)
  }

  render() {
    return (
      <Wrapper>
        <Header tabIndex="0">
          {headers.map((x, i) => <HeaderCell key={x}>{x}</HeaderCell>)}
        </Header>
        <List tabIndex="0">
          {data.map((x, i) => (
            <ListRow
              data={x}
              headers={headers}
              key={i}
              onClick={this.handleClick(i)}
            />
          ))}
        </List>
      </Wrapper>
    )
  }
}
