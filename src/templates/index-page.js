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
                    <h1 className="titles"><a id="schedule"/>How are we handling the COVID-19 pandemic?</h1>

                    <p className="mb-4">
                        Our Pack is a part of the larger West Los Angeles County Council organization of Packs and
                        Troops. The national and council guidelines, created in accordance with guidelines from the CDC
                        and our healthcare advisors, have advised that we limit the in-person contact to only include
                        small groups for our program this year. To learn more about the COVID response from the county
                        and national organizations, check out &nbsp;

                        <a href="https://bsa-la.org/covid-19/#1584393159779-833324e0-69af">these resources</a>.
                    </p>

                    <p>
                        Our plan is to conduct Pack level activities via Zoom and conduct Den level meetings in-person
                        with small groups. While we want to get kids together, individual Dens and families may remain
                        remote due to comfort level with in-person meetings; we are committed to supporting both modes
                        of participation this year. For those doing it, we are planning to hold these in-person meetings
                        with up-to 15 kids and 3 adults following national and council safety guidelines.

                        <ul>
                            <li>Up to 15 kids in the meeting</li>
                            <li>Up to 18 people total (adults + kids) with at-least 3 adults</li>
                            <li>One adult acting as Health Monitor</li>
                            <li>Everyone wearing masks</li>
                            <li>Take temperature at the start of the meeting</li>
                            <li>Maintain social distancing of at least 6ft</li>
                        </ul>
                    </p>

                    <p>
                        While we are all excited to return to our regular in-person meeting and campout
                        culture, we are confident we can deliver a quality scouting program this coming year safely
                        using remote tools and small in-person meetings.
                    </p>

                    <h1 className="title">2020-2021 Schedule Overview</h1>

                    <p className="mb-4">
                        Given the uncertainty presented by COVID this year, we are not exactly sure what our schedule is
                        going to be like. Given that, this is what we intend to do right now.
                    </p>

                    <ul>
                        <li style={{textDecoration: "line-through"}}>Open House in September 29th (via Zoom until things change)</li>
                        <li style={{textDecoration: "line-through"}}>Monthly Pack Meeting starting in September 22nd (via Zoom until things change)</li>
                        <li>Campout In-place in October 24th - 25th (via Zoom until things change) Learn more <a href={`${withPrefix('/')}pdf/2020 Pack 67 Camp-In.pdf`} target="_">HERE</a></li>
                        <li>Monthly Den Meeting starting in September (Small in-person groups)</li>
                        <li>Pinewood Derby (Typically in January, TBD)</li>
                        <li>Blue and Gold Banquet (Typically in February, TBD)</li>
                        <li>Spring Campout (Typically in May, TBD)</li>
                    </ul>

                    <h1 className="title">Come join us for Scouting season '20-'21!</h1>

                    <p className="mb-4">
                        We are looking for boys and girls in grades K-5th to join our scouting program this year. Our
                        program is family oriented and is open to all who are interested. We will be hosting an open
                        house in September to share information about our program and provide an opportunity for
                        families to see what we do first hand. Please join us there or contact us below to learn more
                        about our program this year!
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
                        <h1 className="title">
                            Test
                        </h1>
                        <h2 className="subtitle">
                            Test
                        </h2>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="columns is-centered">
                    <div className="column is-three-quarters box">
                        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="contact" />
                            <h1 className="title has-text-centered mb-6"><a id="contact-us"/>Contact Us to Learn More
                            </h1>
                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">Name</label>
                                </div>
                                <div className="field-body">
                                    <input name="name" className="input" type="text" placeholder="John Doe"/>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">Email</label>
                                </div>
                                <div className="field-body">
                                    <input name="email" className="input" type="email" placeholder="e.g. jdoe@gmail.com"/>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">Phone</label>
                                </div>
                                <div className="field-body">
                                    <input name="phone" className="input" type="tel" placeholder="(optional)"/>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label">
                                    <label className="label">Age Groups</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <label className="checkbox">
                                                <input type="checkbox" name="age[]" value="lion" />
                                                Lion (Kindergarten)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label">
                                    <label className="label"></label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <label className="checkbox">
                                                <input type="checkbox" name="age[]" value="tiger" />
                                                Tiger (1st Grade)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label">
                                    <label className="label"></label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <label className="checkbox">
                                                <input type="checkbox" name="age[]" value="wolf" />
                                                Wolf (2nd Grade)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label">
                                    <label className="label"></label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <label className="checkbox">
                                                <input type="checkbox" name="age[]" value="bear" />
                                                Bear (3rd Grade)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label">
                                    <label className="label"></label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <label className="checkbox">
                                                <input type="checkbox" name="age[]" value="webelos" />
                                                Webelos (4th & 5th Grade)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">Question</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                        <textarea name="comment" className="textarea"
                                                  placeholder="Explain how we can help you"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal mt-6">
                                <div className="field-label">
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <button className="is-uppercase button is-primary">
                                                Send message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
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
