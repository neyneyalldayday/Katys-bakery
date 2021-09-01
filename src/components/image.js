import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import "./image.css"

const Image = () => {
    const data = useStaticQuery(graphql`
    query {
  allFile(
    filter: {extension: { regex: "/(jpg)|(jpeg)/" }
     name: { nin: ["background", "background2" ]}}
  ) {
    edges {
      node {
        base
        childImageSharp {
          fluid(maxHeight: 800, maxWidth: 800) {
							...GatsbyImageSharpFluid
          }
         gatsbyImageData(sizes: "80") 
        }
      }
    }
  }
}

    `)
    return (
       <div className="image-container">
           <h1>treats</h1>
           <div className="image-grid">
               {data.allFile.edges.map((image, key) => (
                 <Img key={key}
                 className="image-item"
                 fluid={image.node.childImageSharp.fluid}
                 alt={image.node.base.split('.')[0]}
                 />
               ))}
           </div>
       </div>
    )
}

export default Image
