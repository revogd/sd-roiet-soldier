import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Axios from 'axios';

export default function Soldier( route ) {
    const [item, setItem] = useState([]);
    const { id } = route.params; //Get the param */  
    
    console.log(id);

    useEffect(() => {
        const fetchData = async (id) =>{          
          try {
            const {data: response} = await Axios.get("https://sd-roiet-api.onrender.com/soldier:id=${id}");
            
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
      <Text>id: {JSON.stringify(id)}</Text>
      <Text>{item.ชื่อ}  {item.นามสกุล}   เกิด พ.ศ.{item.เกิด} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})