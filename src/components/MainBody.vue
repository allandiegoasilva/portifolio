<template>

    <div class="flex justify-center items-center mt-20">
        <div class="md:w-7/12 w-10/12 mt-5">
            <div class="md:flex md:items-center">
                <div class="mb-3 md:mb-0 md:mr-5">
                    <img src="/images/cat_htb.jpg" class="rounded-full border-4 border-gray-800 md:h-auto md:w-auto w-5/12 h-5/12" alt="">
                </div>
                <div class="">
                    <p class="flex text-5xl font-bold text-gray-100">{{name}}</p>
                    <p class="flex text-green-400 text-opacity-65 text-xl font-medium">Full Stack Developer</p>
                    <div class=" text-lg text-gray-500 font-normal">
                        <p v-text="aboutMe"/>
                    </div>
                </div>
            </div>
            <div class="flex md:pt-10 pt-4 text-gray-400">
                <a :href="email" class="px-8 p-3 rounded-full hover:bg-[#292929] transition bg-[#1f1f1f]">Contact</a>
                <a :href="link.url" v-for="(link, index) in links" :key="index" class="ml-2 flex items-center hover:opacity-70 transition">
                <img :src="link.icon">
                </a>
            </div>
        </div>
    </div>
    <AboutMe/>
</template>
<script>

import AboutMe from "./AboutMe.vue"

export default {
  components: {
    AboutMe
  },
  name: 'MainBody',
  data(){
    return {
        name: "Allan Diego", 
        email: "mailto:contato@allandiego.com.br",
        aboutMe:" I'm a full stack developer with over 3 years of experience, and a student who spends most all of his free time doing open source projects/websites/softwares.",
        links: [
            {
              url: "https://github.com/allandiegoasilva",
              icon: "/images/github.svg"
            },
            {
              url: "https://github.com/allandiegoasilva",
              icon: "/images/linkedin.svg"
            }
        ]
    }
  }
}
</script>
