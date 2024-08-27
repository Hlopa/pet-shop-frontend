import React from 'react'
import Image from 'next/image'
import Container from '@/ui/container'
import UserHeaderBtns from '@/feature/userheaderbtns'

const Header = () => {
  return (
    <header>
      <Container className='flex px-5 py-4 justify-between items-center'>
        <Image src="/img/logo.svg" alt='logo' width={119} height={50} />
        <UserHeaderBtns />
      </Container>
    </header>
  )
}

export default Header