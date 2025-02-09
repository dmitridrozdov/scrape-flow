"use client";

import { usePathname } from 'next/navigation';
import React from 'react'

const BreadcrumbHeader = () => {
    const pathName = usePathname();
  return (
    <div>BreadcrumbHeader</div>
  )
}

export default BreadcrumbHeader