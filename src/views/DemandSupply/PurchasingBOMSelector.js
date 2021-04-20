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
            </CCardHeader>
             <CCardBody>  <img src="/images/BOM.png" className="flex w-100 " alt="..."></img></CCardBody>
             
                </CCard>
                </CCol>
            </CRow>
    </>
  )
}

export default PurchasingBOMSelector 
