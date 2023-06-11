import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Axios from 'axios';

export default function Soldier({route, navigation}) {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true); 
    const {id} = route.params; //Get the param */  
    console.log(id);


    useEffect(() => {
        const fetchData = async () =>{          
          try {
            const {data: response} = await Axios.get("https://sd-roiet-api.onrender.com/soldier/" + id);
            
            setItem(response);            
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
      {loading ? <ActivityIndicator size='large'/> : (
      
      <Text>{id} {item.ชื่อ}  {item.นามสกุล}   เกิด พ.ศ.{item.เกิด} </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})