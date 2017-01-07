import { Component } from 'react'
import Head from 'next/head'
import Page from '../components/Page'
import { P, A } from '../components/text'
import Link from 'next/link'

const Header = ({ children }) => (
  <header>
    <Link href='/'>
      <h1 className='Logo'>{children}</h1>
    </Link>

    <style jsx>
      {`
        .Logo {
          display: inline-block;
          background-color: #FF4136;
          color: white;
          text-transform: lowercase;
          padding: 0 0.875rem;
          margin-bottom: 1rem;
        }
    `}
    </style>
  </header>
)

const Footer = ({ children }) => (
  <footer className='Footer'>
    {children}
    <style jsx>
      {`
        .Footer {
          font-size: 0.875rem;
        }
      `}
      </style>
  </footer>
)

const Links = () => (
  <ul className='Links'>
    <li><A href='https://github.com/ali/ali.io'>View Source</A></li>
    <li><A href='https://twitter.com/aliukani'>Twitter</A></li>
    <style jsx>
    {`
      .Links {
        list-style-type: none;
        margin: 0;
        padding: 0;
        line-height: 1.6;
      }
    `}
    </style>
  </ul>
)


export default class Index extends Component {
  render() {
    return (
      <Page>
        <Head>
          <title>Ali Ukani</title>
        </Head>

        <Header>
          Ali Ukani
        </Header>

        <P>👋🏽</P>

        <P>
          software engineer at <A href="https://www.drift.com">Drift</A>.
        </P>

        <Footer>
          Made in Boston.
          <Links/>
        </Footer>

        <style jsx global>
        {`
          * {
            text-transform: lowercase;
          }
        `}
        </style>
      </Page>
    )
  }
}