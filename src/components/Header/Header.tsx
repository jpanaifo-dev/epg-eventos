import {
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
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}
