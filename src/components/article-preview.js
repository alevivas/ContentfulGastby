import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

const articlePreview = (props) => {

  const article = props.article;

  console.log(article);
  var heroImage = article.heroImage;
  let img = <div></div>;
  if(heroImage != null){
    img =  <Img alt="" fluid={article.heroImage.fluid} />
  }

  let html = <p/>;
  if(article.description != null){
    html = <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  }
  return(
    <div className={styles.preview}>
    {img}
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    {html}
  </div>

  );


};

export default articlePreview;
