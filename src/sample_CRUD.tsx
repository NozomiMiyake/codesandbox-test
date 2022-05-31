// セルが変更された際のフラッシュ色を標準から変更
const style = `
  .ag-theme-alpine .ag-cell-data-changed {
    background-color: #ffcdd2 !important;
  }`;

// 列定義部
{
  headerName: "Full Name",
  field: "name",
  editable: true,
}

const onCellValueChanged = (event) => {
  // 動的セルスタイルをセット（defaultColDefで最初に設定してしまってもいいかも）
  event.colDef.cellStyle = (params) => {
    if (params.data.isEdited) {
      return { "background-color": "#ffebee" };
    }
  };
  // 変更フラグを立てる
  event.data.isEdited = true;
  // 画面を更新するためにリフレッシュ（このタイミングで背景色が変わる）
  event.api.refreshCells({
    force: true,
    columns: [event.column.colDef.field],
    rowNodes: [event.node],
  });
};

<style>{style}</style>  // スタイルを適用する
<AgGridReact
  onCellValueChanged={onCellValueChanged}
  enableCellChangeFlash={true}  // フラッシュを有効化
  cellFlashDelay={100}  // フラッシュ時間
/>
