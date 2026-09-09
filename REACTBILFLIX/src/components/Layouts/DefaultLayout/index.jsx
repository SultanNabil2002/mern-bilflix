import React from 'react'
import Navbar from '@/pages/Landing/Navbar'
import Loading from '@/components/modules/Elements/Loading'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '@/utils/firebase'
import { emailStorageAtom, tokenAtom } from '@/jotai/atoms'
import { useAtom } from 'jotai'

const DefaultLayout = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    const [emailStorage] = useAtom(emailStorageAtom)
    const [tokenStorage] = useAtom(tokenAtom)

    if (loading) return <Loading />

    if (error) return <p>error...</p>

    if (user && emailStorage && tokenStorage) return location.replace("/browse")

    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default DefaultLayout