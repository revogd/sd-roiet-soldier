import React from "react";
import { AppBar, HStack, IconButton, } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const NavBar = () => (
  <AppBar
    title="สำนักงานสัสดีจังหวัดร้อยเอ็ด"
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <HStack>        
        <IconButton
          icon={props => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      </HStack>
      
    )}
  />
);

export default NavBar;