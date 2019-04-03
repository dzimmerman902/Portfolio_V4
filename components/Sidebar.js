import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

const Nav = styled.nav``

const Background = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: ${({ open }) => (open ? 100 : -1)};
  transition: all 0.2s;
  ${({ open }) =>
    open &&
    css`
      background-color: rgba(0, 0, 0, 0.7);
      display: block;
    `};
`

const Icon = styled.span`
  position: relative;
  margin-top: 2.5rem;

  &,
  &::before,
  &::after {
    width: 3rem;
    height: 2px;
    display: inline-block;
  }

  & {
    background-color: ${({ open, theme }) =>
    open ? 'transparent' : theme.colorWhite};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    transition: all 0.2s;
    background-color: ${({ theme }) => theme.colorWhite};
  }

  &::before {
    top: ${({ open }) => (open ? 0 : '-0.8rem')};
    ${({ open }) =>
    open &&
      css`
        transform: rotate(135deg);
      `};
  }

  &::after {
    top: ${({ open }) => (open ? 0 : '0.8rem')};
    ${({ open }) =>
    open &&
      css`
        transform: rotate(-135deg);
      `};
  }
`

const Button = styled.div`
  background-color: ${({ theme }) => theme.colorPrimary};
  height: 5rem;
  width: 5rem;
  position: fixed;
  top: 2rem;
  left: 2rem;
  border-radius: 50%;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(black, 0.1);
  text-align: center;
  cursor: pointer;

  &:hover ${Icon}::before {
    top: ${({ open }) => !open && '-1rem'};
  }

  &:hover ${Icon}::after {
    top: ${({ open }) => !open && '1rem'};
  }
`

const Collapse = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  height: 100vh;
  width: 35rem;
  z-index: 500;

  padding-top: 12rem;
  background-color: ${({ theme }) => theme.colorGreyDark};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-35rem)')};
  transition: all 0.2s ease-in-out;
`

const List = styled.ul`
  list-style: none;
  text-align: left;
`

const Item = styled.li`
  position: relative;
  margin-bottom: 5px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1rem;
    background-color: ${({ theme }) => theme.colorPrimary};
    transition: width 200ms ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }
`

const Link = styled.a`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colorWhite};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  display: block;
  position: relative;
  padding: 1rem 4rem 1rem 2rem;
  z-index: 10;
`

const Footer = styled.div`
  text-align: center;
  padding-bottom: 2rem;
`

const Copyright = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.4rem;
  margin-bottom: 5px;
`

const Rights = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.2rem;
`

const navItems = [
  {
    id: 0,
    name: 'home'
  },
  {
    id: 1,
    name: 'employment'
  },
  {
    id: 2,
    name: 'skills'
  },
  {
    id: 3,
    name: 'education'
  },
  {
    id: 4,
    name: 'projects'
  },
  {
    id: 5,
    name: 'references'
  },
  {
    id: 6,
    name: 'hobbies'
  },
  {
    id: 7,
    name: 'activities'
  },
  {
    id: 8,
    name: 'contact'
  }
]

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Nav>
      <Button onClick={() => setOpen(!open)} open={open}>
        <Icon open={open} />
      </Button>
      <Background open={open} />
      <Collapse open={open}>
        <List>
          {navItems.map(item => (
            <Item key={item.id}>
              <Link href={`#${item.name}`} onClick={() => setOpen(!open)}>
                {item.name}
              </Link>
            </Item>
          ))}
        </List>
        <Footer>
          <Copyright>&copy; by Devin Zimmerman</Copyright>
          <Rights>All Rights Reserved</Rights>
        </Footer>
      </Collapse>
    </Nav>
  )
}

export default Sidebar
