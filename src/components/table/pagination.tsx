type PaginationProps = {
    pages: number[],

}

export default function Pagination(props: PaginationProps) {
    return (
        <section className="container mx-auto flex flex-col justify-center ">
            <div className="btn-group justify-center my-10 ">
                <button className="btn  outline outline-1 outline-slate-100">«</button>
                {props.pages.map((page: number, key: number) => (
                    <button key={key} className="btn ">{page}</button>
                ))}
                <button className="btn ">»</button>
            </div>
        </section>
    )
}