import React from 'react';

const Blog = () => {
    const qnas =[
        {
            "id": "1",
            "question": "What are the different ways to manage a state in a React application?",
            "answer" : "Using React Hooks, and state management library built for React link Redux, Recoil, Jotai, Zustand"
        },
        {
            "id": "2",
            "question": "How does prototypical inheritance work?",
            "answer" : "In JavaScript, objects have a special hidden property “prototype”, that is either null or references another object. That object is called “a prototype”, When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”."
        },
        {
            "id": "3",
            "question": "What is a unit test? Why should we write unit tests?",
            "answer" : "Unit Testing is a type of software testing where individual units or components of a software are tested. The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages."
        },
        {
            "id": "4",
            "question": "Difference between React, Angular & Vue?",
            "answer" : "React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework."
        }
    ]
    return (
        <div>
            
        <div class="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <h2
            class="font-semibold  lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-primary"
        >
            Frequently Asked Questions
        </h2>
        <div
            class="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start"
        >
            <div class="">
            <p
                class="font-normal dark:text-gray-400 text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12"
            >
                Here are few of the most frequently asked questions by our valueable
                customers
            </p>
            </div>

        </div>
        <div class="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
            <div class="md:w-5/12 lg:w-4/12 w-full">
            <img
                src="https://i.postimg.cc/8zWgydJX/download.png"
                alt="of Glass bottle"
                class="w-full md:block hidden"
            />
            <img
                src="https://i.postimg.cc/8zWgydJX/download.png"
                alt="of Glass bottle"
                class="w-full md:hidden block"
            />
            </div>
            <div class="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
            {
                qnas.map(qna => 
                    <div className="collapse shadow-lg">
                    <input type="checkbox" /> 
                        <div className="collapse-title text-xl font-medium">
                            {qna.question}
                        </div>
                        <div className="collapse-content"> 
                            <p>{qna.answer}</p>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
        </div>
  
  
  
        </div>
    );
};

export default Blog;