import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {SelectCountryStyle} from '../../styles/atoms';
import {useDispatch, useSelector} from 'react-redux';
import {setCountry} from '../../store/reducers/countryReducer';

function SelectCountry() {
  const selectedCountry = useSelector((state: any) => state.country.country);
  const dispatch = useDispatch();

  return (
    <Picker
      selectedValue={selectedCountry}
      onValueChange={itemValue => {
        dispatch(setCountry(itemValue));
      }}
      style={SelectCountryStyle.container}>
      <Picker.Item
        label="Mexico"
        value="mexico"
        style={SelectCountryStyle.text}
      />
      <Picker.Item
        label="Estados Unidos"
        value="united+states"
        style={SelectCountryStyle.text}
      />
      <Picker.Item
        label="Argentina"
        value="argentina"
        style={SelectCountryStyle.text}
      />
      <Picker.Item
        label="Chile"
        value="chile"
        style={SelectCountryStyle.text}
      />
      <Picker.Item
        label="Colombia"
        value="colombia"
        style={SelectCountryStyle.text}
      />
      <Picker.Item
        label="España"
        value="spain"
        style={SelectCountryStyle.text}
      />
      <Picker.Item label="Peru" value="peru" style={SelectCountryStyle.text} />
      <Picker.Item
        label="Venezuela"
        value="venezuela"
        style={SelectCountryStyle.text}
      />
      <Picker.Item
        label="Ecuador"
        value="ecuador"
        style={SelectCountryStyle.text}
      />
    </Picker>
  );
}

export default SelectCountry;
