import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

import Theme from '../components/Theme';
import SenseLogo from '../../static/sixgill-sense-logo-inverted.svg';

const Hero = styled.div`
  z-index: 1;
  background-image: linear-gradient(
    120deg,
    ${(props) => props.theme.colors.primary} 0%,
    #002966 100%
  );
  color: #fff;
  padding: 30px 40px 30px 40px;
  display: flex;
  justify-content: space-between;

  section:first-child {
    width: 50%;
    margin-left: 3%;
  }

  section:last-child {
    width: 45%;
  }

  h2 {
    margin-top: 1.5rem;
    font-size: 3.5em;
    margin-bottom: 0.25em;
    font-weight: bold;
    letter-spacing: 1.5px;
    line-height: 1.05em;
    display: inline-block;
  }

  h3 {
    font-size: 1.5em;
    margin-top: 0;
    margin-bottom: 1.5em;
    font-weight: 300;
  }

  @media ${(props) => props.theme.tablet} {
    padding: 50px 15px;
    flex-direction: column;

    h2 {
      font-size: 2.5em;
    }

    h3 {
      font-size: 1.25em;
    }

    section:first-child,
    section:last-child {
      width: 100%;
    }

    section:first-child {
      margin: 0 0 2em 0;
    }
  }
`;

const Philosophy = styled.section`
  background: #f9f8f9;
  display: flex;
  justify-content: space-around;
  margin-top: -2em;
  padding: 5em 2em 2em 2em;

  div {
    width: 30%;
  }

  h3 {
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    margin-top: 0;
  }

  @media ${(props) => props.theme.tablet} {
    flex-direction: column;

    div {
      width: 90%;
      margin: auto;
    }
  }
`;

class IndexPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <Theme>
        <div>
          <Header currentPath={this.props.location.pathname} fixed />
          <Hero>
            <section style={{ paddingRight: '50px', borderRight: '1px solid #5cc468', marginTop: '40px', marginBottom: '40px' }}>
              <img src={SenseLogo} alt="Sixgill Sense Logo" style={{ height: '70px', margin: '0 0 10px 0' }} />
              <h3><b>The Sensor Data Destination</b></h3>
              <p>
                Sixgill Sense enables developers to quickly and easily acquire sensor data in any volume and velocity, understand it, and act on it programmatically. Sense  universally  supports  the  data  service requirements  of  any  sensor-dependent application.
              </p>
              <p>
                It’s your sensor data destination.
              </p>
            </section>
            <section style={{ marginTop: '40px', marginBottom: '40px', paddingLeft: '40px', paddingRight: '40px' }}>
              <h4>
                <b>Sixgill Sense for Developers</b>
              </h4>
              <p>
                Deploy, collaborate, and iterate with one backbone system that puts you and your IoT development needs first.
              </p>
              <p>
                <ul>
                  <li>Fast, easy device setup and connection</li>
                  <li>Full-featured portal with anywhere, anytime debugging mobile application</li>
                  <li>Highly visual dashboard for real-time analytics, administration and monitoring</li>
                  <li>Built-in geofencing and highly visual process for rules assignment  and triggered actions</li>
                </ul>
              </p>
              <p style={{ textAlign: 'center', marginTop: '30px' }}>
                <Button to="/guides/getting-started">
                  Get Started
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button to="/apis/overview" transparent>
                  API Docs
                </Button>
              </p>
            </section>
          </Hero>
          <Philosophy>
            <div>
              <h3>Sixgill Sense: How it Works</h3>
              <p>
                Sense features and benefits provide a unique combination of
                technology, services and capacity-maximizing capabilities. With
                continuous sensor data collection and real-time understanding,
                Sense helps enterprises know what assets are available, where
                they are and their operating state while keeping behaviors and
                actions on track.
              </p>
            </div>
            <div>
              <h3>Sense 2.0 Product Brief</h3>
              <p>
                Sixgill Sense 2.0 is a complete IoT sensor data platform
                solution that enables enterprise-wide unified ingestion and
                sensor data processing for the rapid and uniform development of
                enterprise applications. With features including a massively
                scalable architecture, real-time rule triggers, and advanced
                data correlation features like proximity, the IoT sensor data
                platform produces actionable, context-enriched insights for
                sensor and location data.
              </p>
            </div>
            <div>
              <h3>Sense 2.0 Architecture White Paper</h3>
              <p>
                Sense solves fragmentation and integration problems with a
                common, cross-enterprise architecture unbounded for scale and
                unrestricted for extensibility and deployment. Sense fits within
                the infrastructure of any enterprise for development of a wide
                range of task-specific applications for sensor-equipped assets.
              </p>
            </div>
          </Philosophy>
          <Footer />
        </div>
      </Theme>
    );
  }
}

export default IndexPage;
