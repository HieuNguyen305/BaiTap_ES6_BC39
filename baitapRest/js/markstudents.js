class Mark {
  constructor(
    _diemToan,
    _diemLy,
    _diemHoa,
    _diemVan,
    _diemSu,
    _diemDia,
    _diemEnglish
  ) {
    this.diemToan = _diemToan;
    this.diemLy = _diemLy;
    this.diemHoa = _diemHoa;
    this.diemVan = _diemVan;
    this.diemSu = _diemSu;
    this.diemDia = _diemDia;
    this.diemEnglish = _diemEnglish;
    this.diemTrungBinh = 0;
  }
  //method
  tinhDTB() {
    this.diemTrungBinh = (a, b, c, ...numbers) => {
      let total = 0;
      let sum = a + b + c;
      numbers.forEach((number) => {
        total += number;
      });
      return (sum + total) / (3 + number);
    };
  }
}
export default Mark;
