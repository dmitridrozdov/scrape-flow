import React from 'react'

interface LogoProps {
  fontSize?: string;
  iconSize?: number;
}

function Logo({ fontSize = "2xl", iconSize = 20 }: LogoProps): React.ReactElement {
  return (
    <div>Logo</div>
  )
}

export default Logo