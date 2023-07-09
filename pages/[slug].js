import Head from 'next/head';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';
import PageHeader from 'components/PageHeader';
import PageBody from 'components/PageBody';
import { request } from 'lib/datocms';
import { metaTagsFragment, responsiveImageFragment } from 'lib/fragments';

export async function getStaticPaths() {
  const data = await request({ query: '{ allPages { slug } }' });

  return {
    paths: data.allPages.map((page) => `/${page.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
      query PageBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        page(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          slug
          h1
          content {
            value
            blocks {
              __typename
              ...on TextImageRecord {
                id
                title
                text(markdown: true)
                image {
                  responsiveImage(imgixParams: {fm: png }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
        }
      }
      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,
    preview,
    variables: {
      slug: params.slug,
    },
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
      preview,
    },
  };
}

export default function Page({ subscription, preview }) {
  const {
    data: { site, page },
  } = useQuerySubscription(subscription);

  const metaTags = page.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <div className="page">
        <PageHeader title={page.title} h1={page.h1} />
        <PageBody content={page.content} id={page.slug} />
      </div>
    </>
  );
}
