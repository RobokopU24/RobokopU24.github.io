import { AcronymTagline } from "@/components/AcronymTagline/AcronymTagline";
import { Card } from "@/components/Card/Card";
import { CardContainer } from "@/components/CardContainer/CardContainer";
import { CitationList } from "@/components/CitationList/CitationList";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Logo } from "@/components/Logo/Logo";
import { MainGrid } from "@/components/MainGrid/MainGrid";
import { Navigation } from "@/components/Navigation/Navigation";
import { OverviewSummary } from "@/components/OverviewSummary/OverviewSummary";
import { Section } from "@/components/Section/Section";
import { DataIcon } from "@/components/icons/DataIcon";
import { QueryIcon } from "@/components/icons/QueryIcon";

export default function Home() {
  return (
    <MainGrid numberOfRows={6}>
      <Navigation sections={[
        "Overview",
        "Tools",
        "Resources",
        "Funding",
        "License",
        "More Information",
      ]} />

      <Section title="Overview" hideTitle index={0}>
        {/* <Logo /> */}

        {/* Create a page title component */}
        <h1 style={{fontSize: '3rem', fontWeight: '300', letterSpacing: '3px'}}>AIxB</h1>
        <AcronymTagline />
        <OverviewSummary />
      </Section>
      <Section title="Tools" index={1}>
        <CardContainer>
          <Card
            title="ROBOKOP KG"
            href="http://robokopkg.renci.org/"
            target="_blank"
          >
            <p>ROBOKOP KG is an open-source biomedical knowledge graph containing ~10M nodes and ~250M edges drawn from ~30 biological data sources and bio-ontologies. Query the ROBOKOP KG directly in the Neo4j browser.</p>
          </Card>
          <Card
            title="ExEmPLAR"
            href="https://www.exemplar.mml.unc.edu/"
            target="_blank"
            warning="ExEmplar is under development and should be considered an experimental alternative to the ROBOKOP UI."
          >
            <p>ExEmplar is a generic Neo4j query-and-answer exploration tool that supports queries of the ROBOKOP KG and other Neo4j databases.</p>
          </Card>
          <Card
            title="RoboDocumentation"
            href="https://github.com/RobokopU24/RoboDocumentation/"
            target="_blank"
          >
            <p>A collection of notebooks and other documents to help users get the most out of ROBOKOP.</p>
          </Card>
        </CardContainer>
      </Section>
      <Section title="Resources" index={2}>
        <ul>
          <li>Resource 1</li>
        </ul>
      </Section>
      <Section title="Funding" index={3}>
        <p>
          ROBOKOP is a joint creation of the <a href="https://renci.org" target="_blank">Renaissance Computing Institute (RENCI)</a> at the <a href="https://www.unc.edu/" target="_blank">University of North Carolina at Chapel Hill</a> and <a href="https://covar.com/" target="_blank">CoVar LLC</a>. The prototype was developed with funding from the <a href="https://ncats.nih.gov/" target="_blank">National Center for Advancing Translational Sciences</a>, <a href="https://www.nih.gov/" target="_blank">National Institutes of Health</a> (award <a href="https://taggs.hhs.gov/Detail/AwardDetail?arg_AwardNum=OT2TR002514&arg_ProgOfficeCode=264" target="_blank">#OT2TR002514</a>). ROBOKOP&apos;s continued development is supported with joint funding from the <a href="https://reporter.nih.gov/search/ALIFnrPqJU6PEtxDUvY9EA/project-details/10697371?" target="_blank">National Institute of Environmental Health Sciences</a> and the <a href="https://datascience.nih.gov/about/odss" target="_blank">Office of Data Science Strategy</a> within the <a href="https://www.nih.gov/" target="_blank">National Institutes of Health</a> (award <a href="https://tools.niehs.nih.gov/portfolio/index.cfm?do=portfolio.grantDetail&grant_number=U24ES035214" target="_blank">#U24ES035214</a>).
        </p>
      </Section>
      <Section title="License" index={4}>
        <p>
          ROBOKOP is available under the <a href="https://opensource.org/license/mit/" target="_blank">MIT license</a>.
        </p>
        <div style={{height: '300px'}}>

        </div>
      </Section>
      <Section title="More Information" index={5}>
        <ContactForm />
      </Section>
    </MainGrid>
  );
}
