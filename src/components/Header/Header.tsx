import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'

export default function Header() {
  return (
    <>
      <Navbar>
        <NavbarContent>
          <NavbarBrand>Logo</NavbarBrand>
          <NavbarItem
            as={'a'}
            href="/"
          >
            Home
          </NavbarItem>
          <NavbarItem
            as={'a'}
            href="/ponentes"
          >
            Ponentes
          </NavbarItem>
          <NavbarItem
            as={'a'}
            href="/eventos"
          >
            Eventos
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}
