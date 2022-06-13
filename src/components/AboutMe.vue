<template>
       <div class="flex justify-center items-center w-screen mt-20 bg-[#1f1f1f] py-20">
         <div class="md:flex md:w-7/12 w-10/12 justify-between items-center">
            <div class="md:w-2/3 text-gray-200">
               <p class="text-3xl font-semibold">About Me</p>
               <p class="mt-4 md:w-11/12">
                  I've been playing with development since 2019 (<!-- -->3<!-- --> years) and although I am a full stack developer, I like front-end more.
               </p>
               <p class="mt-4 md:w-11/12">I mainly use Node based technologies. On the right, you can see a couple of my favourite technologies, which are also the ones I use in most of my projects.</p>
            </div>
            <div class="justify-center md:w-1/2 flex grid grid-cols-2 gap-4 text-gray-200 font-medium md:mt-0 mt-5">
               <div class="flex justify-center">
                  <div class="w-full">
                     <div class="p-4 rounded-xl bg-[#252525]">
                        <div class="w-1/2 rounded-xl bg-green-500 p-4 bg-opacity-20">
                           <svg viewBox="0 0 32 32" fill="#42b983" class="">
                              <path d="m3 6 13 22L29 6H19l-3 5.3L13 6H3zm3.5 2h3.771L16 18l5.729-10H25.5L16 24.1 6.5 8z"></path>
                           </svg>
                        </div>
                        <p class="mt-2">Vue</p>
                        <p>Since 2021</p>
                     </div>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div class="w-full">
                     <div class="p-4 rounded-xl bg-[#252525]">
                        <div class="w-1/2 rounded-xl bg-blue-500 p-4 bg-opacity-20">
                           <svg viewBox="0 0 32 32" fill="#38bdf8" class="">
                              <path d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z"></path>
                           </svg>
                        </div>
                        <p class="mt-2">Tailwind</p>
                        <p>Since 2021</p>
                     </div>
                  </div>
               </div>
               <div class="flex justify-center h-full">
                  <div class="w-full">
                     <div class="p-4 rounded-xl bg-[#252525]">
                        <div class="w-1/2 rounded-xl bg-blue-400 p-4 bg-opacity-20">
                           
                        </div>
                        <p class="mt-2">React</p>
                        <p>Since 2020</p>
                     </div>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div class="w-full">
                     <div class="p-4 rounded-xl bg-[#252525]">
                        <div class="w-1/2 rounded-xl bg-green-500 p-4 bg-opacity-20">
                           
                        </div>
                        <p class="mt-2">Node.js</p>
                        <p>Since 2019</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>

<script>
    export default {
        name: 'AboutMe',
        
    }
</script>
