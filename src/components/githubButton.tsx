import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const GithubButton = () => {
  return (
    <a href="https://github.com/taro0079" className="flex">
      <StaticImage
        layout="fixed"
        width={30}
        height={30}
        quality={100}
        src="../../static/github-mark.png"
        alt="github"
        className="hover:scale-125 ease-in-out duration-300"
      />
    </a>
  )
}
