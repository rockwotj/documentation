
import React, { useRef, useEffect, useState } from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'


const Rapidoc = ({ apiUrl }) => {
  const isDarkTheme = false

  // Rapidoc rendering

  const [apiData, setApiData] = useState(false)
  
  // Mount Rapidoc on client-side
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      require('rapidoc')
    }
  }, [])

  return (
    <>
    <rapi-doc
      spec-url="../../../../../../api/cloud.yaml"
      allow-authentication="true"
      allow-server-selection="false"
      allow-spec-url-load="false"
      allow-spec-file-load="false"
      allow-search="true"
      allow-advanced-search="false"
      allow-api-list-style-selection ='false'
      allow-try="true"
      show-header="false"
      show-info="false"
      show-components="false"
      theme="light"
      render-style="read"
      layout="row"
      primary-color="black"
      header-color="black"
      regular-font="sans-serif"
      mono-font="monospace"
      font-size="large"
      default-schema-tab="model"
      schema-style="table"
      schema-expand-level="3"
      schema-description-expanded="true"
      fill-request-fields-with-example="true"
      nav-bg-color="#161e2d"
      sort-tags="true"
      sort-endpoints-by="summary"
      use-path-in-nav-bar="false"
      on-nav-tag-click="expand-collapse"
            style={{
              height: 'calc(100vh - 60px)',
              width: '100%',
              maxWidth: '100%',
            }}
          ></rapi-doc>
    </>
  )
}

export default Rapidoc