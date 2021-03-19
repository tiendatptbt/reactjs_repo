import logo from './logo.svg';
import './App.scss';
import BaiTapComponent from './components/baitap/BaiTapComponent';
import Sinhvien from './Databinding/Sinhvien';
import Event from './Databinding/Event';
import DemoIf from './CauTrucDieukhien_RErender/DemoIf';


function App() {
  return (
    <div className="App">
      {/* <BaiTapComponent /> */}
      {/* <Sinhvien/> */}
      {/* <Event/> */}
      <DemoIf/>
    </div>
  );
}

export default App;
