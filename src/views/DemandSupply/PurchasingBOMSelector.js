import * as React from 'react';
import { 
  DataGrid,
  GridToolbarContainer,
  GridToolbar } from '@material-ui/data-grid';



function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbar />
    </GridToolbarContainer>
  );
}


  export default function ColumnSizingGrid() {
    return (

          <div style={{ height: 700, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} 
                components={{
                  Toolbar: GridToolbar 
                }}
                />
    </div>
  );
}
const columns = [
  { field: 'id', headerName: 'BOMid', width: 75, editable: false },
  { field: 'description', headerName: 'Description', width: 75, editable: false },
  { field: 'responsible_engineer_name', headerName: 'Lead Eng', width: 75, editable: false },
  { field: 'responsible_engineer_alias', headerName: 'Lead Eng @', width: 75, editable: false },
  { field: 'tpm_alias', headerName: 'Lead TPM @', width: 75, editable: true },
  { field: 'tpm_name', headerName: 'Lead TPM', width: 75, editable: true },
  { field: 'data_source', headerName: 'Data Source', width: 75, editable: false },
  { field: 'source_data_link', headerName: 'Source Link', width: 75, editable: true },
  { field: 'next_higher_assembly', headerName: 'Higher Assembly', width: 75, editable: false },
  { field: 'level_0', headerName: 'Lvl0', width: 75, editable: false },
  { field: 'level_1', headerName: 'Lvl1', width: 75, editable: false },
  { field: 'level_2', headerName: 'Lvl2', width: 75, editable: false },
  { field: 'level_3', headerName: 'Lvl3', width: 75, editable: false },
  { field: 'level_4', headerName: 'Lvl4', width: 75, editable: false },
  { field: 'level_5', headerName: 'Lvl5', width: 75, editable: false },
  { field: 'level_6', headerName: 'Lvl6', width: 75, editable: false },
  { field: 'level_7', headerName: 'Lvl7', width: 75, editable: false },
  { field: 'level', headerName: 'Part Lvl', width: 75, editable: false },
  { field: 'parent_nomenclature', headerName: 'Parent Nom', width: 75, editable: false },
  { field: 'manufacturer_part_num', headerName: 'Mfr. Part #', width: 75, editable: false },
  { field: 'purchasable_item', headerName: 'Purch Item', width: 75, editable: false },
  { field: 'qty_for_build', headerName: 'Build Qty', width: 75, editable: false },
  { field: 'need_by_date', headerName: 'Need By', width: 75, editable: false },
  { field: 'revision', headerName: 'Rev', width: 75, editable: false },
];

const rows = [
  
  {
    id:1,
    next_higher_assembly:null,
    description:"KUIPER PRODUCTION SATELLITE ASSEMBLY",
    level_0:"100100-201\/01-KUIPER PRODUCTION SATELLITE ASSEMBLY",
    level_1:null,
    level_2:null,
    level_3:null,
    level_4:null,
    level_5:null,
    level_6:null,
    level_7:null,
    level:0,
    data_source:1,
    source_data_link:"TC link not required",
    parent_nomenclature:null,
    responsible_engineer_name:"Aaron Carey",
    responsible_engineer_alias:"aarcarey@",
    tpm_alias:"TPM not listed",
    tpm_name:null,
    manufacturer_part_num:"Not Provided",
    purchasable_item:"No",
    qty_for_build:null,
    need_by_date:null,
    revision:'1'
    }
    ,
    {
    id:2,
    next_higher_assembly:1,
    description:"GSE ASSY RBF",
    Level_0:"100100-201\/01-KUIPER PRODUCTION SATELLITE ASSEMBLY",
    level_1:"105386-201\/01-GSE ASSYRBF",
    level_2:null,
    level_3:null,
    level_4:null,
    level_5:null,
    level_6:null,
    level_7:null,
    level:1,
    data_source:1,
    source_data_link:"TC link not required",
    parent_nomenclature:"KUIPER PRODUCTION SATELLITE ASSEMBLY",
    responsible_engineer_name:"Tim Keeler",
    responsible_engineer_alias:"keelerti@",
    tpm_alias:"TPM not listed",
    tpm_name:null,
    manufacturer_part_num:"Not Provided",
    purchasable_item:"No",
    qty_for_build:null,
    need_by_date:null,
    revision:'1'
    }
    ,
    {
    id:3,
    next_higher_assembly:2,
    description:"GSE ASSY, PX",
    level_0:"100100-201\/01-KUIPER PRODUCTION SATELLITE ASSEMBLY",
    level_1:"100100-201\/01-KUIPER PRODUCTION SATELLITE ASSEMBLY",
    level_2:"105386-203\/01-GSE ASSY, PX",
    level_3:null,
    level_4:null,
    level_5:null,
    level_6:null,
    level_7:null,
    level:2,
    data_source:1,
    source_data_link:"TC link not required",
    parent_nomenclature:"GSE ASSY RBF",
    responsible_engineer_name:"Tim Keeler",
    responsible_engineer_alias:"keelerti@",
    tpm_alias:"TPM not listed",
    tpm_name:null,
    manufacturer_part_num:"Not Provided",
    purchasable_item:"Unknown",
    qty_for_build:null,
    need_by_date:null,
    revision:'1'
    }
    ,
    {
    id:4,
    next_higher_assembly:3,
    description:"SHCS, 3\/8-24 X 1.25 LG, BLACK OXIDE x 6",
    level_0:"100100-201\/01-KUIPER PRODUCTION SATELLITE ASSEMBLY",
    level_1:"100100-201\/01-KUIPER PRODUCTION SATELLITE ASSEMBLY",
    level_2:"100100-201\/01-KUIPER PRODUCTION SATELLITE ASSEMBLY",
    level_3:"91251A426\/01-SHCS, 3\/8-24 X 1.25 LG, BLACK OXIDE x 6",
    level_4:null,
    level_5:null,
    level_6:null,
    level_7:null,
    level:3,
    data_source:1,
    source_data_link:"TC link not required",
    parent_nomenclature:"GSE ASSY, PX",
    responsible_engineer_name:"Tim Keeler",
    responsible_engineer_alias:"keelerti@",
    tpm_alias:"TPM not listed",
    tpm_name:null,
    manufacturer_part_num:"Not Provided",
    purchasable_item:"Unknown",
    qty_for_build:null,
    need_by_date:null,
    revision:'1'
    }
    ,
    {
    id:5,
    next_higher_assembly:3,
    description:"SHCS, 1\/4-20 X 1.00 LG, 18-8 SS x 4",
    level_0:"100100-201\/01-KUIPER PRODUCTION SATELLITE ASSEMBLY",
    level_1:"100100-201\/01-KUIPER PRODUCTION SATELLITE ASSEMBLY",
    level_2:"100100-201\/01-KUIPER PRODUCTION SATELLITE ASSEMBLY",
    level_3:"92196A542\/01-SHCS, 1\/4-20 X 1.00 LG, 18-8 SS x 4",
    level_4:null,
    level_5:null,
    level_6:null,
    level_7:null,
    level:3,
    data_source:1,
    source_data_link:"TC link not required",
    parent_nomenclature:"GSE ASSY, PX",
    responsible_engineer_name:"Tim Keeler",
    responsible_engineer_alias:"keelerti@",
    tpm_alias:"TPM not listed",
    tpm_name:null,
    manufacturer_part_num:"Not Provided",
    purchasable_item:"Unknown",
    qty_for_build:null,
    need_by_date:null,
    revision:'1'
    },
];