"use client"

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
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
import { tools } from '../content/tools.mdx'

interface tools {
  [key: string]: any;
}

interface Props {
  fundingSource: MDXRemoteSerializeResult;
}

export default async function Home({ fundingSource }: Props) {
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
        <ul>
          <li>Resource 1</li>
        </ul>
      </Section>
      <Section title="Funding" index={3}>
      <MDXRemote {...fundingSource} />
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


export async function getData() {
  const fundingMdx = (await import('../content/funding.mdx'));

  const fundingSource = await serialize(fundingMdx);

  return {
    props: {
      fundingSource,
    },
  };
}
