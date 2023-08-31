import React from 'react'

const Hero = () => {
  return (
    <div>
    <div class="bg-[#1e2028] pb-6 sm:pb-8 lg:pb-12 ">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
        <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-3xl" aria-label="logo">
          <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
  
          Lakshita
        </a>
      
        <nav class="hidden gap-12 lg:flex">
          <a href="#" class="text-lg font-semibold text-indigo-500">Home</a>
          <a href="#" class="text-lg font-semibold text-gray-200 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Features</a>
          <a href="#" class="text-lg font-semibold text-gray-200 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>
          <a href="#" class="text-lg font-semibold text-gray-200 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
        </nav>
       
        <a href="#" class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-700 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact Sales</a>
  
        <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
  
          Menu
        </button>
      </header>
  
      <section class="flex flex-col justify-between lg:pt-4 gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p class="mb-4 font-semibold text-blue-300 md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>
  
          <h1 class="mb-8 text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Find your <span className='text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500'>Style </span>online</h1>
  
          <p class="mb-8 leading-relaxed text-gray-400 md:mb-12 lg:w-4/5 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>
  
          <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>
  
            <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
          </div>
        </div>
       
        <div class="h-48 overflow-hidden rounded-3xl bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <img src="https://images.unsplash.com/photo-1585914924626-15adac1e6402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
        </div>
      </section>
    </div>
  </div>
    </div>
  )
}

export default Hero
