import React from 'react'
import { connect } from 'react-redux'
import 'Utils/common.scss'
import Layout from 'AppsComponents/immo-app/Layout'

/*
**  PROPERTY PAGE FINDIMO
*/
export default ({location}) => (
  <Layout>
    <p>Property ID = {location.search}</p>
  </Layout>
)