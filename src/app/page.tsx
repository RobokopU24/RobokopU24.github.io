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
import Resources from '../content/resources.mdx'
import { tools } from '../content/tools.mdx'
import Funding from '../content/funding.mdx'
import License from '../content/license.mdx'

interface tools {
  [key: string]: any;
}


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
          {tools.map((tool)=>(
            <Card
              key={tool.title}
              title={tool.title}
              href={tool.link}
              warning={tool.warning}
              target="_blank"
            >
              <p>{tool.description}</p>
            </Card>
          ))}
        </CardContainer>
      </Section>
      <Section title="Resources" index={2}>
        <Resources />
      </Section>
      <Section title="Funding" index={3}>
        <Funding />
      </Section>
      <Section title="License" index={4}>
        <License />
        <div style={{height: '300px'}}>

        </div>
      </Section>
      <Section title="More Information" index={5}>
        <ContactForm />
      </Section>
    </MainGrid>
  );
}
