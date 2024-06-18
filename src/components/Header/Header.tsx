import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'

export default function Header() {
  return (
    <>
      <Navbar
        className="fixed top-0 w-full z-50 bg-transparent shadow-md"
        classNames={{
          item: 'text-white',
        }}
        maxWidth="2xl"
      >
        <NavbarContent>
          <NavbarBrand>
            <NavbarItem
              as={'a'}
              href="/"
            >
              <img
                src="/images/logo.webp"
                alt="Logo"
              />
            </NavbarItem>
          </NavbarBrand>
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
