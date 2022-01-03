import React from "react"
import { useEffect, useState } from "react";
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { MainContent } from '../styles/base'
import SEO from "../components/seo"

const SearchPage  = props => {
  const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join("")
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
    <SEO title="Search" />
    
     <MainContent>
      <h1 style={{ textAlign: `center` }}>Pesquisar</h1>
      <input
          className="ais-SearchBox"
          type="text"
          aria-label="Search"
          placeholder="Termo para pesquisar..."
          onChange={handleInputChange}
        />
      
        
      
      
      {posts.map(({ node }) => {
        const { excerpt } = node

        const { slug } = node.fields
        const {  title, date, description } = node.frontmatter
        return (
          
          <article key={slug}>
            <header>
              <h2>
                <Link to={slug}>{title}</Link>
              </h2>

              <p>{date}</p>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: description || excerpt,
                }}
              />
            </section>
            <hr />
          </article>
        )
      })}
    </MainContent>
  </Layout>
  )
}

export default SearchPage 

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")

            
          }

          fields {
            slug
          }
        }
      }
    }
  }
`