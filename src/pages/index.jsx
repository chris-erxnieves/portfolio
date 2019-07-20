import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import About from '../components/about';
import Work from '../components/work';
import Contact from '../components/contact';
import Showcase from '../components/showcase';

export default class IndexPage extends Component {
  headerItems = [
    { label: 'About', ref: 'about' },
    { label: 'Work', ref: 'work' },
    { label: 'Showcase', ref: 'showcase' },
    { label: 'Contact', ref: 'contact' },
  ];

  scrollFn = (ref = 'intro') => this.refs[ref].scrollIntoView({ block: 'center', behavior: 'smooth' });

  render() {
    return (
      <Layout scrollFn={this.scrollFn} headerItems={this.headerItems}>
        <SEO title="Home" />
        <div ref="intro"></div>
        <Intro />
        <div ref="about"></div>
        <About />
        <div ref="work"></div>
        <Work />
        <div ref="showcase"></div>
        <Showcase />
        <div ref="contact"></div>
        <Contact />
      </Layout>
    );
  }
}
