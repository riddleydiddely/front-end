export type Tab = {
    id: string,
    button_name: string,
    disabled?:boolean,
}

type TabProps = {
    currentTab: string,
    setCurrentTab: Function,
    tabs: Tab[]
}

export default function Tabs(props: TabProps) {
    return (
        <div className="btn-group lg:btn-group-horizontal flex align-middle justify-center my-10">
            {props.tabs.map((tab: Tab, key:number) => (
                <button key={key} className={`btn ${props.currentTab === tab.id && "bg-riddle-primary-dark-purple border-riddle-primary-dark-purple"} ${tab.disabled && "btn-disabled"}`} onClick={() => props.setCurrentTab(tab.id)}> {tab.button_name}</button>
            ))}
        </div>
    )
}
