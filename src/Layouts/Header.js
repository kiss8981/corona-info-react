import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Container } from 'react-bootstrap'

const navigation = [
    { name: '홈', href: '/', current: false },
    { name: '확진자 정보', href: '/info', current: false },
    { name: '나라별 정보', href: '/countries', current: false },
    { name: '관련뉴스', href: '/news', current: false },
]
  
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
  

const Header = () => {
    return (
        <>
        <header>
            <Disclosure as="nav" className="bg-current" style={{backgroundColor: "#36393f", width: "100%", position: "fixed", zIndex: "1030", justifyContent: "space-between"}}>
        {({ open }) => (
            <>
            <Container>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            
                <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">메인매뉴</span>
                    {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>
                <div className="flex-1 logotext flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        코로나 정보
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </Container>
                
            <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                    {item.name}
                    </a>
                ))}
                </div>
            </Disclosure.Panel>
            </>
            
        )}
        </Disclosure>
        
        </header>
        </>

    )
}


export default Header;