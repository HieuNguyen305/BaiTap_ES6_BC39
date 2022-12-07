import Mark from "./markstudents.js";
const getEle = (id) => document.getElementById(id);

getEle("btnKhoi1").onclick = () => {
  const diemToan = getEle("inpToan").value;
  const diemLy = getEle("inpLy").value;
  const diemHoa = getEle("inpHoa").value;
  console.log(diemToan, diemLy, diemHoa);
  const KhoiLop1 = new Mark(diemToan, diemLy, diemHoa);
  getEle("tbKhoi1").innerHTML = KhoiLop1.tinhDTB(diemToan, diemLy, diemHoa);
  console.log(KhoiLop1);
  
};
