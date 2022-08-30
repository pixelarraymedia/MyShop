import React from 'react'
import {Helmet} from "react-helmet";

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
      <title> {title} </title>
      <meta name= 'description' content={description}/>
      <meta name= 'keywords' content={keywords}/>
    </Helmet>
  )
}
Meta.defaultProps = {
    title : 'Welcome to MyShop',
    description : 'Powered by MERN stack',
    keywords : 'electronics, buy electronics, cheap electronics, MongoDB, Redux, Javascript'

}

export default Meta