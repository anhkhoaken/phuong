import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions,Button } from 'react-native';


const wd = Dimensions.get('window').width;
const hg = Dimensions.get('window').height;
class ChotDon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: wd, height: 100, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', marginLeft: 20, }}>
                        <Text> Gymball q2</Text>
                        <Text> Gymball q2</Text>
                        <Text> 2,400,000</Text>
                    </View>
                    <View style={{ backgroundColor: '#00ffff', width: 30, height: 30, marginLeft: 180 }}></View>
                    <Text style={{ marginLeft: 5, }}> 1 </Text>
                    <View style={{ backgroundColor: '#00ffff', width: 30, height: 30, marginLeft: 5, }}></View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 18, backgroundColor: '#fff' }}>
                    <View style={{ flexDirection: 'column', margin: 10, }}>
                        <Text style={{ marginTop: 5, fontSize: 16 }}> Tổng số lượng </Text>
                        <Text style={{ marginTop: 5, fontSize: 16 }}> Tổng tiền hàng </Text>
                        <Text style={{ marginTop: 5, fontSize: 16 }}> Tổng chiết khấu</Text>
                        <Text style={{ marginTop: 5, fontSize: 16 }}> Phí giao hàng </Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 150, width: 200, }}>
                        <Text style={{ marginTop: 16, marginLeft: 80, fontSize: 16 }} ellipsizeMode="tail"> 1 </Text>
                        <Text style={{ marginTop: 5, marginLeft: 20, fontSize: 16 }} ellipsizeMode="tail"> 2,400,000 </Text>
                        <Text style={{ marginTop: 5, marginLeft: 80, fontSize: 16 }} ellipsizeMode="tail"> 0 </Text>
                        <Text style={{ marginTop: 5, marginLeft: 80, fontSize: 16 }} ellipsizeMode="tail"> 0 </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', width: wd, backgroundColor: '#fff', marginTop: 15 }}>
                    <TouchableOpacity style={{ height: 50, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.5, }}>
                        <View style={{ backgroundColor: '#00ffff', width: 30, height: 30, marginLeft: 10, }}></View>
                        <Text style={{ marginLeft: 20, }}> Tuấn Anh - 0943987686 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 50, alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#00ffff', width: 30, height: 30, marginLeft: 10, }}></View>
                        <Text style={{ marginLeft: 20, }}> Giá bán lẻ </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column', width: wd, backgroundColor: '#fff', marginTop: 15 }}>
                    <TouchableOpacity style={{ height: 50, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.5, }}>
                        <View style={{ backgroundColor: '#00ffff', width: 30, height: 30, marginLeft: 10, }}></View>
                        <Text style={{ marginLeft: 20, }}> Thanh Toán </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 50, alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 20, }}> COD </Text>
                        <View style={{ backgroundColor: '#00ffff', width: 30, height: 30, marginLeft: 300, }}></View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ height: 50, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.5, marginTop: 10, backgroundColor: '#fff' }}>
                    <View style={{ backgroundColor: '#00ffff', width: 30, height: 30, marginLeft: 10, }}></View>
                    <Text style={{ marginLeft: 20, }}> Thêm ghi chú </Text>
                </TouchableOpacity>
                <View style = {{flex: 1,flexDirection: 'column-reverse', backgroundColor: '#fff', marginTop: 60}}>
                    <Button title = "Xác Nhận" style = {{backgroundColor: '#6495ed',}}> </Button>
                    <View style = {{flexDirection: 'row', width: wd,justifyContent:'space-around'}}>
                        <Text> Tạm tính </Text>
                        <Text> 2,400,000 </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
})

export default ChotDon;