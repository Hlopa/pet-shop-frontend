import React from 'react'
import Header from './header'
import { Button } from '@/ui/button'
import Container from '@/ui/container'
import { Title } from '@/ui/title'


const FirstScreen = () => {
  return (
    <div className='h-[100vh] min-h-[600px] bg-accent-foreground flex flex-col'>
      <Header />
      <Container className='p-5 flex flex-col items-start w-[100%] grow justify-center'>
        <Title text='Cat foods' size='2xl' className='text-accent uppercase'/>
      </Container>
    </div>
  )
}

export default FirstScreen