import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { caseStudyBySlug } from '../../data/caseStudies';
import { caseStudyDetails } from '../../data/caseStudyDetails';
import CaseStudyMedia from './CaseStudyMedia';
import './CaseStudyDetail.css';

function makeSections(blocks) {
  const sections = [];
  let current;

  blocks.forEach((block) => {
    if (/^h[1-3]$/.test(block.type)) {
      current = { heading: block.text, blocks: [] };
      sections.push(current);
    } else if (current && block.text) {
      current.blocks.push(block);
    }
  });

  return sections.filter((section) => section.blocks.length > 0 && !/^looking to transform your business operations\??$/i.test(section.heading));
}

function ContentBlocks({ blocks }) {
  const rendered = [];

  for (let index = 0; index < blocks.length;) {
    const block = blocks[index];

    if (block.type === 'tr' && block.cells?.length > 1) {
      const rows = [];
      while (index < blocks.length && blocks[index].type === 'tr' && blocks[index].cells?.length > 1) {
        rows.push(blocks[index].cells);
        index += 1;
      }
      const [headers, ...bodyRows] = rows;
      rendered.push(
        <div className="csd-table-wrap" key={`table-${index}`} role="region" aria-label="Case study information" tabIndex="0">
          <table className="csd-table">
            <thead><tr>{headers.map((cell, cellIndex) => <th key={cellIndex} scope="col">{cell}</th>)}</tr></thead>
            <tbody>
              {bodyRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((_, cellIndex) => <td key={cellIndex} data-label={headers[cellIndex]}>{row[cellIndex] || ''}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (block.type === 'li') {
      const items = [];
      while (index < blocks.length && blocks[index].type === 'li') {
        items.push(blocks[index].text);
        index += 1;
      }
      rendered.push(<ul className="csd-list" key={`list-${index}`}>{items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</ul>);
      continue;
    }

    if (/^h[4-6]$/.test(block.type)) {
      rendered.push(<h3 className="csd-subheading" key={index}>{block.text}</h3>);
    } else if (block.type === 'tr') {
      rendered.push(<p key={index}>{block.text}</p>);
    } else {
      rendered.push(<p key={index}>{block.text}</p>);
    }
    index += 1;
  }

  return rendered;
}

function setMeta(name, value, attribute = 'name') {
  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);
  const created = !tag;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  const previous = tag.getAttribute('content');
  tag.setAttribute('content', value);
  return () => {
    if (created) tag.remove();
    else if (previous !== null) tag.setAttribute('content', previous);
  };
}

function updateSeo(study) {
  const previousTitle = document.title;
  document.title = `${study.detailTitle || study.title} | Jupical`;
  const restore = [
    setMeta('description', study.seoDescription || study.description),
    setMeta('og:title', `${study.detailTitle || study.title} | Jupical`, 'property'),
    setMeta('og:description', study.seoDescription || study.description, 'property'),
    setMeta('og:image', `${window.location.origin}${study.image}`, 'property'),
  ];

  let canonical = document.head.querySelector('link[rel="canonical"]');
  const createdCanonical = !canonical;
  const previousCanonical = canonical?.getAttribute('href');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = `${window.location.origin}${window.location.pathname}`;

  return () => {
    document.title = previousTitle;
    restore.forEach((restoreMeta) => restoreMeta());
    if (createdCanonical) canonical.remove();
    else if (previousCanonical) canonical.href = previousCanonical;
  };
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const record = caseStudyBySlug[slug];
  const detail = caseStudyDetails[slug];
  const study = useMemo(() => record && detail ? { ...record, ...detail } : undefined, [record, detail]);
  const sections = study ? makeSections(study.contentBlocks) : [];
  const overview = study?.meta ?? [];

  useEffect(() => {
    if (study) return updateSeo(study);
    return undefined;
  }, [study]);

  return (
    <div className="csd-page">
      <Navbar />
      <main className="csd-main">
        <div className="csd-wrap">
          <nav className="csd-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/case-studies">Case Studies</Link>
            {study && <><span aria-hidden="true">/</span><span aria-current="page">{study.title}</span></>}
          </nav>

          {!study ? (
            <section className="csd-not-found">
              <span className="csd-kicker">Case study unavailable</span>
              <h1>We couldn’t find that case study.</h1>
              <p>Browse the Jupical customer success stories to find another project.</p>
              <Link className="cs-btn" to="/case-studies">Browse case studies</Link>
            </section>
          ) : (
            <>
              <section className="csd-hero">
                <div className="csd-hero-copy">
                  <span className="csd-kicker">{study.category}</span>
                  <h1>{study.detailTitle || study.title}</h1>
                  {study.intro && <p className="csd-intro">{study.intro}</p>}
                  <dl className="csd-facts">
                    {[
                      { label: 'Client', value: overview.find((item) => item.label === 'Client')?.value || study.client },
                      ...overview.filter((item) => item.label !== 'Client'),
                    ].filter((fact) => fact.value).map((fact) => (
                      <div className="csd-fact" key={`${fact.label}-${fact.value}`}>
                        <dt>{fact.label}</dt>
                        <dd>{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="csd-hero-image">
                  <CaseStudyMedia study={study} />
                  <span>{study.client || study.title}</span>
                </div>
              </section>

              {sections.length > 0 && (
                <div className="csd-sections">
                  {sections.map((section, index) => {
                    const wide = /challenge|approach|solution scope|before and after|custom solutions|results and business impact/i.test(section.heading);
                    return (
                      <section className={`csd-section${wide ? ' csd-section--wide' : ''}`} key={`${section.heading}-${index}`}>
                        <h2>{section.heading}</h2>
                        <div className="csd-section-content"><ContentBlocks blocks={section.blocks} /></div>
                      </section>
                    );
                  })}
                </div>
              )}

              <section className="csd-cta">
                <div>
                  <span className="csd-kicker">Jupical Technologies</span>
                  <h2>Looking to transform your business operations?</h2>
                  <p>Talk with Jupical about an ERP solution shaped around your business.</p>
                </div>
                <Link className="cs-btn" to="/contact-us">Talk to Jupical</Link>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
