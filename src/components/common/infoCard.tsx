import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon } from '@heroicons/react/20/solid'

interface Person {
  name: string,
  img_url: string
}

interface InfoCard {
  reconciled: boolean,
  psp_image_url: string,
  auditor: string,
  responsible_people: Person,
  date: Date,
  currency: string
}

export type InfoCardProps = {
  infoCard: InfoCard
}

export default function InfoCard(props: InfoCardProps) {

  return (
    <div className="shadow-lg w-auto">
      <h2 className="sr-only">Summary</h2>
      <div className="rounded-lg  shadow-sm ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap">
          <div className="flex-auto pl-6 pt-6">
            <img className='object-cover w-14' src={props.infoCard?.psp_image_url} alt="" />
          </div>

          <div className="flex-none self-end px-6 pt-4">
            <dt className="sr-only">Status</dt>
            <dd className={`inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium ${props.infoCard?.reconciled ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"}  ring-1 ring-inset ring-green-600/20`}>
              {props.infoCard?.reconciled ? "Reconciled" : "Not Reconciled"}
            </dd>
          </div>

          <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
            <dt className="flex-none">
              <span className="sr-only">Client</span>
              <img src={props.infoCard?.responsible_people.img_url} alt="" className='mx-auto h-8 w-8 flex-shrink-0 rounded-full' />
            </dt>
            <dd className="text-sm font-medium leading-6 text-gray-900">{props.infoCard?.responsible_people.name}</dd>
          </div>

          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Client</span>
              <UserCircleIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
            </dt>
            <dd className="text-sm font-medium leading-6 text-gray-900">{props.infoCard.auditor}</dd>
          </div>


          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Due date</span>
              <CalendarDaysIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
            </dt>
            <dd className="text-sm leading-6 text-gray-500">
              <time dateTime="2023-01-31">{props.infoCard?.date.toISOString().substring(0, 10)}</time>
            </dd>
          </div>

          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Status</span>
              <CreditCardIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
            </dt>
            <dd className="text-sm leading-6 text-gray-500">{props.infoCard?.currency}</dd>
          </div>

        </dl>
        <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
          <button className={`text-sm font-semibold leading-6  disabled ${props.infoCard?.reconciled ? "text-green-700" : "cursor-not-allowed text-gray-300"}`}>
            Send revision to auditor <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  )
}
