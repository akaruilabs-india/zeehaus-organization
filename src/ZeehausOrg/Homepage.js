import React, { Component } from 'react'
import MiddleSection from './MiddleSection'
import Nav from './Nav'
import SectionOne from './SectionOne'
import SectionOneA from './SectionOneA'
import ThirdSection from './ThirdSection'
import CoinVideo from './Video'

export default class Homepage extends Component {
    render () {
        return (
            <div>
                <Nav />
                <SectionOne />
                <SectionOneA />
                <MiddleSection />
                <CoinVideo />
                <ThirdSection />
            </div>
        )
    }
}
