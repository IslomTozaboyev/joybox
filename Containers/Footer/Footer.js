import React from 'react'
import FooterWrapper from './FooterWrapper';
import Container from '../Container';
import FooterData from '../../Data/FooterData';
import Link from 'next/link';

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <div className="row">
                    {FooterData.map((v, i) => {
                        return (
                            <div key={i} className="col-sm-6 col-md-4">
                                <div className="">
                                    <h4 className="fw-bold">{v.title}</h4>
                                    {v.subtitle.map((v, i) => {
                                        return <ul key={i}>
                                            <li><Link href={v.href}><a>{v.title}</a></Link></li>
                                        </ul>
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </FooterWrapper>
    )
}

export default Footer;
