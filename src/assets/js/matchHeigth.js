// =====================================================
// matchHeight.jsのようなもの
// 第一引数に高さを揃えたい要素
// 第二引数に高さを合わせたい要素
// 要素全体ではなく合わせたい要素をピンポイントで当てる
// =====================================================
export const matchHeight = (match, align) => {
  const clientW = window.innerWidth;
  const spSize = 768;
  if (clientW < spSize) return;
  const targetH = match.getBoundingClientRect();
  for (let i = 0; i < align.length; i++) {
    align[i].style.height = targetH.height + 'px';
  }
};
