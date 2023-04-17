/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GithubButton } from "./githubButton"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div>
      <div className="bio bio-color p-8 rounded-lg flex flex-col">
        <div className="md:w-full flex flex-col">
          <StaticImage
            className="bio-avatar my-2"
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/profile-pic.png"
            width={50}
            height={50}
            quality={95}
            alt="Profile picture"
          />
          {author?.name && (
            <p className="bio-text text-xs md:text-sm my-2">
              Written by <strong>{author.name}</strong>
              {` `}
              <p>{author?.summary || null}</p>
            </p>
          )}
        </div>
        <div className="my-2">
          <GithubButton />
        </div>
      </div>
    </div>
  )
}

export default Bio
