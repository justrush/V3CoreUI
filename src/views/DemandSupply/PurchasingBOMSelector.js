import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CRow,
  CEmbed,
  CEmbedItem
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const PurchasingBOMSelector = () => {

  return (
    <>

        <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Purchasing BOM Selector
              <DocsLink name="CJumbotron"/>
            </CCardHeader>
            <CCardBody>
              <CJumbotron className="border">
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron - style component for calling extra
                  attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                
                <p className="lead">
                  <CButton color="primary" size="lg">Quicksight Link Here</CButton>
                  <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a>
                </p>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default PurchasingBOMSelector 
