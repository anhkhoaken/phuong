import React, { Component } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';

import DonHangHome from './manhinh/DonHangHome';
import ChonSanPham from './manhinh/ChonSanPham';
import ChonKhachHang from './manhinh/ChonKhachHang';
import ChotDon from './manhinh/ChotDon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <ChotDon></ChotDon>
    );
  }
}

export default App;