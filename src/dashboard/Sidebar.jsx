
export const Sidebar = ({channels}) =>{

    if(!channels){
        return null
    }

    return (
        <div className="sidebar-container">
            <span className="sidebar-title"> Sugeridos</span>
            <span className="sidebar-subtitle"> CANALES QUE SIGO</span>
            {channels.map((channels) =>{
                return(
                    <div key={channels.id} className="sidebar-list-item">
                        <span className="sidebar-list-username">{channels.username}</span>
                        <span className="sidebar-list-status"
                            style={{
                                color: channels.isOnline ? 'green' : 'red'
                            }}
                        >
                            {channels.isOnline ? 'online' : 'offline'}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}