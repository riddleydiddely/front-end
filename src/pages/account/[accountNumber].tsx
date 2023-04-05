import { useRouter } from 'next/router'

import { Fragment } from 'react';
import Dashboard from '../../components/dashboard';
import { Layout } from "../../components/layout";
import Transactions from "../../components/transactions";
import { RiArrowGoBackFill } from "react-icons/ri";
import Link from 'next/link'

const AccountNumber = () => {
  const router = useRouter()
  const { accountNumber } = router.query

  return <Fragment>
    <Layout title={`Account ${accountNumber}`}>
      <div>
        <Link href={"/dashboards"}>
          <RiArrowGoBackFill></RiArrowGoBackFill>
        </Link>
        <Transactions></Transactions>
      </div>
    </Layout>
  </Fragment>
}

export default AccountNumber