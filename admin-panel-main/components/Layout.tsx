import React, { type ReactNode } from 'react'
import Sidebar from './Sidebar/Sidebar'
import SidebarItem from './Sidebar/SidebarItem'
import { home, settings } from '@/utils/contants'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import SettingNav from './Sidebar/Settings/SettingNav'
import TestItem from './Sidebar/TestItem'
import SettingsSidebarItem from './Sidebar/Settings/SettingsSidebarItem'

type Props = {
    children: ReactNode
}
// const inter = Inter({ subsets: ['latin'] })

const Layout = (props: Props) => {
    const router = useRouter()

    // Check if the current route is a Settings page
    const isSettingsPage = router.pathname.startsWith('/settings');

    return (
        <>
            {isSettingsPage ? (
                <SettingNav>
                    {settings.map(({ icon, name, subItem }, index) =>
                    (
                        <SettingsSidebarItem key={index} icon={icon} name={name} subItem={subItem} />
                    )
                    )}
                </SettingNav>
            ) : (
                <Sidebar>
                    {home.map(({ name, href, icon }, index) => (
                        <SidebarItem key={index} icon={icon} name={name} href={href} />
                    ))
                    }
                </Sidebar>)
                }
            <div className={`ml-[225px] py-4 px-4 md:py-8 lg:px-12`}>
                {props.children ?? null}
            </div>
        </>

    )
}

export default Layout;