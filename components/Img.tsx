import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

export default function Img({ ...props }: ImageProps) {
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
