import React, { useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
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
                      <small>  <b> Target Date: April</b> </small>
                    </h5>
                  <div>
                    Purchasing BOM Selector Description
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Product Tree Search     
                      <small>  <b> Target Date: April</b> </small>
                    </h5>
                  <div>
                  Product Tree Search   Description
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Supplier BOM Search     
                      <small>  <b> Target Date: April</b> </small>
                    </h5>
                  <div>
                  Supplier BOM Search  Description
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    'Where Used?' BOM Search     
                      <small>  <b> Target Date: April</b> </small>
                    </h5>
                  <div>
                  'Where Used?' BOM Search    Description
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Demand Aggregator   
                      <small>  <b> Target Date: April</b> </small>
                    </h5>
                  <div>
                  Demand Aggregator Description
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
                      <small>  <b> Target Date: May</b> </small>
                    </h5>
                  <div>
                  RFQ Tracker  Description
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Purchase Requisition  (PR)  
                      <small>  <b> Target Date: May</b> </small>
                    </h5>
                  <div>
                  Purchase Requisition  (PR)   Description
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Open PO Tracker (Material)   
                      <small>  <b> Target Date: May</b> </small>
                    </h5>
                  <div>
                  Open PO Tracker (Material)  Description
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                      Open PO Tracker (Tooling)     
                      <small>  <b> Target Date: May</b> </small>
                    </h5>
                  <div>
                  Open PO Tracker (Tooling)   Description
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Last Time - Risk Buy Tracker   
                      <small>  <b> Target Date: May</b> </small>
                    </h5>
                  <div>
                  Last Time - Risk Buy Tracker  Description
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
