import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

function AppProvider({ ...props }) {

    const [page, setPage] = useState(0)

    function changePageCtx(page) {
        setPage(page)
    }

    return <AppContext.Provider value={{ page, changePageCtx }} {...props} />
}

function useAppCtx() {
    return useContext(AppContext)
}



export { AppProvider, useAppCtx }