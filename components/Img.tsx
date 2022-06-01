import { useState } from 'react'
import Image from 'next/image'

export default function Img({ ...props }) {
  const errorImage = '/images/white_cat.jpg'

  const [src, setSrc] = useState(props.src || errorImage)

  return (
    <Image
      {...props}
      src={src}
      alt={props.alt}
      onError={() => setSrc(errorImage)}
    />
  )
}
