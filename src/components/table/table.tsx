
type TableProps = {
  content: JSX.Element,
   setShowModal: Function
}

export default function Table(props: TableProps) {
  return (
    <div className="overflow-x-auto w-full shadow-2xl bg-transparent rounded-lg outline outline-1 outline-slate-100 my-10 max-h-screen">
      <table className="table w-full bg-transparent ">
        {props.content}
      </table>
    </div>
  )
}