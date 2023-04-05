import { useRouter } from 'next/router'

import { Fragment } from 'react';
import Dashboard from '../../components/dashboard';
import { Layout } from "../../components/layout";
import Transactions  from "../../components/transactions";


const AccountNumber = () => {
  const router = useRouter()
  const { accountNumber } = router.query

  return <Fragment>
  <Layout title={`Account ${accountNumber}`}>
    <Transactions></Transactions>
  </Layout>
</Fragment>
}

export default AccountNumber