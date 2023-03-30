
import { Fragment } from 'react';

import { Layout } from "../components/layout";

export default function Home() {

  return (
    <Fragment>
      <Layout title='Welcome to Puls'>{
        <h1 className='text-black'>Hello PULS!</h1>
        }
      </Layout>
    </Fragment>
  )
}


