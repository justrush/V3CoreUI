import React, { useState } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CJumbotron,

  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
  CTabContent,
  CTabPane
} from '@coreui/react'

import { DocsLink } from 'src/reusable'




const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
 
<CRow>
        <CCol>
          <CCard color="info" > 
            
            <CCardBody color="secondary" > 
           
                         <h1 className="flex w-100">End to End Supply Chain (ETES) <img src="/images/etes_logo.png" class="img-thumbnail" height='45' width='92' alt="..."></img>  </h1>
              </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
      <CCol sm="12" xl="6">
          <CCard>
            <CCardBody>
              <CListGroup>
                <CListGroupItem action active>
                  <h4 className="d-flex w-100 justify-content-between">
                    Demand Supply Balancing
                    <small>3 days ago</small>
                  </h4>
                </CListGroupItem>
                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Purchasing BOM Selector         
                      <small>  <b> ECD: April</b> </small>
                    </h5>
                  <div>
                  Select right BOM version and Qty/Need-by data
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Product Tree Search     
                      <small>  <b> ECD: April</b> </small>
                    </h5>
                  <div>
                  Multi-Level BOM view (Top-level Satellite to Sub-tier components)
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Supplier BOM Search     
                      <small>  <b> ECD: April</b> </small>
                    </h5>
                  <div>
                  Multi-Level BOM grouped by Supplier
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    'Where Used?' BOM Search     
                      <small>  <b> ECD: April</b> </small>
                    </h5>
                  <div>
                  Sub-tier Components with SiliconExpert Data
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Demand Aggregator   
                      <small>  <b> ECD: April</b> </small>
                    </h5>
                  <div>
                  Consolidated Demand Plan across all product tiers
                </div>
                </CListGroupItem> 

              </CListGroup>

            </CCardBody>
          </CCard>
        </CCol>


        <CCol sm="12" xl="6">
          <CCard>
            <CCardBody>
              <CListGroup>
                <CListGroupItem action active>
                  <h4 className="d-flex w-100 justify-content-between">
                    Purchasing
                    <small>3 days ago</small>
                  </h4>
                </CListGroupItem>
                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    RFQ Tracker       
                      <small>  <b> ECD: May</b> </small>
                    </h5>
                  <div>
                  RFQ Tracker  Description
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Purchase Requisition  (PR)  
                      <small>  <b> ECD: May</b> </small>
                    </h5>
                  <div>
                  Purchase Requisition  (PR)   Description
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Open PO Tracker (Material)   
                      <small>  <b> ECD: May</b> </small>
                    </h5>
                  <div>
                  Open PO Tracker (Material)  Description
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                      Open PO Tracker (Tooling)     
                      <small>  <b> ECD: May</b> </small>
                    </h5>
                  <div>
                  Open PO Tracker (Tooling)   Description
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Last Time - Risk Buy Tracker   
                      <small>  <b> ECD: May</b> </small>
                    </h5>
                  <div>
                  Last Time - Risk Buy Tracker  Description
                </div>
                </CListGroupItem> 

              </CListGroup>

            </CCardBody>
          </CCard>
        </CCol>


        <CCol sm="12" xl="6">
          <CCard>
            <CCardBody>
              <CListGroup>
                <CListGroupItem action active>
                  <h4 className="d-flex w-100 justify-content-between">
                    Supplier Portal
                    <small>3 days ago</small>
                  </h4>
                </CListGroupItem>
                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Supplier Portal       
                      <small>  <b> ECD: May</b> </small>
                    </h5>
                  <div>
                  Supplier Portal  Description
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Supplier Tracker
                      <small>  <b> ECD: April</b> </small>
                    </h5>
                  <div>
                  Supply and Inventory feed from Suppliers
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    In Transit Tracker  
                      <small>  <b> ECD: May</b> </small>
                    </h5>
                  <div>
                  In Transit Tracker   Description
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                      MFG Supply Heat Map   
                      <small>  <b> ECD: April</b> </small>
                    </h5>
                  <div>
                  DS Heatmap for Satellite and Sub-systems
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Tier 1 Heat Map
                      <small>  <b> ECD: April</b> </small>
                    </h5>
                  <div>
                  DS Heatmap for Tier I/II components
                </div>
                </CListGroupItem> 

              </CListGroup>

            </CCardBody>
          </CCard>
        </CCol>



        <CCol sm="12" xl="6">
          <CCard>
            <CCardBody>
              <CListGroup>
                <CListGroupItem action active>
                  <h4 className="d-flex w-100 justify-content-between">
                    Forecasting
                    <small>3 days ago</small>
                  </h4>
                </CListGroupItem>
                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    MFG Floor Inv       
                      <small>  <b> ECD: June</b> </small>
                    </h5>
                  <div>
                  MFG Floor Inv   Description
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    VMI Inv  
                      <small>  <b> ECD: June</b> </small>
                    </h5>
                  <div>
                  VMI Inv  Description
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                   Global Inv  
                      <small>  <b> ECD: June</b> </small>
                    </h5>
                  <div>
                  Global Inv   Description
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                      Network Topology    
                      <small>  <b> ECD: June</b> </small>
                    </h5>
                  <div>
                  Network Topology      Description
                  </div>
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
