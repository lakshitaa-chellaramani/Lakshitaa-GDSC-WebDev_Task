import React from 'react'

const TwoCards = () => {
    return (
        <div>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-3xl px-4 md:px-8">

                    <div class="grid gap-4 px-8 md:grid-cols-2 md:gap-8">
                        <div class="flex  flex-col items-center gap-4 rounded-lg   md:gap-6">
                            <img
                                src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-12.png&w=1080&q=100"
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div class="flex flex-col items-center gap-4 rounded-lg   md:gap-6">
                            <img
                                src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-13.png&w=1080&q=100"
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoCards
