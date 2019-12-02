import React from 'react'
import Navbar from './Navbar'
import HeaderLab from './HeaderLab'
import ContentSection from './ContentSection'
import './App.css'


class App extends React.Component {
    state = {

    }
    render() {
        return(
            <div className="app">
                <div className="bg">
                    <Navbar />
                    <HeaderLab />
                </div>
                <ContentSection />
            </div>
        )
    }
}

export default App; 