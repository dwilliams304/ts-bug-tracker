import { Ticket } from "../components"

export default function TicketList(){
    return(
        <div className="w-full h-full flex flex-col py-12 px-6">
            <div className="grid grid-cols-5 w-3/4 mx-auto bg-slate-300 h-14 p-4 items-center">
                <h2>Days Open</h2>
                <h2>Description</h2>
                <h2>Severity</h2>
                <h2>Assigned To</h2>
                <h2>Tags</h2>
            </div>

            <div className="border border-slate-400 w-3/4 justify-center mx-auto space-y-2">
                {/* TICKET COMPONENTS GOES HERE */}
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
        </div>
    )
}