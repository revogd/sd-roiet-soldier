import { FlatList, StyleSheet, View, ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Search from '../components/Search';



const Soldiers = ({ navigation}) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);  

  

    useEffect(() => {
        const fetchData = async () =>{          
          try {
            
            const {data: response} = await Axios.get("https://sd-roiet-api.onrender.com/soldiers?_start=0&_limit=25");
            
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
        keyExtractor={(item) => item.ID.toString()}       
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

function ItemView ({item, navigation}) { 

  return (
    // FlatList Item
    <TouchableOpacity onPress={() => navigation.navigate('Soldier', {pid: item.ID.toString()})}>
    
      <Text style={styles.item}>          
         {item.ชื่อ}  {item.นามสกุล}   เกิด พ.ศ.{item.เกิด} ตำบล {item.ตำบล}
      </Text>
    
    </TouchableOpacity>
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
    //alignItems: 'center',
    //justifyContent: 'center',
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
export default Soldiers;