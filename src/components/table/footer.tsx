type Props = {
    columns: string[],

}

export default function Footer(props: Props) {
    return (
        <tfoot>
            <tr>
                {props.columns.map((column: string, key:number) => (
                    <th key={key} className='sticky bottom-0'>{column}</th>
                ))}
            </tr>
        </tfoot>
    )
}