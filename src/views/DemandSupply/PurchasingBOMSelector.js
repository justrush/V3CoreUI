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
<img src="/images/ETES.png" alt=""/>
        <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Purchasing BOM Selector
              <DocsLink name="CJumbotron"/>
            </CCardHeader>
            <CCardBody>
              <CJumbotron className="border">
                <h1 className="display-3">@justrush</h1>
                <p className="lead">input snapshot for the Purchasing BOM Selector Here</p>
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
