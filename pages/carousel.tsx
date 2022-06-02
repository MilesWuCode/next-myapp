import Head from 'next/head'
import { useSession } from 'next-auth/react'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

export default function Carousel() {
  const { data: session, status } = useSession()

  return (
    <>
      <Head>
        <title>Carousel</title>
        <meta name="description" content="Carousel" />
      </Head>
      <main className="container mx-auto my-0">
        <h1 className="text-3xl">Carousel</h1>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </main>
    </>
  )
}
