import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'ETES',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Demand Supply Balancing']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Purchasing BOM Selector',
    to: 'DemandSupply/PurchasingBOMSelector',
  //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'light',
      text: 'April',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Product Tree Search',
    to: 'DemandSupply/Product_Tree_Search',
  //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  badge: {
    color: 'light',
    text: 'April',
  }
},
  {
    _tag: 'CSidebarNavItem',
    name: 'Supplier BOM Search',
    to: '/Demand Supply Balancing/Supplier BOM Search',
   //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
   badge: {
    color: 'light',
    text: 'April',
  }
},
  {
    _tag: 'CSidebarNavItem',
    name: 'Usage BOM Search',
    to: '/Demand Supply Balancing/Usage BOM Search',
    //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'light',
      text: 'April',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Demand Aggregator',
    to: '/Demand Supply Balancing/Demand Aggregator',
   //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
   badge: {
    color: 'light',
    text: 'April',
  }
},
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Purchasing']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'RFQ Tracker',
    to: '/Purchasing/RFQ Tracker',
  //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  badge: {
    color: 'light',
    text: 'May',
  }
},
  {
    _tag: 'CSidebarNavItem',
    name: 'Purchase Requisition (PR)',
    to: '/Purchasing/Purchase Requisition (PR)',
    badge: {
      color: 'light',
      text: 'May',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Open PO Tracker (Material)',
    to: '/Purchasing/Open PO Tracker (Material)',
    badge: {
      color: 'light',
      text: 'May',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Open PO Tracker (Tools)',
    to: '/Purchasing/Open PO Tracker (Tools)',
    badge: {
      color: 'light',
      text: 'May',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Risk Buy Tracker',
    to: '/Purchasing/Open PO Tracker (Tools)',
    badge: {
      color: 'light',
      text: 'May',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Forecasting']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'MFQ Flooor Inv',
    to: '/Forecasting/MFQ Flooor Inv',
  //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  badge: {
    color: 'light',
    text: 'June',
  }
},
  {
    _tag: 'CSidebarNavItem',
    name: 'VMI Inv',
    to: '/Forecasting/VMI Inv',
    badge: {
      color: 'light',
      text: 'June',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Global Inv',
    to: '/Forecasting/Global Inv',
    badge: {
      color: 'light',
      text: 'June',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Network Topology',
    to: '/Forecasting/Network Topology',
    badge: {
      color: 'light',
      text: 'June',
    }
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Supplier Portal']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Supplier Portal',
    to: '/Supplier Portal/Weekly Forecast',
  //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'light',
      text: 'May',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Supply Tracker',
    to: '/Supplier Portal/Supply Tracker',
  //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  badge: {
    color: 'light',
    text: 'April',
  }
},
  {
    _tag: 'CSidebarNavItem',
    name: 'In Transit Tracker',
    to: '/Supplier Portal/In Transit Tracker',
   //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
   badge: {
    color: 'light',
    text: 'May',
  }
},
  {
    _tag: 'CSidebarNavItem',
    name: 'MFG Supply Heat Map',
    to: '/Supplier Portal/MFG Supply Heat Map',
    //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'light',
      text: 'April',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tier 1 Heat Map',
    to: '/Supplier Portal/Tier 1 Heat Map',
   //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
   badge: {
    color: 'light',
    text: 'April',
  }
}
]

export default _nav
