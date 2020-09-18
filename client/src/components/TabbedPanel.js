import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TabbedPanel = () => (

  <Tabs>
    <TabList>
      <Tab>Mission</Tab>
      <Tab>My Story</Tab>
      <Tab>UX Process</Tab>
    </TabList>
    <TabPanel>
      <h2>Community Mission</h2>
      <p>To create a safe and secure platform for all to share personal stories of recovery, become involved with our communities through service, guiding others through sponsorship, and supporting our local and global communities through charitable donation.</p>
      <h2>Safe Harbor Statement</h2>
      <p>
        This website contains forward-looking statements which are related to operations, technology, prospects, plans, economic performance, and financial conditions. They involve known and unknown risks and uncertainties that may cause actual results to be materially different from the one implied by such projected forward-looking statements. These forward-looking statements are not guarantees of future performance but are rather based upon management’s current expectations and assumptions as to future events that may not prove to be accurate. Actual results may differ materially from those projected as a result of certain risks and uncertainties.
      </p>
    </TabPanel>
    <TabPanel>
      <h2>Prelude</h2>
      <p>
        The pandemic has disrupted our way of living, how we connect to others through being present emotionally and physically. It has created isolation, despair and fear. For those that were on the path to recovery, suddenly being diverted off, needing to find their way.
        The pandemic has also revealed the need to still connect, even more now than ever. The engine being in-person meetings which provided a safe space to hear other stories that mirrored my own. To know that I wasn’t alone in my journey.
        For those that suffer in silence, please know that you are not alone.
      </p>
      <h2>My Story</h2>
      <p>
        Hello, My name is Felix and I’m Codependent, a Child of an Alcoholic, Compulsive Debtor, and in recovery.
        I had a pretty dysfunctional childhood, with an abusive alcoholic father, a loving mother who worked multiple jobs, a family history that was bleak, filled with drama and turmoil.
        Growing up and carrying these problems with me, I noticed various problems in my life required a different group. I would have a hard time making time for different recovery group interaction juggling with work. There were various groups in my personal life that I’ve attended, AA, CoDA, Children of AA, Debtors Anonymous.
        I’ve served as a trusted servant, facilitating meetings and becoming more engaged in my recovery. This is my social impact / community service project, born out of experience and the pursuit of love, awareness and recovery.
      </p>
      <h2>Realization. It's more than one thing.</h2>
      <p>
        Previously, script-based meetings were accompanied with knowledge binder, laminated sheets so the next person that lead service could do so in a predictable way. These meetings relied on in-person participation, engagement and fellowship. Meeting growth varied depending on seasonal changes, scheduling with life events, and attendance based on location. Current health (pandemic) events require a need to adapt and a need for a modern digital solution.
        With the help of Zoom, a grass roots solution for those bold enough to make the technology leap, communities have ventured to online meetings.  Initial review indicates that not all meetings have made this transfer, indicated by the updates made on public and existing websites, both local and regional.  Some updated, others not. For those searching, finding outdated information is frustrating.
        As some independently run groups have better ideas than others, who could benefit from sharing these ideas, stories of recovery ?
        What if a speaker’s presentation was more widely available?   How much impact would that have at a local level, at a community level, at a national level?

      </p>
    </TabPanel>
    <TabPanel>
      <Container>
        <Row>
          <Col>
            <h3>Discovery &amp; Research</h3>
            <ul>
              <li className="completed">Stakeholder interviewing </li>
              <li className="completed">Project Planning </li>
              <li className="completed">Competitive/ Comparative Analysis</li>
              <li className="active">User Research</li>
              <li>Persona Creation</li>
              <li>Best Practices Research</li>
            </ul>

            <h3>Sketching &amp; Ideation</h3>
            <ul>
              <li>User Stories</li>
              <li>Rough Sketches</li>
            </ul>
          </Col>
          <Col>
            <h3>Narrowing Scope &amp; Structure </h3>
            <ul>
              <li>User Flows</li>
              <li>Scenarios</li>
              <li>Sitemap</li>
              <li>Wireframes </li>
            </ul>
            <h3>Prototyping &amp; Testing</h3>
            <ul>
              <li>Prototype</li>
              <li>Usability testing</li>
              <li>Multiple prototype iterations</li>
            </ul>
          </Col>
        </Row>
      </Container>



    </TabPanel>

  </Tabs>
);

export default TabbedPanel;
