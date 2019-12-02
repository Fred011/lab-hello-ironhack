import React, { Component } from 'react'

export default class ContentSection extends Component {
    render() {
        return (
            <section className="content-container">
                <div className="content">
                    <div><img src="/images/icon1.png" alt="content 1"/></div>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>

                <div className="content">
                <div><img src="/images/icon2.png" alt="content 1"/></div>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>

                <div className="content">
                <div><img src="/images/icon3.png" alt="content 1"/></div>
                    <h3>Single-way</h3>
                    <p>A set of immutable values are passed to the components.</p>
                </div>

                <div className="content">
                <div><img src="/images/icon4.png" alt="content 1"/></div>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run modern browsers.</p>
                </div>
            </section>
        )
    }
}
