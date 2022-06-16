<template>
       <div class="flex justify-center items-center w-screen mt-20 bg-[#1f1f1f] py-20">
         <div class="md:flex md:w-7/12 w-10/12 justify-between items-center">
            <div class="md:w-2/3 text-gray-200">
               <p class="text-3xl font-semibold">About Me</p>
               <p class="mt-4 md:w-11/12">
                  I've been playing with development since 2017 (<!-- -->5<!-- --> years) and although I am a full stack developer, I like cyber security more.
               </p>
               <p class="mt-4 md:w-11/12">The mainly tools that I use is on the right. I have another skills like: PHP, JS, Nginx, Virtual box and anothes.</p>
            </div>
            <div class="justify-center md:w-1/2 flex grid grid-cols-2 gap-4 text-gray-200 font-medium md:mt-0 mt-5">
               <div class="flex justify-center">
                  <div class="w-full">
                     <div class="p-4 rounded-xl bg-[#252525]">
                        <div class="w-1/2 rounded-xl bg-green-500 p-4 bg-opacity-20">
                           <img src="/images/logo-htb.svg"/>
                        </div>
                        <p class="mt-2">Hack The Box</p>
                        <p>Since 2022</p>
                     </div>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div class="w-full">
                     <div class="p-4 rounded-xl bg-[#252525]">
                        <div class="w-1/2 rounded-xl bg-red-900 p-4 bg-opacity-20">
                           <img src="/images/try-hack-me.png" width="30px" height="30px">
                        </div>
                        <p class="mt-2">Try Hack Me</p>
                        <p>Since 2019</p>
                     </div>
                  </div>
               </div>
               <div class="flex justify-center h-full">
                  <div class="w-full">
                     <div class="p-4 rounded-xl bg-[#252525]">
                        <div class="w-1/2 rounded-xl bg-orange-400 p-4 bg-opacity-20">
                           <img src="/images/portswigger-logo.svg" />
                        </div>
                        <p class="mt-2">Burp Suite</p>
                        <p>Since 2019</p>
                     </div>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div class="w-full">
                     <div class="p-4 rounded-xl bg-[#252525]">
                        <div class="w-1/2 rounded-xl bg-blue-500 p-4 bg-opacity-20">
                           <img src="/images/python.svg">
                        </div>
                        <p class="mt-2">Python</p>
                        <p>Since 2015</p>
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
