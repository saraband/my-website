import React from 'react'
import { connect } from 'react-redux'
import 'Utils/common.scss'

import ListComponent from 'AppsComponents/immo-app/ListComponent'
import Layout from 'AppsComponents/immo-app/Layout'

/*
**  INDEX FINDIMO
*/
export default () => (
  <Layout>
    <ListComponent />
  </Layout>
)