import React from 'react'

const Navbar = () => {
  return (
    <div>
    <header>
        <div class="bg-white border-b border-gray-100">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="flex items-center justify-between h-16 lg:h-[72px]">
                    <button type="button" class="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div class="flex items-center flex-shrink-0 ml-4 lg:ml-0">
                        <a href="#" title="" class="inline-flex rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                            <span class="sr-only"> Rareblocks logo </span>
                            <img class="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/logo.svg" alt="" />
                        </a>
                    </div>

                    <div class="flex items-center justify-end ml-auto">
                        <div class="hidden lg:flex lg:items-center lg:space-x-8">
                        
<form>   
<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
<div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
    </div>
    <input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
</div>
</form>

                            <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Create Free Account </a>

                            <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Login </a>
                        </div>

                        <div class="flex items-center justify-end space-x-5">
                            <span class="hidden w-px h-6 bg-gray-200 lg:block" aria-hidden="true"></span>

                            <button type="button" class="p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>

                            <span class="w-px h-6 bg-gray-200 lg:hidden" aria-hidden="true"></span>

                            <button type="button" class="inline-flex items-center p-2 -m-2 text-gray-900 transition-all duration-200 lg:ml-6 hover:text-gray-700">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span class="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-bold text-white bg-gray-600 rounded-full"> 2 </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    

    </div>
  )
}

export default Navbar
