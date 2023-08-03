
import React from "react";

function mainPayArea() {
    return <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 bg-red-500 ">her</div>

}
function emptyInvoice() {
    return  <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 bg-red-500">asdfkj</div>
}
export default function Pay() {
    return  (
        <div className={"flex"}>
            {mainPayArea()}
            {emptyInvoice()}
        </div>
    )
}


