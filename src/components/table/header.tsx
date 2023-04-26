type Props = {
    columns: string[],

}

export default function Header(props: Props) {
    return (
        <thead>
            <tr>
                {props.columns.map((column: string, key:number) => (
                    <th key={key} className=' sticky top-0'>{column}</th>
                ))}
            </tr>
        </thead>
    )
}