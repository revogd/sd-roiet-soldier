import { FlatList, StyleSheet, View, ActivityIndicator, Text, Button, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Search from './Search';



export default function Soldiers() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);  

    useEffect(() => {
        const fetchData = async () =>{          
          try {
            const {data: response} = await Axios.get("https://sd-roiet-api.onrender.com/soldiers");
            
            setRows(response);            
            setLoading(false);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);
  return (
    <View>
      <Search />       
    <View>
      {loading ? <ActivityIndicator size='large'/> : (
      <FlatList 
        data={rows}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        maxToRenderPerBatch={5}
        keyExtractor={(item) => item.ID}        
        //onEndReached={loadMoreData}
        //onEndReachedThreshold ={0.1}
        //ItemSeparatorComponent={() => <View style={styles.separator} />}
        //ListFooterComponent={this.renderFooter.bind(this)} 
       
      />
      )}
      
    </View>
    </View>
  )
}
const ItemView = ({item}) => {
  return (
    // FlatList Item
    <View>
      <Text
        style={styles.item}
        onPress={() => {navigation.navigate('Detail', {id: item.ID})}}>
          
         {item.ชื่อ}  {item.นามสกุล}   เกิด พ.ศ.{item.เกิด} {"\n"} 
         ตำบล {item.ตำบล} อำเภอ {item.อำเภอ}
      </Text>
    </View>
  );
};

const ItemSeparatorView = () => {
  return (
    //Item Separator
    <View
      style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'top',
    paddingTop: 30,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  item: {
    padding: 10,
    marginLeft: 10
  }
});
