import React from 'react'
import William from '../assets/continuacao/william.png'
import Barba from '../assets/continuacao/barba.png'
import Web01 from '../assets/continuacao/web01.png'
//import Web02 from '../assets/continuacao/web02.png'
import Web03 from '../assets/continuacao/web03.png'
import Whats from '../assets/continuacao/contato/whatsapp.png'
import Email from '../assets/continuacao/contato/mail.png'
import Facebook from '../assets/continuacao/contato/facebook.png'
import Instagram from '../assets/continuacao/contato/instagram.webp'
import Youtube from '../assets/continuacao/contato/youtube.png'
import Tiktok from '../assets/continuacao/contato/tiktok.png'
import Linkedin from '../assets/continuacao/contato/linkedin01.png'
function Continuacao() {
    return (
        <>
            <main class="text-center  h-full">
                <section class="bg-yellow-50">
                    <h1>Portifolio dev!</h1>
                </section>
                <section class="bg-violet-200">
                    <div class="pb-20 ">
                        <h1 class="pt-20 font-medium text-2xl">Olá, eu sou William</h1>
                        <p class="mt-5 mb-10">Desenvolvedor Full Stack apaixonado por criar soluções web incríveis.</p>
                        <a class="bg-violet-800 text-violet-50 px-3 py-2 rounded-md" href="#projetos">Ver Projetos</a>
                        <img class="rounded-full m-auto pt-20" src={William} alt="Minha Imagem" />
                    </div>
                </section>
                <section class="bg-violet-50">
                    <div class="flex flex-col items-center justify-center gap-10 p-10">
                        <img class="rounded-full mt-8 pt-20" src={Barba} alt="Minha Imagem" />
                        <div class="text-center sm:text-left">
                            <h1 class="text-2xl font-medium">Sobre Mim</h1>
                            <p class="mt-5 max-w-lg">
                                Sou gaúcho e moro em Santa Catarina. Comecei a praticar mesmo depois de um ano de curso, e então fui conhecer o Laravel. Desde então, estou codificando e sempre buscando aprender mais. Sigo praticando diariamente!
                            </p>
                        </div>
                    </div>
                </section>
                <section class="bg-violet-200">
                    <div>
                        <h1 class="pt-20 font-medium text-2xl">Habilidades</h1>
                        <div class="flex justify-center flex-col gap-4 py-25 px-8">
                            <div class="bg-[#fff] p-5 rounded-lg">
                                <p>HTML5</p>
                            </div>
                            <div class="bg-[#fff] p-5 rounded-lg">
                                <p>CSS3</p>
                            </div>
                            <div class="bg-[#fff] p-5 rounded-lg">
                                <p>Javascript</p>
                            </div>
                            <div class="bg-[#fff] p-5 rounded-lg">
                                <p>Tailwind</p>
                            </div>
                            <div class="bg-[#fff] p-5 rounded-lg">
                                <p>PHP</p>
                            </div>
                            <div class="bg-[#fff] p-5 rounded-lg">
                                <p>Laravel</p>
                            </div>
                            <div class="bg-[#fff] p-5 rounded-lg">
                                <p>Node js</p>
                            </div>
                            <div class="bg-[#fff] p-5 rounded-lg">
                                <p>React</p>
                            </div>
                            <div class="bg-[#fff] p-5 rounded-lg">
                                <p>MySql</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bg-yellow-50" id='projetos'>
                    <h1>Meus projetos!</h1>
                </section>
                <section class="bg-violet-200">
                    <div>
                        <h1 class="pt-20 font-medium text-2xl">Projetos</h1>
                        <div class="flex justify-center flex-col gap-4 py-25 mx-8 sm:flex-row">
                            <div class="bg-violet-50 rounded-lg flex flex-col">
                                <div className='flex-1'>
                                    <img class="rounded-t-md" src={Web01} alt="Minha Imagem" />
                                    <h1 class=" mb-10">Projeto web 01</h1>
                                    <p class="mb-5">Uma breve descrição do projeto.</p>
                                </div>
                                <div>
                                    <a class="bg-violet-800 text-violet-50 block px-3 py-2 rounded-b-md" href="#">Ver Projeto</a>
                                </div>
                            </div>
                            <div class="bg-violet-50 rounded-lg flex flex-col">
                                <div className='flex-1'>
                                    <img class="rounded-t-md" src={Web03} alt="Minha Imagem" />
                                    <h1 class=" mb-10">CyberLab Hub</h1>
                                    <p class="mb-5">Esse projeto uso para após realizar um pentest em labs escrevo o passo a passo assim sempre quando posso dou uma lida.</p>
                                </div>
                                <div>
                                    <a class="bg-violet-800 text-violet-50 block px-3 py-2 rounded-b-md" href="https://vuln-lab01.vercel.app/">Ver Projeto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bg-yellow-50">
                    <h1>Entre em contato comigo!</h1>
                </section>
                <section class="bg-violet-200 text-center">
                    <div className=''>
                        <h1 class="pt-20 font-medium text-2xl">Contato</h1>
                        <div className='flex justify-center gap-2 py-8'>
                            <a href="https://wa.me/5548988645017"><img src={Whats} alt="" className='w12 h-12' /></a>
                            <a href="mailto:williamdeoliveira360@outlook.com"><img src={Email} alt="" className='w12 h-12' /></a>
                            <a href="https://www.linkedin.com/in/william-vinicius-oliveira-da-rosa-6371b2173/"><img src={Linkedin} alt="" className='w12 h-12' /></a>
                            <a href="https://www.youtube.com/@hackeroliver8074"><img src={Youtube} alt="" className='w12 h-12' /></a>
                            <a href="https://www.instagram.com/williamoliveira9638/"><img src={Instagram} alt="" className='w12 h-12' /></a>
                            <a href="https://www.facebook.com/profile.php?id=61580520103293"><img src={Facebook} alt="" className='w12 h-12' /></a>
                            <a href="https://www.tiktok.com/@hackeroliver"><img src={Tiktok} alt="" className='w12 h-12' /></a>
                        </div>
                    </div>
                </section>
            </main>
            <footer class="bg-violet-800 text-violet-50 text-center p-10">
                <div>
                    <p>© 2025 William Vinicius Oliveira da Rosa. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}

export default Continuacao