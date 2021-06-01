import React from 'react'
import { Container} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer bg-current relative pt-1" style={{backgroundColor: "#36393f" }}>
            <Container>
            <div className="container mx-auto px-6">
                <div className="sm:flex sm:mt-5">
                    <div className="sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">코로나</span>
                            <span className="my-2"><a href="/" className="text-white text-md hover:text-blue-500">홈</a></span>
                            <span className="my-2"><a href="/info" className="text-white text-md hover:text-blue-500">확진자 정보</a></span>
                            <span className="my-2"><a href="/countries" className="text-white text-md hover:text-blue-500">나라별 정보</a></span>
                            <span className="my-2"><a href="/news" className="text-white text-md hover:text-blue-500">관련뉴스</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="mt-6 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-white mb-2">
                            © 2021 by Dohyun
                        </p>
                    </div>
                </div>
            </div>
            </Container>
        </footer>
    )
}

export default Footer;
