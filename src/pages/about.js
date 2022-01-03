import React from "react"
import SocialLinks from '../components/SocialLinks'
import Layout from "../components/Layout"
import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
  <>
    <MainContent
      title="Sobre mim | CeuVago"
      description="Saiba um pouco mais sobre este blog."
      openGraph={{
        type: 'website',
        locale: 'pt_BR',
        url: 'https://ceuvago.com',
        site_name: 'CeuVago',
        title: 'Ceuvago',
        images: [
          {
            url: 'https://rodrigofaustino.com.br/assets/img/blog-cover.png',
            width: 1200,
            height: 630,
            alt: 'CeuVago Blog'
          }
        ]
      }}
    />
    <MainContent>
      <h4>Sobre o ceuvago</h4>
      <p>
        Este tem como objetivo principal desmistificar assuntos que muitos pensam ser sagrados, 
        desmistificar é basicamente desvendar o que esta escondindo mostrando o outro lado das coisas.
        </p>
        <h4>Conhecimento</h4>
      <p>
         Aqui teremos assuntos como conhecimentos bíblicos, contradições bíblicas, conhecimento sobre filosofia, 
         conhecimento sobre ateísmo e ceticismo.
      </p>

      <p>
        A criação desse site foi motivado pelo crescimento desenfreado do evangelismo cristão,
        devido a falsa ilusão de um paraíso e inferno divulgado por este grupo, algumas pessoas são alvo de preconceito e descriminação, como
        grupos de outras religiões, e pessoas sem religião, então desmisitificar o máximo possivel as ideias podem abrir as mentes para enteder que as pessoas podem ter sua opção religiosa ou opção de não religião e não ser vista como pessoa "Imoral/anormal".

      </p>
      <p>
        Muitas pessoas no brasil e no mundo muitas vezes se sentem oprimidas por não expressar seu pensamento, com medo de serem mal vistas ou até perseguidas, então o conhecimento é o poder para fazer essas pessaos seguras para expor suas ideias de forma rcional e fazer seus opositores fecharem suas bocas opressoras.
      </p>
      <p>
        Por que ceuvago? ceu do inglês "heaven" vazio, onde não há nada no céu nem abaixo da terra, não há mundo espiritual, parece uma pretensão essa afirmação, porém até o momento os dados ou evidências que temos susteta essa negação..
      </p>
      <p>
      Tenho visto com freguência dialogos entre pessoas que deixam uma igreja ou grupo religioso por não concordar com a liderança ou ate mesmo por querer ser o lider e por não achar espaço acaba por fundar ou criar grupos para disseminar suas ideias por puro ego.
      </p>
      <p>
As vezes a facilidade de consumir conteúdo pré mastigado por terceiros é atrante e facilita as interações na internet, porém pode ser um grande problema, pois muitos dos failitadores ou gurus ou influencadores podem estar motivados ou por ego, ou por ganhos financeiros passar informção irreal ou negacionista com um viés para ganhar alguma coisa não importando com o crescimento ou a saúde dos ouvintes, CUIDADO AO CONSUMIR CONTEÚDO MASTIGADO, ele pode esta vomitado.
</p>
      <p>
O ato de pensar com a própria cabeça é um modo de ter a mente critica e elevar a inteligência, ouça leia, veja vídeos porém verifique as fontes e veja se há bases no que a pessoa diz e não apenas a pessoa esta negando verdades validadas e construidas por mentes que deram a vida para construir o conhecimento. não admira pessoas e sim argumentos, siga pessoas que tem argumentos sólidos porém não receber tudo cegamente sem usar sua mente critica como um religioso extremista que só porque vem da autoridade não pode ser questionada, tudo é questionado;
</p>
      <p>
A mente ateísta nasce da critica a conceitos que forma divulgados sem questionar, desde os tempos primitivos criaram as ideias de deuses, mas a mente critica resolveu questionar e conseguiu desenvolver meios para solidificar conhecimentos suficiente para que a ideia teísta, deísta, panteísta ou outras relacionadas a deuses sejam questionadas, é subindo no ombro de outras mentes brilhantes que se alcança mais conhecimento, mas se apenas se admira a pessoa segamente sem questionamento irá continuar ter a mente de ovelha sempre sendo guiado e não pensando independente, defato sejamos livres, questione tudo com base no conhecimento cientiico sempre que possivel.

      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </>
  </Layout>
)

export default AboutPage