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
    to: '/Demand Supply Balancing/Purchasing BOM Selector',
  //  icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'light',
      text: 'April',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Product Tree Search',
    to: '/Demand Supply Balancing/Product Tree Search',
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
    text: 'June',
  }
},
  {
    _tag: 'CSidebarNavItem',
    name: 'Purchase Requisition (PR)',
    to: '/Purchasing/Purchase Requisition (PR)',
    badge: {
      color: 'light',
      text: 'June',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Open PO Tracker (Material)',
    to: '/Purchasing/Open PO Tracker (Material)',
    badge: {
      color: 'light',
      text: 'June',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Open PO Tracker (Tools)',
    to: '/Purchasing/Open PO Tracker (Tools)',
    badge: {
      color: 'light',
      text: 'June',
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
    text: 'May',
  }
},
  {
    _tag: 'CSidebarNavItem',
    name: 'VMI Inv',
    to: '/Forecasting/VMI Inv',
    badge: {
      color: 'light',
      text: 'May',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Global Inv',
    to: '/Forecasting/Global Inv',
    badge: {
      color: 'light',
      text: 'May',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Network Topology',
    to: '/Forecasting/Network Topology',
    badge: {
      color: 'light',
      text: 'May',
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
},


  {
    _tag: 'CSidebarNavTitle',
    _children: ['Purchasing']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Base',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cards',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Forms',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Jumbotron',
        to: '/base/jumbotrons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navs',
        to: '/base/navs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navbars',
        to: '/base/navbars',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Progress',
        to: '/base/progress-bar',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Switches',
        to: '/base/switches',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tables',
        to: '/base/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Buttons',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Brand buttons',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dropdowns',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Icons',
    route: '/icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    route: '/notifications',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Toaster',
        to: '/notifications/toaster'
      }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 404',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Disabled',
    icon: 'cil-ban',
    badge: {
      color: 'secondary',
      text: 'NEW',
    },
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Labels']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label danger',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-danger'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label info',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-info'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label warning',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-warning'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
