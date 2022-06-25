import React from 'react'
import PropTypes from 'prop-types'
import {withPrefix} from 'gatsby'

import Layout from '../components/Layout'

const LinkButton = ({href, target, text, className}) => {
    return (
        <a className={`is-uppercase is-medium button is-fullwidth ${className}`} href={href} target={target}>{text}</a>
    );
}

const IndexPage = ({data}) => {
    // const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <section className="hero is-large">
                <div className="hero-body" style={{backgroundImage: `url(${withPrefix('/')}img/scouts/hero-1.jpg)`}}>
                    <a id="home"/>
                    <div className="container has-text-centered">
                        <h1 className="title is-2 has-text-white">
                            Cub Scout Pack 67
                        </h1>
                        <h2 className="mt-4 subtitle is-4 has-text-white">
                            Learn, Grow, Achieve
                        </h2>
                        <div className="mt-6 mb-6 is-size-4 is-italic has-text-white">
                            We are a non-denominational inclusive unit looking for boys and girls grades K-5th to join
                            our program this year. Read below or click the link to contact us and learn more!
                        </div>
                        <div className="columns is-centered">
                            <div className="column is-one-third ">
                                <LinkButton text="Sign Up Now" href="#contact-us" className="is-primary"/>
                            </div>
                            <div className="column is-one-third">
                                <LinkButton text="Watch Video" className="is-light"
                                            href="https://www.youtube.com/watch?v=-wUZ_yeY9qc&feature=emb_logo"
                                            target="_"/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="container">
                <div className="mt-6 mb-6 has-text-centered">
                    <a id="about"/>
                    <p className="is-bold is-size-4">"Cub Scouts has helped to create so many opportunities for me to spend quality time with my kids during this critical time in their lives. From meetings and events to campouts and derby, it has created a space for memories that I will cherish for a long time."</p>
                    <p className="is-italic is-size-4 mt-4">-Jonathan M.</p>
                </div>
            </section>

            <section className="container">
                <div className="columns">
                    <div className="column is-one-third has-text-centered">
                        <img src={`${withPrefix('/')}img/graphics/all-Inclusive-images.png`}/>
                        <h2 className="title is-5 mt-4">Learn Skills</h2>
                        <p className="is-size-5 has-text-grey">
                            The Cub Scout program will expose your kids to cooking, camping, orienteering and navigation, knots, crafts and so much more.
                        </p>
                    </div>
                    <div className="column is-one-third has-text-centered">
                        <img src={`${withPrefix('/')}img/graphics/rejuvenating-images.png`}/>
                        <h2 className="title is-5 mt-4">Make Friends</h2>
                        <p className="is-size-5 has-text-grey">
                            Our Pack is comprised of kids from schools all over the Santa Monica, Palisades and West LA areas. Your kids will meet a diverse set of new people and forge relationships that last.
                        </p>
                    </div>
                    <div className="column is-one-third has-text-centered">
                        <img src={`${withPrefix('/')}img/graphics/rewarding-images.png`}/>
                        <h2 className="title is-5 mt-4">Lead Others</h2>
                        <p className="is-size-5 has-text-grey">
                            The Scouting program focuses on creating leadership opportunities for the kids such as running games for younger scouts, leading hikes with peers, and teaching the group new ideas ands skills.
                        </p>
                    </div>
                </div>
                <div className="columns is-centered mt-6 mb-6">
                    <div className="column is-one-third">
                        <LinkButton text="Sign Up Now" href="#contact-us" className="is-primary"/>
                    </div>
                </div>
            </section>

            <section className="hero is-large">
                <div className="hero-body" style={{
                    backgroundImage: `url(${withPrefix('/')}img/scouts/group-pic-dark.jpg)`,
                    backgroundSize: '100% auto'
                }}>
                </div>
            </section>

            <section className="container">
                <div className="content mt-6 mb-6">
                    <h1 className="title">2021-2022 Schedule Overview</h1>

                    <ul>
                        <li>Monthly Pack Meeting starting in September 22nd (via Zoom until things change)</li>
                        <li>Fall Campout (October 22nd)</li>
                        <li>Monthly Den Meetings (Small in-person groups)</li>
                        <li>Pinewood Derby (Typically in January, TBD)</li>
                        <li>Blue and Gold Banquet (Typically in February, TBD)</li>
                        <li>Spring Campout (Typically in May, TBD)</li>
                    </ul>

                    <h1 className="title">Come join us for Scouting season '21-'22!</h1>

                    <p className="mb-4">
                        We are looking for boys and girls in grades K-5th to join our scouting program this year. Our
                        program is family oriented and is open to all who are interested. Please contact us below to
                        learn more about our program this year!
                    </p>

                    <div className="columns is-centered mt-6 mb-6">
                        <div className="column is-one-third">
                            <LinkButton text="Learn more" href="#contact-us" className="is-primary"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero is-medium">
                <div className="hero-body" style={{
                    backgroundImage: `url(${withPrefix('/')}img/scouts/kid-walking-away-dark.jpg)`,
                    backgroundSize: '100% auto'
                }}>
                    <div className="container">
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="columns is-centered">
                    <div className="column is-three-quarters box">

                        <a id="contact-us"/>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSf4VdNymWQskjGFi_kAUtidQHDTUrZXqk8x08ZyQszxqjSvUA/viewform?embedded=true"
                            width="100%" height="1300" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no">Loading…
                        </iframe>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

export default IndexPage
