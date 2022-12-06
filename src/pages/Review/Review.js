import React from 'react';

const Review = () => {
    const reviews = [
        {
            "name" : "Alisha Cooper",
            "profession" : "Developer",
            "description" : "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
            "img" : "https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
        },
        {
            "name" : "Henry Jack",
            "profession" : "UI/UX Designer",
            "description" : "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
            "img" : "https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
        }
    ]
    return (
    <div>
            
        <div class="lg:px-24 md:px-6 px-4 py-12">
            <div class="flex flex-col  justify-start">
                <h1 class="lg:text-5xl text-3xl font-bold text-left text-secondary uppercase">Hear from our clients</h1>
                <p class="text-base leading-6 mt-4 text-left text-gray-600 dark:text-white  2xl:w-2/5 ">Here is why you should trust us with your work achievements</p>
            </div>
            <div class="w-full lg:flex items-center gap-6 mt-10">
                {
                    reviews.map(review => <div class="lg:w-1/2">
                    <div class="bg-white dark:bg-gray-800  border rounded-md border-gray-200 dark:border-gray-700  relative sm:p-10 p-6">
                        <div>
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg" alt="commas" />
                        </div>
    
                        <p class="text-base leading-6 text-gray-600 dark:text-white  mt-4">{review.description}</p>
                        <div class="absolute bottom-0 -mb-4 ml-10">
                            <img class="dark:hidden" src={review.img} alt="sharp" />
                        </div>
                    </div>
                    <div class="flex items-center mt-7">
                        <div class="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                            <img src="https://i.ibb.co/R6WQhYj/Mask-Group.png" class="w-10 h-10 rounded-full" alt="profile"/>
                        </div>
                        <div class="flex flex-col items-start ml-4">
                            <p class="text-base font-semibold leading-4 text-gray-800 dark:text-white ">{review.name}</p>
                            <p class="text-base leading-4 mt-2 text-center text-gray-600 dark:text-white ">{review.profession}</p>
                        </div>
                    </div>
                </div> )
                }
                {/* <div class="lg:w-1/2 lg:mt-0 mt-16">
                    <div class="bg-white dark:bg-gray-800  dark:bg-gray-800  border rounded-md border-gray-200 dark:border-gray-700  relative sm:p-10 p-6">
                        <div>
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg" alt="commas" />
                        </div>
                        <p class="text-base leading-6 text-gray-600 dark:text-white  mt-4"></p>
                        <div class="absolute bottom-0 -mb-4 ml-10">
                           <img class="dark:hidden" src="" alt="sharp" />
                        </div>
                    </div>
                    <div class="flex items-center mt-7">
                        <div class="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                            <img src="https://i.ibb.co/C6bwf12/Mask-Group.png" class="w-10 h-10 rounded-full" alt="profile"/>
                        </div>
                        <div class="flex flex-col items-start ml-4">
                            <p class="text-base font-semibold leading-4 text-gray-800 dark:text-white "></p>
                            <p class="text-base leading-4 mt-2 text-center text-gray-600 dark:text-white "></p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    
        </div>
    );
};

export default Review;