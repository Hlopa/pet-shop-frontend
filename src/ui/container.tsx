import { cn } from '@/lib/utils'
import React, { FC } from 'react'

const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className, children }) => {
  return (
    <div className={cn('mx-auto max-w-[1440px]', className)}>{children}</div>
  )
}

export default Container