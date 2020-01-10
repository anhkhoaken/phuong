import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Switch, Button } from 'react-native';


const wd = Dimensions.get('window').width;
const hg = Dimensions.get('window').height;
class ChonKhachHang extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 10, }}>
                    <TextInput style={{ borderWidth: 0.5, width: wd -20, height: 40, padding: 5, }} placeholder="Nhập tên, số điện thoại, email, mã..."></TextInput>
                </View>
                <View style = {{marginTop: 5,padding: 10}}>
                    <Button title = "Thêm khách hàng mới"/>
                </View>
                <View style={{ marginLeft: 5,marginTop: 10, backgroundColor: '#fff', flexDirection: 'column',}}>
                    <TouchableOpacity style={{ flexDirection: 'column', borderBottomWidth: 0.5,width: wd, }}>
                        <Text> Tuấn Anh </Text>
                        <Text> 090657900 </Text>
                        <Text> Phường 10, Quận 12, TH HCM </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', borderBottomWidth: 0.5,width: wd, }}>
                        <Text> Phương Anh </Text>
                        <Text> 090657900 </Text>
                        <Text> Phường 10, Quận 12, TH HCM </Text>
                    </TouchableOpacity>
                </View>
                <View style = {{flex: 1,flexDirection: 'column-reverse'}}>
                    <Button title = "Xác Nhận" style = {{backgroundColor: '#6495ed',}}> </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
})

export default ChonKhachHang;