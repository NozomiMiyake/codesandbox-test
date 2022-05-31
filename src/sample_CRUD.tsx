
// 列定義部
{
  headerName: "Full Name",
  field: "name",
  editable: true,
}

// 変更行セット
const changeset = useRef(new Set());

// セル変更のイベントハンドラで変更行セットに行IDを追加する
const onCellValueChanged = (event) => {
  changeset.current.add(event.node.id);
};

const saveClicked = () => {
  changeset.current.forEach((element) => {
    console.log(gridApi.getRowNode(element));
    // 保存処理が終わったら背景色のクリア処理が必要
  });
};

<Button variant="contained" color="primary" onClick={saveClicked}>
  save
</Button>

<AgGridReact
  onCellValueChanged={onCellValueChanged}
/>
