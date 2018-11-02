import moment from 'moment';

export function isIphoneX() {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimen.height === 812 || dimen.width === 812)
    );
}
export default {
  getHeight(h){
    const elemHeight = parseFloat(h);
    return PixelRatio.roundToNearestPixel(height * elemHeight / 100);
  },

  getWidth(w){
    const elemWidth = parseFloat(w);
    return PixelRatio.roundToNearestPixel(width * elemWidth / 100);
  },

  getFontSize(font){
    const deviceHeight = isIphoneX()
    ? height * 0.9
    : Platform.OS === 'android' ? height - StatusBar.currentHeight : height;
    const deviceHeightPercent = font * deviceHeight / 100;
    return Math.round(deviceHeightPercent);
  },

  getValue(value)
  {
    return typeof value!='undefined' && value!=null && value!='null' ? value : 'N/A';
  },

  getDate(date)
  {
    if(date=='N/A')
    {
      return '<1m';
    }
    var time='';
    if(Math.round(moment.duration(moment(new Date()).diff(moment.utc(date),'minutes')))<60)
    {
      if(Math.round(moment.duration(moment(new Date()).diff(moment.utc(date),'minutes')))<1)
      {
        time='<1m';
      }
      else
      {
        time=Math.round(moment.duration(moment(new Date()).diff(moment.utc(date),'minutes'))) + 'm';
      }
    }
    else if (Math.round(moment.duration(moment(new Date()).diff(moment.utc(date),'hours')))<24)
    {
      time=Math.round(moment.duration(moment(new Date()).diff(moment.utc(date),'hours'))) + 'h';
    }
    else if (Math.round(moment.duration(moment(new Date()).diff(moment.utc(date),'days')))<7)
    {
      time=Math.round(moment.duration(moment(new Date()).diff(moment.utc(date),'days'))) + 'd';
    }
    else
    {
      time=Math.round(moment.duration(moment(new Date()).diff(moment.utc(date),'weeks'))) + 'w';
    }
    return time;
  }
};

const getErrors = (message) => {
  let errors='';
  if(typeof message != 'string')
  {
    for (var i in message) {
        errors+=message[i]+'\n';
    }
    return errors;
  }
  return message;
};

export const showSuccess = (statusCode,response,Alert,message=null) => {
  if(statusCode==200)
  {
    if((response.error==1 || response.authError==1) && (typeof response.verificationError=='undefined' || (typeof response.verificationError!='undefined' && response.verificationError!=1)))
    {
      Alert.itemAction({title: 'Oops',message: getErrors(response.msg),type: 'error'});
    }
    else
    {
      if(message!=null)
      {
        Alert.itemAction({title: '',message:message,type: 'success'});
      }
    }
  }
  else
  {
    Alert.itemAction({title: 'Oops',message: 'Something went wrong',type: 'error'});
  }
};

export const APICall = async (dropdownAlert,URL,method,body=null,message=null) => {
  var response = await fetch(URL,{
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'auth-token': await AsyncStorage.getItem('auth-token')
    },
    body: body
  });
    try
    {
      var responseJson=await response.json();
      console.log(responseJson);
      dropdownAlert!=null ? showSuccess(response.status,responseJson,dropdownAlert,message):null;
      return responseJson;
    }catch(e)
    {
      dropdownAlert!=null ? dropdownAlert.itemAction({title: 'Oops',message: 'Something went wrong',type: 'error'}):null;
      return null;
    }

};
