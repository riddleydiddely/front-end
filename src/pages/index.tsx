
import { Fragment } from 'react';
import Dashboard from '../components/dashboard';

import { Layout } from "../components/layout";

export default function Home() {

  return (
    <Fragment>
      <Layout title='Welcome to Puls'>{
        <Dashboard></Dashboard>
        }
      </Layout>
    </Fragment>
  )
}


