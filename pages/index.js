import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

import constants from '../config/constants';

import Header from '../components/header';
import Interactive from '../components/interactive';

const Page = ({ info, zones }) =>
  <div>
    <Head>
      <title>Davis Shaver – SEPTA Exercise</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header
      logo={constants.logoSrc}
      text={constants.headerText}
    />
    <Interactive
      info={info}
      zones={zones}
      constants={constants}
    />
      <style jsx>{`
      div {
        background: #fff;
      }

    `}</style>
    <style global jsx>{`
      body {
        background: #f2f2f2;
        font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
      }
      div {
        box-sizing: border-box;
      }
    `}</style>
  </div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://raw.githubusercontent.com/thinkcompany/code-challenges/master/septa-fare-calculator/fares.json')
  const json = await res.json()
  return json;
}

export default Page
