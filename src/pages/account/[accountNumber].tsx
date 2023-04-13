import { useRouter } from 'next/router'


import Transactions from "../../components/transactions";
import { RiArrowGoBackFill } from "react-icons/ri";
import Link from 'next/link'
import { useSession } from 'next-auth/react';

const AccountNumber = () => {
  const { data: session, status } = useSession({required:true})
  const router = useRouter()
  const { accountNumber } = router.query

  return <div>
  <Link href={"/dashboards"}>
    <RiArrowGoBackFill></RiArrowGoBackFill>
  </Link>
  <Transactions></Transactions>
</div>
}

export default AccountNumber